"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const form_data_1 = __importDefault(require("form-data"));
const htmlparser = __importStar(require("htmlparser2"));
const tail_1 = require("tail");
const express_1 = __importDefault(require("express"));
const http = __importStar(require("http"));
const socket_io_1 = __importDefault(require("socket.io"));
const items_json_1 = __importDefault(require("./items.json"));
const mcLog = "/home/edeetee/.minecraft/logs/latest.log";
function translate(input) {
    return __awaiter(this, void 0, void 0, function* () {
        let f = new form_data_1.default();
        f.append("input", input);
        f.append("language", "english");
        f.append("picto", "sclera");
        let srcs = [];
        let parser = new htmlparser.Parser({
            onopentag: (name, attribs) => {
                if (name === "img") {
                    let src = attribs.src;
                    if (src.startsWith("http://webservices.ccl.kuleuven.be/picto"))
                        srcs.push(attribs.src);
                }
            }
        });
        return new Promise(resolve => {
            f.submit("http://picto.ccl.kuleuven.be/picto.php", (err, resp) => {
                let body = '';
                resp.on('data', chunk => body += chunk);
                resp.on('end', () => {
                    console.log(body);
                    parser.write(body);
                    parser.end();
                    resolve(srcs);
                });
            });
        });
    });
}
let tail = new tail_1.Tail(mcLog, {
    fromBeginning: false
});
let app = express_1.default();
let server = new http.Server(app);
let io = socket_io_1.default(server);
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
io.on('connection', function (socket) {
    console.log('a user connected');
    emits.forEach(emit => {
        io.emit("translation", emit);
    });
});
let emits = [];
function findItem(text) {
    let item = items_json_1.default.find(item => text.toLowerCase().includes(item.name.toLowerCase()));
    if (item)
        console.log();
}
tail.on("line", (data) => __awaiter(this, void 0, void 0, function* () {
    if (data.includes("[CHAT]")) {
        let nameStart = data.indexOf("<") + 1;
        let nameEnd = data.indexOf(">");
        let textStart = nameEnd + 2;
        //handler "edeetee was killed by x"
        if (nameStart < 5) {
            nameStart = data.indexOf("[CHAT]") + 7;
            //handle /me "* edeetee blah blah blah"
            if (data[nameStart] === "*")
                nameStart += 2;
            nameEnd = nameStart + data.slice(nameStart).indexOf(" ");
            textStart = nameEnd + 1;
        }
        let name = data.slice(nameStart, nameEnd);
        let text = data.slice(textStart);
        // console.log(data)
        console.log(`${name}: ${text}`);
        let translation = yield translate(text);
        // for(let picto of translation){
        //     console.log(picto)
        // }
        let n = 0;
        for (let i = 0; i < name.length; i++) {
            n += name.charCodeAt(i) / 128;
        }
        var randomColor = "#" + Math.floor(n / name.length * 16777215 / 3).toString(16);
        let emit = {
            name: name,
            text: text,
            color: randomColor,
            images: translation
        };
        emits.push(emit);
        io.emit("translation", emit);
    }
}));
server.listen(3000, function () {
    console.log('listening on *:3000');
});
//# sourceMappingURL=index.js.map