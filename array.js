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
function range(start, end, step = 1) {

    let array1 = []
    let inizio = step > 0 ? start : end;

    let fine;

    if (step > 0) {
        fine = end
    } else {
        fine = start
    }
    for (let i = start; i <= end; i += step) {

        array1.push(i)
    }

    return array1

}

console.log(range(0, 10))

function sum(...numbers) {

    let result = numbers[0]

    for (let i = 1; i < numbers.length; i++) {
        // const element = numbers[i];
        result += numbers[i];
    }
    return result;
}

console.log("somma", sum(...range(5)));


// function range(start, end, step = 1) {

//     let somma = 0;

//     for (let i = start; i <= end; i+= step) {

//         somma = somma + i
//     }

//     console.log(somma);

// }

// console.log(range(-1, 10))

// secondo esercizio di compito

// let arrayoriginal = [1, 2, 3, 4, 5, 6];

// function arrayReverse(arrayoriginal) {

//     let arrayReversed = [];

//     // for (let i = arrayoriginal.length - 1; i >= 0; i--) {

//     //     arrayReversed.push(arrayoriginal[i]);

//     // }

//     for (const number of arrayoriginal) {
//         arrayReversed.unshift(number)
//     }
//     return arrayReversed;
// }

// let reverseArray = arrayReverse(arrayoriginal);

// console.log(reverseArray);

// function reverseInPlace(arrayoriginal) {
//     // arrayoriginal= arrayReverse(arrayoriginal);
//     for (let i = 0; i < arr.length / 2; i++) {
//         const headelement = arr[i];
//         const tailelement = arr[arr.length - 1 - i];

//         // let temp = headelement
//         // headelement = tailelement
//         // tailelement = temp   
//         let temp = arr[i]
//         arr[i]= arr[arr.length - 1 -i]
//         arr[arr.length - 1 -i] = temp
//     }
// }

// reverseInPlace(arrayoriginal)

// console.log("in place", arrayoriginal);

let array5 = [7, 4, 100, 12];

function doubleFirstElement(array) {
    
    // let tempArray = []
    
    // for (let i = 0; i < array.length; i++) {
    //     tempArray.push(array[i])
        
    // }
    let tempArray = [...array]

    tempArray[0] = tempArray[0] * 2;

    return tempArray;

}

let newarray = doubleFirstElement(array5)

console.log(array5);

console.log(newarray);

let finalArray = [23, 13, 5, 12];

// function sumFirst4ElementsOfArray(array) {
//     return array[0] + array[1] + array[2] + array[3]
// }

function sumFirst4ElementsOfArray([el0, el1, el2, el3]) {
    return el0 + el1 + el2 + el3;
}

let lastElement = {value: 3, nextelement:null}

let secondElement = {value: 7, nextelement:lastElement}

let firstElement = {value: 5, nextelement:secondElement}


console.log(firstElement.value, firstElement.nextelement.value, firstElement.nextelement.nextelement.value);



