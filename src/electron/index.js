const { app, BrowserWindow, ipcMain, globalShortcut } = require('electron');
const path = require('path');
const os = require('os');
var fs = require('fs');
const DeckTracker = require('./DeckTracker/DeckTracker');
const SetupManager = require('./DeckTracker/SetupManager');

let mainWindow;

app.on('ready', () => {

    mainWindow = new BrowserWindow(
        {
            width: 1280,
            height: 700,
            resizable: false,
            frame: false,
            title: "HearthLounge",
            icon: path.resolve(__dirname, '../../assets/app-icon.png')
        }
    );
    
    mainWindow.setMenu(null);

    globalShortcut.register('F1', () => {
        mainWindow.webContents.toggleDevTools();
        //settingsWindow.webContents.toggleDevTools();
    });

    globalShortcut.register('Ctrl+R', () => {
        mainWindow.webContents.reloadIgnoringCache();
    });

    mainWindow.loadURL(path.resolve(__dirname, '../../index.html'));

    mainWindow.on('closed', () => {
        mainWindow = null;
        app.quit();
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

    ipcMain.on('openSettings', () => {
        createSettingsWindow();
    });

    ipcMain.on('closeSettings', () => settingsWindow.close());


    const dtc = new DeckTracker(mainWindow);
    const setupManager = new SetupManager();

    if(setupManager.isHearthstoneInstalled())  {
        setupManager.createHearthLoungeConfigIfNonExists();
        setupManager.fixGamePerformance();
    }
    
    ipcMain.once("hearthstone:installed:request", () => {
        mainWindow.webContents.send("hearthstone:installed:response", setupManager.isHearthstoneInstalled());
    }); 

    ipcMain.on('deckTracker:start', () => {
        if(setupManager.isHearthstoneInstalled()) {
            setupManager.createLogConfigIfNonExists();
            try {
                const logPath = JSON.parse(fs.readFileSync(path.resolve("hl-config.json")));
                dtc.start(path.join(logPath.hearthstoneFolder,'Hearthstone_Data','output_log.txt'));

            } catch(e) {
                console.log(e.message);
            }
        } else console.log("Hearthstone is not installed.");
    });

    ipcMain.on('deckTracker:stop', () => {
        dtc.stop();
    });



});


function createSettingsWindow() {
    settingsWindow = new BrowserWindow({
        parent: mainWindow,
        modal: true,
        width: 400,
        height: 140,
        frame: false,
        title: 'Settings',
        resizable: false
    });
    settingsWindow.loadURL(path.resolve(__dirname, '../../settings.html'));
    settingsWindow.on('closed', () => settingsWindow = null);
}
