//cara membuat variabel
var a = 'a';
let b = 'b';
const c = 'c'

//variabel bisa menampung tipe data string (text), integet/number, boolean, array, object

let nama = "jason"; //string
let umur = 22; //number
let apakahBenar = true; 
let uang = 5000.5

//operator aritmetika

let angka1 = 10;
let angka2 = 20;
console.log(angka1 + angka2, 'pertambahan');
console.log(angka1 - angka2, 'pengurangan');
console.log(angka1 / angka2, 'pembagian');
console.log(angka1 * angka2, 'perkalian');
console.log(angka1 % angka2, 'modulus');

//disini kita belajar mengisi variabel
let penampunganHasilOperatorAritmetika = angka1 + angka2;
console.log(penampunganHasilOperatorAritmetika);

penampunganHasilOperatorAritmetika = angka1 - angka2;
console.log(penampunganHasilOperatorAritmetika);

penampunganHasilOperatorAritmetika = angka1 / angka2;
console.log(penampunganHasilOperatorAritmetika);

penampunganHasilOperatorAritmetika = angka1 * angka2;
console.log(penampunganHasilOperatorAritmetika);

penampunganHasilOperatorAritmetika = angka1 % angka2;
console.log(penampunganHasilOperatorAritmetika);

//string juga bisa ditambah namun string ga bisa dikurang dengan operator aritmatika
let firstname = 'jason';
let lastname = 'lie';
let fullname = firstname + ' ' + lastname;
console.log(fullname)
console.log(firstname + ' ' + lastname)
console.log(firstname - lastname)

//alur pembacaan code
//untuk membaca code hrs mambacanya dari kiri kekanan, dan atas ke bawah

let number = 20;
console.log(number + 10);
number = 10;
console.log(number + 10);
number = false;
console.log(number + 10);

//pertanyaan? kenapa false - 10 tetao menjadi 10??/ karena false = 0, true = 1;
console.log(true + 10);

//membaca error
//contoh error
//const hewan = 'jerapah';
//console.log(hewan);
//hewan = 'buaya';