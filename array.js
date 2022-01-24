let firstArray = [1,true,'pippo'];

console.log(firstArray);

let secondArray = ['pippo','pluto','paperino'];

console.log(secondArray.length);

for (let i = 0; i < secondArray.length; i++) {
    const element = secondArray[i];
    console.log(element)
}

for (const element of secondArray) {
    console.log(element);
    
}
// lifo
secondArray.push('topolino');

console.log(secondArray);

let ultimo_elemento =secondArray.pop();

console.log(secondArray);

console.log(ultimo_elemento);
//fifo
let primoElemento = secondArray.shift()

console.log(secondArray);

console.log(primoElemento);

secondArray.unshift('paperone');

console.log(secondArray);

console.log(secondArray[1]);

secondArray[1]='paperina'

console.log(secondArray);

let thirdArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

let subArray= thirdArray.slice(2,5);

console.log(subArray);

console.log(thirdArray);

let subArray2 = thirdArray.splice(2,3, 12, 13, 14);

console.log(subArray2);

console.log(thirdArray);