"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const express_1 = __importDefault(require("express"));
// Filesystem
const fs = __importStar(require("fs/promises"));
const Kabatakur = require("./kabatakur");
const app = (0, express_1.default)();
const port = 3002;
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const num1 = 10;
        const num2 = 5;
        console.log("Addition:", Kabatakur.add(num1, num2));
        console.log("Subtraction:", Kabatakur.subtract(num1, num2));
        console.log("Multiplication:", Kabatakur.multiply(num1, num2));
        console.log('Division:', Kabatakur.divide(num1, num2));
        const data = yield fs.readFile("./src/latihan-baca-file.txt", "utf8");
        console.log(data);
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(`Hello, World! ${data}`);
    }
    catch (error) {
        console.error(error);
    }
}));
app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});