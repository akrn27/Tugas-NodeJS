import express from 'express';

const Looping = () => {
    console.log('Soal 3 For Loop')
    for(let i = 1; i <= 5; i++){
        console.log(i)
    }

    let i = 5;
    console.log('Soal 4 While')
    while(i >= 1){
        console.log(i)
        i--
    }
}

export default Looping;