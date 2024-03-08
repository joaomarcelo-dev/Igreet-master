"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const bot_1 = require("./bot");
const port = parseInt(process.env.PORT || '3333');
const host = process.env.HOST || 'localhost';
app_1.app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`);
    (0, bot_1.initVenom)();
});
