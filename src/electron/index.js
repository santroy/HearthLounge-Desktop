const { app, BrowserWindow, ipcMain, globalShortcut } = require('electron');
const path = require('path');
const os = require('os');
var fs = require('fs');
const DeckTrackController = require('./DeckTrackerController');

let mainWindow;

app.on('ready', () => {

    mainWindow = new BrowserWindow(
        {
            width: 1000,
            height: 600,
            resizable: false,
            frame: false,
            icon: path.resolve(__dirname, '../../assets/app-icon.png')
        }
    );
    
    mainWindow.setMenu(null);

    globalShortcut.register('F1', () => {
        mainWindow.webContents.toggleDevTools();
    });

    globalShortcut.register('Ctrl+R', () => {
        mainWindow.webContents.reloadIgnoringCache();
    });

    mainWindow.loadURL(path.resolve(__dirname, '../../index.html'));

    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    ipcMain.on('os:platform', () => {
        mainWindow.webContents.send('os:platform-reply', os.platform() );
    });

    ipcMain.on('closeApp', () => {
        mainWindow.close();
    });

    ipcMain.on('minimizeApp', () => {
        mainWindow.minimize();
    });

    const dtc = new DeckTrackController(path.join('C:','Program Files (x86)','Hearthstone','Hearthstone_Data','output_log.txt'));

    ipcMain.on('deckTracker:start', () => {
        dtc.startWatching(mainWindow);
    });

    ipcMain.on('deckTracker:stop', () => {
        dtc.stopWatching();
    });



});