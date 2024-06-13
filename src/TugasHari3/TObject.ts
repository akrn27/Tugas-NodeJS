const ObjPerson = () => {
  const person = {
    name: "John",
    age: 30,
  };

  const newPerson = { ...person, occupation: "Developer" };
  console.log("Soal 9");
  console.log(newPerson);
};

const ArrPeople = () => {
  const people = [
    { name: "Dika", age: 20 },
    { name: "Ahmad", age: 26 },
    { name: "John", age: 40 },
  ];

  const peopleFiltered = people.filter((person) => person.age >= 25);
  console.log('Soal 10')
  console.log(peopleFiltered)
};

export {ObjPerson, ArrPeople};