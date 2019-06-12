// import "isopen" as isopen
// import {post} from 'request'
// import {get as request} from 'simple-get'
import {teenyRequest as request} from 'teeny-request'
import { getImgs, getUrls } from './imgs';
// import {request} from 'http'
// import * as fs from 'fs'

const baseRelay = "https://httprelay.io/link/pictocraft"

const imgUrls = getUrls()
const imgsContainer = document.getElementById("interface");
const imgTemplate = imgsContainer.children.item(0) as HTMLInputElement;
imgsContainer.removeChild(imgTemplate)

const connectContainer = document.getElementById("connect");
const keyEl = document.getElementById("key")
document.getElementById("submit").onclick = ev => connect(keyEl.nodeValue)

// connect("1234")

function connect(key: string){
    connectContainer.style.display = 'none'

    imgUrls.forEach(imgUrl => {
        let newPicto = imgTemplate.cloneNode() as HTMLInputElement;
        newPicto.src = imgUrl
        imgsContainer.appendChild(newPicto)
    })

    imgsContainer.hidden = false;

    // request({
    //     url: baseRelay + 'f3fd',
    //     body: 'test1234',
    //     method: 'POST'
    // }, (err, resp, body) => {
    //     console.log(resp.statusCode)
    // })
}
