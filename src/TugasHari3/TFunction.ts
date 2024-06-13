const Greet = (name: string) => {
    console.log('Soal 5')
    console.log(`Hello ${name}!`)
}

const Add = (a: number, b: number) => {
    console.log('Soal 6')
    let sum = a + b;
    console.log(sum)
}

export {Greet, Add};