'use strict'
const {app, BrowserWindow, Notification, globalShortcut} = require("electron")

let mainWindow

function createWindow(){
    globalShortcut.register("Ctrl+C", ()=>{
        let myNotification = new Notification("Close", {
            body : "Window close"
        })

        myNotification.onclick = ()=>{
            console.log("clicked")
        }
    });

    mainWindow = new BrowserWindow({
        width: 300,
        height: 300, 
    });
    mainWindow.loadFile('src/index.html');

    mainWindow.on("closed", ()=>{
        mainWindow = null;
    });
}

app.on("ready", createWindow);

app.on("activate", ()=>{
    if(mainWindow === null){
        app.quit();
    }
})

app.on("window-all-closed", ()=>{
    if (process.platform !== 'darwin') {
        app.quit();
    }
})