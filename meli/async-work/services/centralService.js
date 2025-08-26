let centralStock = {};
let updateQueue = [];

function enqueueUpdate(update) {
    updateQueue.push(update);
    processQueue();
}

function processQueue() {
    while(updateQueue.length > 0) {
        const { productId, qtyChange } = updateQueue.shift();
        if (!centralStock[productId]) centralStock[productId] = 0;
        centralStock[productId] += qtyChange;
    }
}

function getCentralStock() {
    return centralStock;
}

module.exports = { enqueueUpdate, getCentralStock };
