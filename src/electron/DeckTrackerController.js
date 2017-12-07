const fs = require('fs');
const path = require('path');
const os = require('os');

class DeckTrackerController {

    constructor(filePath) {
        this.filePath = filePath;
        this.fileSize = null;
        this.fileDiff = null;
        this.watchingInterval = null;
        this.id = 0;
        this.regexs = {
            draw : /\[Zone\] ZoneChangeList.ProcessChanges\(\).*TRANSITIONING card \[entityName=(.*) id=(.*) zone=HAND zonePos=(.*) cardId=(.*) player=(.*)\] to FRIENDLY HAND/
        }
    }

    getFileSize(filePath) {
        return fs.statSync(filePath).size;
    }

    getFileDiff(actual) {
        return this.getFileSize(actual) - this.fileSize;
    }

    startWatching(windowContext) {

        this.fileSize = this.getFileSize(this.filePath);

        this.watchingInterval = setInterval(() => {

            let aFileSize = this.getFileSize(this.filePath);
            this.fileDiff = aFileSize - this.fileSize;

            if(this.fileDiff < 0) {

                this.fileSize = 0;
                this.fileDiff = aFileSize;

            } else {

                let buffer = new Buffer(this.fileDiff);
                let fileDescriptor = fs.openSync(this.filePath, 'r');

                fs.readSync(fileDescriptor, buffer, 0, this.fileDiff, this.fileSize);
                fs.closeSync(fileDescriptor);

                this.fileSize = aFileSize;

                this.processBuffer(buffer, windowContext);
            }

        }, 3000);
    }

    stopWatching() {
        clearInterval(this.watchingInterval);
    }

    processBuffer(buffer, windowContext) {
        buffer.toString().split(os.EOL).forEach((line) => {
            const drewCard = this.regexs.draw.exec(line);

            if(drewCard) {
                const card = {
                    id : this.id++,
                    name: drewCard[1]
                };
                windowContext.webContents.send('drew-cards:response', card);
            }
        });
    }


}

module.exports = DeckTrackerController;