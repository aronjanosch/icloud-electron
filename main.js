const electron = require('electron');
const { app, BrowserWindow } = electron;

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 700,
        icon: './icloud.png'
    });

    mainWindow.setTitle('iCloud Electron');
    mainWindow.loadURL('https://icloud.com/');

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});