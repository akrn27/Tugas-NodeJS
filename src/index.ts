import express from "express";
// Filesystem
import * as fs from "fs/promises";
import Variabel from "./TugasHari3/Variabel";
import Looping from "./TugasHari3/Looping";
import {Greet, Add} from "./TugasHari3/TFunction";
import { Fruit, MapNumbers } from "./TugasHari3/TArray";
import { ArrPeople, ObjPerson } from "./TugasHari3/TObject";

// const Kabatakur = require("./kabatakur");
const app = express();
const port = 3002;

app.get("/", async (req, res) => {
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
    console.log('Soal 1')
    console.log(Variabel())
    // Soal 2
    // Perbedaan antara var, let dan const adalah var memiliki cakupan fungsional, yang mana var dapat diakses di mana pun dalam fungsi saat var tersebut dideklarasikan. Kalau let mengimplementasikan cakupan blok scope, yang mana let ini hanya dapat diakses di dalam blok kode. Kalau const memiliki cakupan blok scope seperti let namun nilai variable pada const tidak dapat dirubah setelah diinisialisasi.
    // Soal 3 & 4
    Looping();
    // Soal 5 & 6
    Greet('Dika')
    Add(5, 6)
    // Soal 7 & 8
    Fruit();
    MapNumbers()
    // Soal 9 & 10
    ObjPerson();
    ArrPeople();
    
    
    const data = await fs.readFile("./src/latihan-baca-file.txt", "utf8");
    console.log(data);

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`Hello, World! ${data}`);
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
