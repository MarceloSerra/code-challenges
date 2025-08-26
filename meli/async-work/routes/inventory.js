const express = require('express');
const router = express.Router();
const inventoryService = require('../services/inventoryService');
const centralService = require('../services/centralService');

// GET stock da loja
router.get('/:storeId', (req, res) => {
    const { storeId } = req.params;
    const stock = inventoryService.getStock(storeId);
    res.json(stock);
});

// POST update stock (venda/reposição)
router.post('/update', (req, res) => {
    const { storeId, productId, qtyChange, version } = req.body;
    try {
        inventoryService.updateStock(storeId, productId, qtyChange, version);
        centralService.enqueueUpdate({ storeId, productId, qtyChange });
        res.json({ status: 'success' });
    } catch (err) {
        res.status(409).json({ status: 'fail', message: err.message });
    }
});

// GET stock central consolidado
router.get('/central', (req, res) => {
    res.json(centralService.getCentralStock());
});

module.exports = router;
