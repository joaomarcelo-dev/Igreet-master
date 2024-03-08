"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const messagesTemp = [];
const addMessageTemp = ({ body, expiration, from }) => {
    messagesTemp.push({ body, expiration, from });
};
const messageTemp = {
    addMessageTemp,
    messagesTemp
};
exports.default = messageTemp;
