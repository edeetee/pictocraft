# Pictocraft

<!-- Translate multiplayer chat text to images inside minecraft -->
Adds PECS accessibility into minecraft multiplayer chat. Provides both in-game message translation to images as well as a web interface for PECS input via a tablet or mobile phone, available at https://edeetee.github.io/pictocraft/. Use the key 'test' to try out the interface without the mod.

Soon you will be able to download an easy installer to apply this mod to minecraft.

## Features
- Random color identifiers for players
- Translates english into minecraft blocks, items and aac images
- Input interface works on any device with a web browser

## Examples
### 'Can you help me find some glass'
![example1](https://github.com/edeetee/pictocraft/raw/master/images/2019-06-13_17.53.45.png)
### 'When will it be dawn?'
![example2](https://github.com/edeetee/pictocraft/raw/master/images/2019-06-13_17.57.58.png)

## [Text2Picto](http://picto.ccl.kuleuven.be/index.php)
This mod wouldn't be possible without the use of this existing translation technology.
It would be good to get this running on the host machine, instead of using their server as it does currently if the Demo server goes down eventually.
Its images come from [Sclera Symbols](https://sclera.be/en/vzw/home).

----

## Development

[video example](https://photos.app.goo.gl/rG3nujY5LnPR7PsF8)

Uses the existing Text2Pict online translation demo to translate text inside minecraft for children with language disabilities.

You'll have to create your own Pusher api key in order to use the login functionality.
On my machine I have a file PusherApi.java that contains the private api keys.

https://github.com/mqtt/mqtt.github.io/wiki/public_brokers
I think the above could be my key!!

### Input Development

- Grid systems are easier to read
- Colored pictos are more enjoyable
- Most kids are used to navigating through categories by clicking on a general icon

## Thoughts

### Future
- Input system
- User testing
- Do translation locally

[Most recent fabric version](https://modmuss50.me/fabric.html)

## Thanks to the fabric-mc discord;
