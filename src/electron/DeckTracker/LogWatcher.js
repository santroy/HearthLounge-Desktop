const fs = require('fs');
const LogIPCManager = require('./LogIPCManager');

let logWatchingInterval = null;
let logIPCManager = null;

const logProperties = {
    logSize: null,
    checkPointedLogSize: null,
    logSizeDifference: null,
    logBuffer: null,
    logDescriptor: null
}

class LogWatcher {

    constructor(context) {
        this.context = context;
        //logFile = logfile;
        logIPCManager = new LogIPCManager(context);
    }

    startWatch(logFile) {

        //INITIAL

        //Get the current fileSize
        logProperties.logSize = getFileSize(logFile);

        //Starting comparing filesize !at least! every 3 seconds
        logWatchingInterval = setInterval(() => {

            logProperties.checkPointedLogSize = getFileSize(logFile);

            //Compare size from the begginig if changed
            logProperties.logSizeDifference = logProperties.checkPointedLogSize - logProperties.logSize;

            //If size is negative then log file was wiped, due to disc space saving
            if(logProperties.logSizeDifference < 0) {
                logProperties.logSize = 0;
                logProperties.logSizeDifference = logProperties.checkPointedLogSize;
            }

            logProperties.logBuffer = new Buffer(logProperties.logSizeDifference);

            logProperties.logDescriptor = fs.openSync(logFile, 'r');
            //Passing opened file (filedescriptor), buffer that data will be saved into, 
            //offset ignored, how many data will be saved (best equal to buffer), starting point in logFile
            fs.readSync(logProperties.logDescriptor, logProperties.logBuffer, 0, logProperties.logSizeDifference, logProperties.logSize);
            fs.closeSync(logProperties.logDescriptor);

            logProperties.logSize = logProperties.checkPointedLogSize;

            logIPCManager.process(logProperties.logBuffer);


        }, 3000);

    }

    stopWatch() {
        clearInterval(logWatchingInterval);
    }


}

function getFileSize(file) {
    return fs.statSync(file).size;
}


module.exports = LogWatcher;
