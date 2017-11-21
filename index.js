const { app, BrowserWindow, ipcMain, globalShortcut } = require('electron');
const path = require('path');
const os = require('os');

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow(
        {
            width: 900,
            height: 600,
            resizable: false,
            frame: false,
            icon: path.join(__dirname, 'assets/app-icon.png')
        }
    );
    
    mainWindow.setMenu(null);

    globalShortcut.register('F1', () => {
        mainWindow.webContents.toggleDevTools();
    });

    globalShortcut.register('Ctrl+R', () => {
        mainWindow.webContents.reloadIgnoringCache();
    });

    mainWindow.loadURL('file://' + __dirname + '/index.html');

    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    ipcMain.on('os:platform', () => {
        mainWindow.webContents.send('os:platform-reply', os.platform() );
    });

    ipcMain.on('closeApp', () => {
        console.log("Zamykam program");
        mainWindow.close();
    });

    ipcMain.on('minimizeApp', () => {
        console.log("Minimalizuje program");
        mainWindow.minimize();
    });
    


});