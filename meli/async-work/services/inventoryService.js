const fs = require('fs');
const lock = require('../utils/lock');

function readStock(storeId) {
    const data = fs.readFileSync(`./data/${storeId}.json`);
    return JSON.parse(data);
}

function writeStock(storeId, stock) {
    fs.writeFileSync(`./data/${storeId}.json`, JSON.stringify(stock, null, 2));
}

function getStock(storeId) {
    return readStock(storeId);
}

function updateStock(storeId, productId, qtyChange, version) {
    const stock = readStock(storeId);
    if (!stock[productId]) throw new Error('Produto não existe');
    
    lock.acquire(productId, () => {
        if (version !== stock[productId].version) {
            throw new Error('Conflito de concorrência');
        }
        stock[productId].qty += qtyChange;
        stock[productId].version += 1;
        writeStock(storeId, stock);
    });
}

module.exports = { getStock, updateStock };
