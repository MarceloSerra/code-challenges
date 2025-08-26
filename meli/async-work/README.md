INITIAL FOLDER STRUCTURE

async-work/
│
├─ server.js             # Entrypoint do Express
├─ services/
│   ├─ inventoryService.js  # CRUD de stock local
│   ├─ centralService.js    # Stock consolidado e sincronização
├─ data/
│   ├─ store1.json
│   ├─ store2.json
├─ utils/
│   ├─ lock.js             # Lock otimista
├─ routes/
│   ├─ inventory.js        # Endpoints de inventory
├─ tests/
│   ├─ testInventory.js
├─ run.md
├─ README.md
└─ package.json