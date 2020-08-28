import { app, BrowserWindow,Menu } from 'electron';
require('electron-reload')(__dirname);
var fs = require('fs');
var convertFactory = require('electron-html-to');



// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
let secWindow;
const createaddWindow = (arg) =>{
secWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
    plugins: true
  }
  });

var tmpFileName1 ="C:/Users/dell/Desktop/firstdesktop/src/prati.pdf";
var tmpFileName ="C:/Users/dell/Desktop/firstdesktop/src/prati.html";
fs.writeFileSync(tmpFileName,arg,"utf8");

fs.writeFileSync(tmpFileName1,tmpFileName,"utf8");
// var tmpFileName2 ="C:/Users/dell/Desktop/firstdesktop/src/prati1.pdf";

 




secWindow.loadURL(`file://${tmpFileName}`);

// secWindow.loadURL("data:text/html;charset=utf-8," + encodeURI(arg));
secWindow.webContents.openDevTools();
// secWindow.webContents.print({silent:true})
secWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    secWindow = null;
  });

var printString = "whatever text you need to print with optional ascii commands";
// var printer = "lpt1";


}
const createWindow = () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
    nativeWindowOpen: true
  }
  });

  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/index.html`);

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  // mainWindow.webContents.send('store-data', 'HEllo');
  // const mainmenu = Menu.buildFromTemplate(manmenutemplate);
  // Emitted when the window is closed.
  // Menu.setApplicationMenu(mainmenu)
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
};

const mainmenutemplate=[
{
  label:'File',
  submenu:[{
  label:'Add item'
  },
  {
    label:'Delete item'
  }]
}];
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

const { ipcMain } = require('electron')

ipcMain.on('asynchronous-message', (event, arg) => {
  console.log(arg) // prints "ping"

// event.sender.send('asynchronous-reply', arg)
createaddWindow(arg);


})


// ipcMain.on('okprint',(event,arg) =>{
//   console.log(arg);
//   event.sender.send('printthis','world');
// })

