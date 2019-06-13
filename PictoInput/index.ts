import {teenyRequest as request} from 'teeny-request'
import { imgCategories, idToUrl } from './imgs';

const baseRelay = "https://httprelay.io/link/pictocraft"

const uiContainer = document.getElementById("interface");
const imgsContainer = document.getElementById("input");
const imgTemplate = document.getElementsByClassName("picto").item(0);
const catTemplate = document.getElementsByClassName("category").item(0);

const connectContainer = document.getElementById("connect");
const keyEl = document.getElementById("key")
document.getElementById("submit").onclick = ev => connect(keyEl.nodeValue)

connect("1234")
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

            catEl.childNodes[Math.floor(2*i/keys.length)].appendChild(imgEl)
            // catEl.appendChild(imgEl)
        })
    })
}

function connect(key: string){
    connectContainer.style.display = 'none'
    uiContainer.hidden = false;

    // request({
    //     url: baseRelay + 'f3fd',
    //     body: 'test1234',
    //     method: 'POST'
    // }, (err, resp, body) => {
    //     console.log(resp.statusCode)
    // })
}