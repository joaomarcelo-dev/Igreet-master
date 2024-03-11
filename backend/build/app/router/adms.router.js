"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const adms_controller_1 = __importDefault(require("../controllers/adms.controller"));
const admsRouter = (0, express_1.Router)();
admsRouter.route('/')
    .post(adms_controller_1.default.createAdm)
    .delete(adms_controller_1.default.deleteAdm);
exports.default = admsRouter;
