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
const adms_service_1 = __importDefault(require("../services/adms.service"));
const createAdm = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, name, password, photo } = req.body;
    const { data, status } = yield adms_service_1.default.createAdm({ email, name, password, photo });
    return res.status(status).json(data);
});
const deleteAdm = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { data, status } = yield adms_service_1.default.deleteAdm(id);
    return res.status(status).json(data);
});
const admsController = {
    createAdm,
    deleteAdm
};
exports.default = admsController;
