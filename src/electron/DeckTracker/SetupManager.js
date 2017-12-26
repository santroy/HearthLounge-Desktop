const shell = require('node-powershell');
const fs = require('fs');
const path = require('path');


class SetupManager {

    constructor() {}

    isHearthstoneInstalled() {
        return fs.existsSync(`${process.env.LOCALAPPDATA}\\Blizzard\\Hearthstone`);
    }

    createLogConfigIfNonExists() {
        fs.existsSync(`${process.env.LOCALAPPDATA}\\Blizzard\\Hearthstone\\log.config`) ? null : fs.writeFileSync(`${process.env.LOCALAPPDATA}\\Blizzard\\Hearthstone\\log.config`, logConfig);
    }

    createHearthLoungeConfigIfNonExists() {
        fs.existsSync(`${path.resolve("hl-config.json")}`) ? null : fs.writeFileSync(`${path.resolve("hl-config.json")}`, hlConfig);
    }

    fixGamePerformance() {
        let ps = new shell({
            executionPolicy: 'Bypass',
            noProfile: true
          });
           
          ps.addCommand(`Add-MpPreference -ExclusionPath "$env:LOCALAPPDATA\\Blizzard\\Hearthstone"`);
          ps.invoke().then(output => {
            ps.dispose();
          })
          .catch(err => {
            ps.dispose();
          });
    }
}

module.exports = SetupManager;

const logConfig = 

`[Achievements]
LogLevel=1
ConsolePrinting=True
ScreenPrinting=False

[Arena]
LogLevel=1
ConsolePrinting=True
ScreenPrinting=False

[Power]
LogLevel=1
ConsolePrinting=True
ScreenPrinting=False
FilePrinting=true

[Decks]
LogLevel=1
ConsolePrinting=True
ScreenPrinting=False

[Zone]
LogLevel=1
ConsolePrinting=True
ScreenPrinting=False

[LoadingScreen]
LogLevel=1
FilePrinting=true
ConsolePrinting=false
ScreenPrinting=false
Verbose=true
`;

const hlConfig = `

{ 
    "hearthstoneFolder": "C:/Program Files (x86)/Hearthstone"
}

`;