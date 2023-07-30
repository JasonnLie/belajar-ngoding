let nilai = 30

if (nilai > 50) {
    console.log("lulus")
} else if (nilai >= 40) { 
    console.log("tidak lulus")
} else { //kalau tidak
    console.log("tidak lulus pake banget")
}

nilai = 50;

//Operator
if (nilai >= 80 && nilai <=100) {
    nilai = "A"
} else if (nilai >=70 && nilai < 80) {
    nilai = "B"
} else if (nilai >=60 && nilai < 70) {
    nilai = "C"
} else {
    nilai = "D"
}

console.log(nilai)
nilai = 50
//&& semua kondisi harus terpenuhi lalu dia akan menghasilkan nilai true (dan)
//or salah satu kondisi harus terpenuhi lalu dia akan menghasilkan nilai true

let banding = nilai >=80 && nilai <= 100;
console.log(banding, "&&")
let banding2 = nilai >=80 || nilai < 100;
console.log(banding2, "||")
let banding3 = nilai != 50
console.log(banding3, "!")


//apa bedanya == dengan ===
let x = 50; //data number
let y = "50"  //data string

let banding4 = x == y;
console.log(banding4, "4")
let banding5 = x === y;
console.log(banding5, "5")

//if else bisa bersarang
let number = 3;
if (number >5) {
    if (number % 2 === 0) {
        console.log("lebih besar dari 5 dan genap")
    } else {
        console.log("lebih besar dari 5 dan ganjil")
    }
} else {
    if (number % 2 === 0) {
        console.log("lebih kecil atau sama dengan 5 dan genap")
    } else {
        console.log("lebih kecil atau sama dengan 5 dan ganjil")
    }
}