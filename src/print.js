// const path = require('path')
// import { app } from 'electron';
// const { ipcRenderer } = require('electron')
// // console.log(ipcRenderer.sendSync('synchronous-message', 'ping')) // prints "pong"
// let secWindow;
// ipcRenderer.on('asynchronous-reply', (event, arg) => {
//   console.log(arg) // prints "pong"
//   console.log(window);
// secWindow = new BrowserWindow({
//     width: 800,
//     height: 600
//   });
// secWindow.loadURL("data:text/html;charset=utf-8," + encodeURI(arg));
// secWindow.webContents.openDevTools();
// secWindow.on('close', function () { win = null })
// secWindow.show();
// window.print();
// // ipcRenderer.send('okprint','hello');
// })

// // ipcRenderer.on('printthis',(event,arg)=>{
// // 	console.log(arg)
// // 	secWindow.webContents.print({silent:true});
// // });
