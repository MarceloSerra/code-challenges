const express = require('express');
const bodyParser = require('body-parser');
const inventoryRoutes = require('./routes/inventory');

const app = express();
app.use(bodyParser.json());

app.use('/inventory', inventoryRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
