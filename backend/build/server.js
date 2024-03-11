"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const port = parseInt(process.env.PORT || '3333');
const host = process.env.HOST || 'localhost';
app_1.app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`);
});
