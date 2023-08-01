//while ()
//for ()

// let i = 0;

// while (i > 0) {
//     console.log(i)
//     i--
// }

// dalam looping ada yang namanya arah, kiri atau kanan, kiri itu pengurangan, kanan itu pertambahan
//hati hati dnegan infinite loop, atau loopnya tidak jalan

// for (let i = 0; i < 5; i++) {
//     console.log(i)
// }

// let name = "bryan"

//ada yang namanya method length untuk tiap data string dan array
//method mengembalikan nilai angka, total huruf yang ada pada string, atau total element yang ada pada array

// for (let i = 0; i < name.length; i++) {
    // console.log(name[i])
// }

//oke jadi, pada tipe data sting atau array di javascript, ada yang namanya indexing
//dimana index itu sudah pasti berawal dari 0;

// console.log(name[0] + name[5])

//diberikan kasus untuk menbalikan suatu kata, tanpa menggunakan method reverse

// let name = "agus"; //length 4, sedangkan index itu dari 0, a => 0, g=>1, u=>2, s=>3
// let result = "";

// for (let i = name.length - 1; i >= 0; i--) {
//     result += name[i];
// }
// console.log(result)

// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 5; j++) {
//         console.log(j)
//     }
//     console.log('')
// }
// console.log('selesai')

//kesimpulan looping sering bertemu dengan method length
//looing itu agar membuat code jadi lebih pendek
//looping itu agar membuat suatu proses menjadi dinamis

//counter paada looping

// let i = 0; //i adalah counternya

// while (i < 100) {
//     console.log(i);
//     i += 2; //disini counternya ditentukan besarnya berapa
// }

// let i = 0;

// //disini kita akan belajar menggabungkan dengan if else
// while (i < 50) {
//     //disini mencari ganjil atau genap
//     if (i % 2 === 0) {
//         console.log(`${i} adalah genap`)
//         }else {
//             console.log(`${i} adalah ganjil`)
//         }
//         i++
//     }

//problem fizzbuzz
//jika i adalah kelipatan 3 maka tampilan fizz
//jika i adalah kelipatan 5 maka tampilan buzz
//jika i adalah kelipatan 3 dan sekaligus kelipatan 5 maka tampilan fizzbuzz
//jika bukan kelipatan di atas maka tampilan angka
// for (let i = 1; i < 50; i++) {
// if (i % 3 === 0 && i % 5 === 0) {
//     console.log("fizzBuzz") 
//     } else if (i % 3 === 0 && i % 5 !== 0) {
//     console.log("fizz")
//     } else if (i % 5 === 0 && i % 3 !== 0) {
//     console.log("buzz")
//     } else {
//     console.log(i)
//     }
// }

//disini kalian harus coba coba iseng ubah ubah conditional statementnya
//demi pemahaman yang lebih lanjut

//pada looping ada yang namanya break dan continue;
//break membuat loop berhenti sepenuhnya
//continue membuat loop skip di iterasi tertentu

for (let i = 0; i < 10; i++) {
    if (i === 7) {
    break
    }
    console.log(i)
}