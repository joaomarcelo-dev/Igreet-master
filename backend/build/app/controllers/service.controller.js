"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const service_service_1 = __importDefault(require("../services/service.service"));
const dayjs_provider_1 = require("../../providers/dayjs.provider");
const createService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { phone, time } = req.body;
    const expirationTime = dayjs_provider_1.dayjsProvider.generateUnixTimestamp().toString();
    const { data, status } = yield service_service_1.default.createService({ expirationTime, phone, time });
    return res.status(status).json(data);
});
const getAllServices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const services = yield service_service_1.default.getAllServices();
    return res.status(200).json(services);
});
const deleteService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield service_service_1.default.deleteService(id);
    return res.status(204).end();
});
const getServiceById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { data, status } = yield service_service_1.default.getServiceById(id);
    return res.status(status).json(data);
});
const serviceController = {
    createService,
    getAllServices,
    deleteService,
    getServiceById,
};
exports.default = serviceController;
