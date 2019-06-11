// import "isopen" as isopen
// import {post} from 'request'
// import {get as request} from 'simple-get'
import {teenyRequest as request} from 'teeny-request'
// import {request} from 'http'
// import * as fs from 'fs'

let baseRelay = "https://httprelay.io/link/pictocraft"

function connect(key: string){
    getGui(0)

    request({
        url: baseRelay + 'f3fd',
        body: 'test1234',
        method: 'POST'
    }, (err, resp, body) => {
        console.log(resp.statusCode)
    })
}

const imgs = {
    //subjects
    me: 'ik',
    you: 'jij',
    us: 'wij',

    //feelings
    angry: 'boos',
    question: 'vraagteken',
    hello: 'hallo-zeggen-2',
    greetings: 'dag-zeggen',
    good: 'goed',
    bad: 'slecht',
    painHurt: 'pijn',
    crazy: 'onnozel-doen',
    haha: 'lachen',
    dance: 'dansen',

    //ideas
    lookAt: 'vinden',
    run: 'lopen',
    timeOut: 'time-out',
    whereIs: 'waar',
    outside: 'buiten',
    late: 'te-laat-klok',
    when: 'wanneer',
    night: 'nacht',
    dawn: 'ochtend',
    future: 'toekomst',
    why: 'waarom',
    how: 'hoe',
    
    //places
    hills: 'akkers',
    sea: 'zee',
    mountain: 'bergen',
    cave: 'grot',
    mine: 'mijn',
    jungle: 'jungle',
    iceberg: 'ijsberg',
    snow: 'sneeuw',

    //things
    tree: 'boom',
    bed: 'bed',
    rails: 'trein-rails',

    //comparators
    andPlus: 'plus',
    isEquals: 'gelijkheidsteken'
}

const keyEl = document.getElementById("key")
document.getElementById("submit").onclick = ev => connect(keyEl.nodeValue)

function getGui(category?: number){
    category = category || 0

    let message = "cat: " + category
    console.log(message)

    request({
        url: "http://picto.ccl.kuleuven.be/ScleraInterfaceEnglish.php"
    })

    // request({
    //     url: 'http://picto.ccl.kuleuven.be/ScleraCategory.php',
    //     headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    //     },
    //     body: message,
    //     method: "POST"
    // }, (err, resp, body) => {
    //     document.body.innerHTML = body
    // })
}