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
const adms_model_1 = __importDefault(require("../models/adms.model"));
const createAdm = (_a) => __awaiter(void 0, [_a], void 0, function* ({ email, name, password, photo }) {
    const newAdm = yield adms_model_1.default.createAdm({ email, name, password, photo });
    return {
        data: newAdm,
        status: 201,
    };
});
const deleteAdm = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const adm = yield adms_model_1.default.deleteAdm(id);
    return {
        data: adm,
        status: 200,
    };
});
const admsService = {
    createAdm,
    deleteAdm
};
exports.default = admsService;
