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
const Variabel_1 = __importDefault(require("./TugasHari3/Variabel"));
const Looping_1 = __importDefault(require("./TugasHari3/Looping"));
const TFunction_1 = require("./TugasHari3/TFunction");
const TArray_1 = require("./TugasHari3/TArray");
const TObject_1 = require("./TugasHari3/TObject");
// const Kabatakur = require("./kabatakur");
const app = (0, express_1.default)();
const port = 3002;
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Tugas Hari 2
        // const num1 = 10;
        // const num2 = 5;
        // console.log("Addition:", Kabatakur.add(num1, num2));
        // console.log("Subtraction:", Kabatakur.subtract(num1, num2));
        // console.log("Multiplication:", Kabatakur.multiply(num1, num2));
        // console.log('Division:', Kabatakur.divide(num1, num2));
        // Tugas Hari 3 Soal 1
        console.log('Hasil Dr Variabel TugasHari 3');
        console.log('Soal 1');
        console.log((0, Variabel_1.default)());
        // Soal 2
        // Perbedaan antara var, let dan const adalah var memiliki cakupan fungsional, yang mana var dapat diakses di mana pun dalam fungsi saat var tersebut dideklarasikan. Kalau let mengimplementasikan cakupan blok scope, yang mana let ini hanya dapat diakses di dalam blok kode. Kalau const memiliki cakupan blok scope seperti let namun nilai variable pada const tidak dapat dirubah setelah diinisialisasi.
        // Soal 3 & 4
        (0, Looping_1.default)();
        // Soal 5 & 6
        (0, TFunction_1.Greet)('Dika');
        (0, TFunction_1.Add)(5, 6);
        // Soal 7 & 8
        (0, TArray_1.Fruit)();
        (0, TArray_1.MapNumbers)();
        // Soal 9 & 10
        (0, TObject_1.ObjPerson)();
        (0, TObject_1.ArrPeople)();
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
