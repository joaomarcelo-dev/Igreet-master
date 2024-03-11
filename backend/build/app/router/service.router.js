"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const service_controller_1 = __importDefault(require("../controllers/service.controller"));
const serviceRouter = (0, express_1.Router)();
serviceRouter.route("/")
    .post(service_controller_1.default.createService);
serviceRouter.route('/:id')
    .get(service_controller_1.default.getServiceById);
exports.default = serviceRouter;
