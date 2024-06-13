"use strict";
// Soal 7
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapNumbers = exports.Fruit = void 0;
const Fruit = () => {
    const fruits = ["Pepaya", "Mangga", "Pisang"];
    fruits.push("Jambu");
    console.log('Soal 7');
    console.log(fruits);
};
exports.Fruit = Fruit;
const MapNumbers = () => {
    let numbers = [9, 2, 3, 4, 10, 5, 6];
    console.log('Soal 8');
    numbers.map((number) => console.log(number * 2));
};
exports.MapNumbers = MapNumbers;
