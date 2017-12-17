const LogWatcher = require('./LogWatcher');

let logWatcher = null;

class DeckTracker {

    constructor(context) {
        this.context = context;
        logWatcher = new LogWatcher(context);
    }

    start(file) {
        logWatcher.startWatch(file);
    }

    stop() {
        logWatcher.stopWatch();
    }

}

module.exports = DeckTracker;