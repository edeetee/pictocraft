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

function connect(key: string){
    connectContainer.style.display = 'none'

    Object.keys(imgCategories).forEach(cat => {
        let catEl = catTemplate.cloneNode()
        imgsContainer.appendChild(catEl)
        let imgs = imgCategories[cat]
        Object.keys(imgs).forEach(imgTitle => {
            let imgId = imgs[imgTitle]
            let imgEl = imgTemplate.cloneNode() as HTMLInputElement

            imgEl.id = imgId
            imgEl.src = idToUrl(imgId)
            catEl.appendChild(imgEl)
        })
    })
    // imgUrls.forEach(imgUrl => {
    //     let newPicto = imgTemplate.cloneNode() as HTMLInputElement;
    //     newPicto.src = imgUrl
    //     imgsContainer.appendChild(newPicto)
    // })

    uiContainer.hidden = false;

    // request({
    //     url: baseRelay + 'f3fd',
    //     body: 'test1234',
    //     method: 'POST'
    // }, (err, resp, body) => {
    //     console.log(resp.statusCode)
    // })
}