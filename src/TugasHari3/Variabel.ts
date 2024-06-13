const Variabel = () => {
    let x: number = 10;
    let y: number = 20;
    let sum: number = x + y;
    return sum;
}
// Soal 2
    // Perbedaan antara var, let dan const adalah var memiliki cakupan fungsional, yang mana var dapat diakses di mana pun dalam fungsi saat var tersebut dideklarasikan. Kalau let mengimplementasikan cakupan blok scope, yang mana let ini hanya dapat diakses di dalam blok kode. Kalau const memiliki cakupan blok scope seperti let namun nilai variable pada const tidak dapat dirubah setelah diinisialisasi.

export default Variabel;