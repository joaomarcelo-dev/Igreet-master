"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appointments_controller_1 = __importDefault(require("../controllers/appointments.controller"));
const appointmentsRouter = (0, express_1.Router)();
appointmentsRouter.route('/')
    .get(appointments_controller_1.default.getAllAppointments)
    .post(appointments_controller_1.default.createAppointment);
exports.default = appointmentsRouter;
