// import "isopen" as isopen
import {connect} from 'mqtt'

const BROKER = "msqqs://broker.hivemq.com";

var topic = "pictocraft/input"

console.log('hello')

let client = connect(BROKER)

client.on('connect', () => {
    console.log('con')
    client.subscribe(topic, (err, grant) => {
        if(!err){
            console.log(grant)
            client.publish(topic, "HELLO WORLD")
        } else
            console.log(err)
    })
})

client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString())
    client.end()
  })