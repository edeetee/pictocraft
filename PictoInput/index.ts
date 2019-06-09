// import "isopen" as isopen

let PORT = 1024;

import {scanNodes} from "scan-neighbors"

scanNodes(PORT, (err, nodes) => {
    console.log(nodes)
})