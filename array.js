// let firstArray = [1, true, 'pippo'];

// console.log(firstArray);

// let secondArray = ['pippo', 'pluto', 'paperino'];

// console.log(secondArray.length);

// for (let i = 0; i < secondArray.length; i++) {
//     const element = secondArray[i];
//     console.log(element)
// }

// for (const element of secondArray) {
//     console.log(element);

// }
// // lifo
// secondArray.push('topolino');

// console.log(secondArray);

// let ultimo_elemento = secondArray.pop();

// console.log(secondArray);

// console.log(ultimo_elemento);
// //fifo
// let primoElemento = secondArray.shift()

// console.log(secondArray);

// console.log(primoElemento);

// secondArray.unshift('paperone');

// console.log(secondArray);

// console.log(secondArray[1]);

// secondArray[1] = 'paperina'

// console.log(secondArray);

// let thirdArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let subArray = thirdArray.slice(2, 5);

// console.log(subArray);

// console.log(thirdArray);

// let subArray2 = thirdArray.splice(2, 3, 12, 13, 14);

// console.log(subArray2);

// console.log(thirdArray);

// let numeroPiuGrande = Math.max(5, 10, 2)

// console.log(numeroPiuGrande);

// let numeroPiuGrandeDellArray = Math.max(...thirdArray);

// console.log("numero piu grande dell'array", numeroPiuGrandeDellArray);

// function stringaPiuLunga(...stringhe) {
//     let str = ""
//     for (let i = 0; i < stringhe.length; i++) {
//         const element2 = stringhe[i];
//         if (str.length < element2.length) {
//             str = element2;
//         }
//     }
//     return str
// }

// console.log(stringaPiuLunga("pippo", "topolino", "pluto"));


// function max(...numbers) {
//     let massimo = -Infinity;



//     for (let i = 0; i < numbers.length; i++) {
//         const element = numbers[i];

//         if (massimo < element) {
//             massimo = element;
//         }
//     }
//     return massimo;
// }

// console.log(max(-100, -12, -3, -1001));

// function min(...numbers) {
//     let minimo = +Infinity;



//     for (let i = 0; i < numbers.length; i++) {
//         const element = numbers[i];

//         if (minimo > element) {
//             minimo = element;
//         }
//     }
//     return minimo;
// }

// console.log(min(-100, -12, -3, -1001)); //primo esercizio

// function creaArray(number) {
//     let arrayVuoto = [];
//     for (let i = 0; i <= number; i++) {

//         arrayVuoto.push(i);

//     }

//     return arrayVuoto;
// }

// let nuovoArray = creaArray(5);

// console.log(nuovoArray); // secondo esercizio

// let arrayDiStringhe = ["ancona","torino","genova",""]
// function ArrayIniziali(arrayDiStringhe) {

//     let arrayIniz = [];

//     for (let j = 0; j < arrayDiStringhe.length; j++) {

//         if (arrayDiStringhe[j] === "") {
//             arrayDiStringhe.splice(j, 1);
//         }
//     }

//     for (let i = 0; i < arrayDiStringhe.length; i++) {
//         const element = arrayDiStringhe[i].toUpperCase();

//         arrayIniz.push(element[0]);
//     }
// return arrayIniz;
// }
// let NuovoArray= ArrayIniziali(arrayDiStringhe);
// console.log(NuovoArray);// terzo esercizio


// primo esercizio di compito



function range(start, end) {

    let somma = 0;

    for (let i = start; i <= end; i++) {

        somma = somma + i
    }

    console.log(somma);

}

console.log(range(-1, 10))

// secondo esercizio di compito

let arrayoriginal = [1, 2, 3, 4, 5];

function arrayReverse(arrayoriginal) {

    let arrayReversed = [];

    for (let i = arrayoriginal.length; i >= 0; i--) {
        arrayReversed.push(i);

    }
    return arrayReversed;
}

let reverseArray = arrayReverse(arrayoriginal);

console.log(reverseArray);



