function helloWorld() {
    return 'Hello World'
} //fungsi ini mempunyai nilai 'Hello World'

console.log(helloWorld())

function test() {
    console.log('test')
}

test()

//return memberikan nilai ke fungsi, bila tidak memberikan return di fungsi
//maka fungsi tersebut mempunyai nilai undefined

let hello = helloWorld();
let helll = 'Hello World';

function tambahAngka(angka1, angka2) { //parameter disini bisa banyak sekali, sesuai kebutuhan
    return angka1 + angka2;
}

console.log(tambahAngka(1,2))
console.log(tambahAngka(2,4))
console.log(tambahAngka(3,6))
console.log(tambahAngka(4,8))

let angka5 = tambahAngka(2,3);
console.log(angka5)

console.log('');

function balikKata(kata) {
    let balikKata = "";
    for(let i = kata.length - 1; i >= 0; i--) {
        balikKata += kata[i];
    }
    return balikKata;
}

console.log(balikKata('gajah'))
console.log(balikKata('kucing'))
console.log(balikKata('katak'))
console.log(balikKata('jerapah'))

console.log('');

function nambahinHurufBesarSetelahSpasi(kata) {
    let result = "";
    for (let i = 0; i < kata.length; i++) {
        if ((i === 0 || kata[i - 1] === ' ')) {
            result += kata[i].toUpperCase();
        } else {
            result += kata[i]
        }
    }
    return result;
}

console.log(nambahinHurufBesarSetelahSpasi('Jason lie setriawan'))