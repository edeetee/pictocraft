import { imgCategories, idToUrl } from './imgs'
import fetch from 'node-fetch'
import { connect } from 'tls';
const swal = require('sweetalert')

const baseRelay = "https://httprelay.io/link/pictocraft"

const uiContainer = document.getElementById("interface");
const imgsContainer = document.getElementById("input");
const imgTemplate = imgsContainer.getElementsByClassName("picto").item(0);
const catTemplate = imgsContainer.getElementsByClassName("category").item(0);

const message = document.getElementById("message")
const fakePicto = document.getElementById("fakePicto")
const deleteEl = document.getElementById("delete")
const send = document.getElementById("send")

imgTemplate.remove()
catTemplate.remove()

const connectContainer = document.getElementById("connect") as HTMLFormElement;
connectContainer.onsubmit = ev => {ev.preventDefault(); tryConnect(keyEl.value)}
const keyEl = document.getElementById("key") as HTMLInputElement
// document.getElementById("submit").onclick

loadImgs()

function loadImgs(){
    Object.keys(imgCategories).forEach(cat => {
        let catEl = catTemplate.cloneNode()
        imgsContainer.appendChild(catEl)
        let imgs = imgCategories[cat]

        catEl.appendChild(document.createElement("div"))
        catEl.appendChild(document.createElement("div"))

        Object.keys(imgs).forEach((imgTitle, i, keys) => {
            let imgId = imgs[imgTitle]
            let imgEl = imgTemplate.cloneNode() as HTMLInputElement

            imgEl.id = imgId
            imgEl.src = idToUrl(imgId)
            imgEl.value = imgId

            imgEl.onclick = () => addImage(imgEl)

            catEl.childNodes[Math.floor(2*i/keys.length)].appendChild(imgEl)
            // catEl.appendChild(imgEl)
        })
    })
}

deleteEl.onclick = () => {
    let pictos = message.getElementsByClassName("picto")
    let lastPicto = pictos.item(pictos.length-1)

    if(lastPicto !== undefined)
        lastPicto.remove()
    if(pictos.length === 0)
        fakePicto.hidden = false;
}

send.onclick = () => {
    let pictos = message.querySelectorAll(".picto")
    let ids = []

    for (let i = 0; i < pictos.length; i++) {
        const picto = pictos[i] as HTMLInputElement;
        ids.push(picto.value);
        picto.remove()
    }

    fakePicto.hidden = false;

    let body = ids.join(" ")
    let url = baseRelay + "message" + key

    console.log("sending " + body + " to " + url);

    fetch(url, {
        body: body,
        method: 'POST'
    })
}

function addImage(el: HTMLInputElement){
    fakePicto.hidden = true;
    message.insertBefore(el.cloneNode(), deleteEl);
}

let key: string;
async function tryConnect(inKey: string){
    let controller = new AbortController()
    setTimeout(() => controller.abort(), 4000)

    let url = baseRelay + "connect" + inKey.toLowerCase();
    try{
        if(inKey != "fake" && inKey != 'test'){
            await fetch(url, {
                method: 'GET',
                signal: controller.signal
            })
        }

        connectContainer.style.display = 'none'
        uiContainer.hidden = false;
        key = inKey;

    } catch(e) {
        console.log("Could not connect to " + url)
        if(inKey.length === 4)
            swal({
                title: "Could not connect to " + inKey,
                text: "Make sure Minecraft is running and the connection key is correct"
            })
        else
            swal({
                title: inKey.length !== 0 ? inKey + " is not a valid connection key" : "You need connection key",
                text: "The key can be found in the Minecraft pause menu and will be 4 characters long"
            })
    }

    // console.log(resp)
}

function reqLog(err: any, resp: Response, body: any) {
    if(err)
        console.error(err)
    else
        console.log(resp)
}