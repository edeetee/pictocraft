import FormData from 'form-data'
import * as htmlparser from 'htmlparser2'
import {promisify} from 'util'
import {Tail} from 'tail'

import express from 'express'
import * as http from 'http'
import socketio from 'socket.io'

import items from './items.json'

const mcLog = "/home/edeetee/.minecraft/logs/latest.log"

async function translate(input: string): Promise<string[]>{
    let f = new FormData()
    f.append("input", input)
    f.append("language", "english")
    f.append("picto", "sclera")
    
    let srcs: string[] = []
    let parser = new htmlparser.Parser({
        onopentag: (name, attribs) => {
            if(name === "img"){
                let src = attribs.src
                if(src.startsWith("http://webservices.ccl.kuleuven.be/picto"))
                    srcs.push(attribs.src)
            }
        }
    })

    return new Promise(resolve => {
        f.submit("http://picto.ccl.kuleuven.be/picto.php", (err, resp) => {
            let body = ''
        
            resp.on('data', chunk => body += chunk)
        
            resp.on('end', () => {
                console.log(body)
                parser.write(body)
                parser.end()
                resolve(srcs)
            })
        })
    })
}

let tail = new Tail(mcLog, {
    fromBeginning: false
})


let app = express()
let server = new http.Server(app)
let io = socketio(server)

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    console.log('a user connected');
    emits.forEach(emit => {
        io.emit("translation", emit)
    })
});

let emits: MessageInfo[] = []

interface MessageInfo{
    name: string,
    text: string,
    color: string,
    images: string[]
}

function findItem(text: string){
    let item = items.find(item => text.toLowerCase().includes(item.name.toLowerCase()))
    if(item)
        console.log()
}

tail.on("line", async (data: string) => {
    if(data.includes("[CHAT]")){
        let nameStart = data.indexOf("<")+1
        let nameEnd = data.indexOf(">")
        let textStart = nameEnd+2

        //handler "edeetee was killed by x"
        if(nameStart < 5){
            nameStart = data.indexOf("[CHAT]")+7
            //handle /me "* edeetee blah blah blah"
            if(data[nameStart] === "*")
                nameStart += 2

            nameEnd = nameStart+data.slice(nameStart).indexOf(" ")
            textStart = nameEnd+1
        }

        let name = data.slice(nameStart, nameEnd)
        let text = data.slice(textStart)

        // console.log(data)
        console.log(`${name}: ${text}`)
        let translation = await translate(text)
        // for(let picto of translation){
        //     console.log(picto)
        // }
        let n = 0
        for(let i = 0; i < name.length; i++){
            n += name.charCodeAt(i)/128
        }
        var randomColor = "#"+Math.floor(n/name.length*16777215/3).toString(16);
        let emit: MessageInfo = {
            name: name,
            text: text,
            color: randomColor,
            images: translation
        }
        emits.push(emit)
        io.emit("translation", emit)
    }
})

server.listen(3000, function(){
    console.log('listening on *:3000');
});