import express from "express";
// Filesystem
import * as fs from "fs/promises";

const Kabatakur = require("./kabatakur");
const app = express();
const port = 3002;

app.get("/", async (req, res) => {
  try {
    const num1 = 10;
    const num2 = 5;

    console.log("Addition:", Kabatakur.add(num1, num2));
    console.log("Subtraction:", Kabatakur.subtract(num1, num2));
    console.log("Multiplication:", Kabatakur.multiply(num1, num2));
    console.log('Division:', Kabatakur.divide(num1, num2));

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
