"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const service_router_1 = __importDefault(require("./router/service.router"));
const cors_1 = __importDefault(require("cors"));
require("../schedule");
const appointments_router_1 = __importDefault(require("./router/appointments.router"));
const patient_router_1 = __importDefault(require("./router/patient.router"));
const adms_router_1 = __importDefault(require("./router/adms.router"));
const login_router_1 = __importDefault(require("./router/login.router"));
const app = (0, express_1.default)();
exports.app = app;
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    methods: ['GET', 'POST', 'PUT', 'UPDATE'],
    origin: '*'
}));
app.get('/', (req, res) => {
    return res.json({ message: 'Hello World' });
});
app.use('/service', service_router_1.default);
app.use('/appointment', appointments_router_1.default);
app.use('/patient', patient_router_1.default);
app.use('/adms', adms_router_1.default);
app.use('/login', login_router_1.default);
