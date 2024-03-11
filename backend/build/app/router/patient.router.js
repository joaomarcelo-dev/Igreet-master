"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const patient_controller_1 = __importDefault(require("../controllers/patient.controller"));
const patientRouter = (0, express_1.Router)();
patientRouter.route('/')
    .post(patient_controller_1.default.createPatient);
exports.default = patientRouter;
