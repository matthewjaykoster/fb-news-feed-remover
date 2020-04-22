const EXTENSION_NAME = 'FB-News-Feed-Remover'
const MAX_TRIES = 100;
const TIMER_INTERVAL_MS = 50;

const log = function(message) {
    console.log(`${EXTENSION_NAME}: ${message}`);
}

const removeFeed = function() {
    const feed = document.querySelectorAll('[role="feed"]')[0];
    if (feed) {
        log('Found Facebook News Feed.');
        feed.parentNode.parentNode.removeChild(feed.parentNode);
        log('Facebook News Feed removed.');
        return true;
    }

    return false;
}

const setupRemoveTimer = function(numTries) {
    if (!numTries) numTries = 0;

    removeFeed();
    if (numTries < MAX_TRIES) 
        setTimeout(() => { setupRemoveTimer(numTries + 1) }, TIMER_INTERVAL_MS);
}

setTimeout(() => { setupRemoveTimer(0); }, 0);