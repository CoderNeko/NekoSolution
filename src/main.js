'use strict'
let PSD = require("psd")

let psd = PSD.fromFile("res/test.psd");
psd.parse();

console.log(psd.tree().children()[0].export());
PSD.open("res/test.psd").then(psd=>{
    return psd.image.saveAsPng("res/test.png");
}).then(()=>{
    console.log("Finished!!")
})