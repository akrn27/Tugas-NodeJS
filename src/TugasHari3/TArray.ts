// Soal 7

const Fruit = () => {
  const fruits = ["Pepaya", "Mangga", "Pisang"];
  fruits.push("Jambu");

  console.log('Soal 7')
  console.log(fruits);
};

const MapNumbers = () => {
  let numbers = [9, 2, 3, 4, 10, 5, 6];
  console.log('Soal 8')
  numbers.map((number) => console.log(number * 2));
};

export { Fruit, MapNumbers };
