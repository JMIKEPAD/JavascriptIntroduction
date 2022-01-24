function divideByTwo(number) {
    let result = number / 2;
    return result
}

console.log(divideByTwo(8));


let capitalize = function (myString) {
    return myString.toUpperCase();
}

console.log(capitalize('pippo'));


let multyplyByTwo = (mynumber) => mynumber * 2

function multyplyBy2(mynumber) {
    let result = mynumber * 2
    return result

}

console.log(multyplyBy2(6));

let double = multyplyBy2

console.log(double(6));

let pippo = 8;

function scriviPippo() {
    let pippo = "pippo"
    console.log(pippo);
}

scriviPippo()

function multyplyBy4(firstnumber) {
    function multyplyBy2(secondnumber) {
        return secondnumber * 2
    }
    let result = multyplyBy2(multyplyBy2(firstnumber));
    return result
}

console.log(multyplyBy4(5));

// function fibonacci(number) {
//     if (number === 0) {
//         return 0;
//     }
//     if (number === 1) {
//         return 1;
//     }
//     return fibonacci(number - 1) + fibonacci(number - 2);
// }
// console.log(fibonacci(10));

function somma(primoNumero, secondoNumero) {
    return primoNumero + secondoNumero;
}

let risultato = somma();

console.log(risultato);

function minus(primoNumero, secondoNumero) {
    if (secondoNumero === undefined) {
        return -primoNumero;
    } else {
        return primoNumero - secondoNumero;
    }
}

console.log(minus(20));


function multiplyBy(firstNumber, secondNumber = 2) {
    return firstNumber * secondNumber;
}

console.log(multiplyBy(5, 7));


console.log(multiplyBy(7));

let variable = 4

let myfunction

if (variable >= 0) {
    let multiplier = 2
    myfunction = function (number) {
        return number * multiplier
    }
} else {
    let multiplier = 3
    myfunction = function (number) {
        return number * multiplier
    }
}

let result = myfunction(4);

console.log(result);
function multiplyByNumber(moltiplicatore) {
    return (number) => number * moltiplicatore;
}

let moltiplicaPer2 = multiplyByNumber(2)

let moltiplicaPer3 = multiplyByNumber(3)

let moltiplicaPer4 = multiplyByNumber(4)

console.log(moltiplicaPer2(5));

console.log(moltiplicaPer3(5));

console.log(moltiplicaPer4(5));



function applicaFunzioneSuNumero(mionumero, funzioneDaApplicare) {
    return funzioneDaApplicare(mionumero);
}


function dividiPer2(numero) {
    return numero / 2;
}

function dividiPer3(numero) {
    return numero / 3;
}

let res1 = applicaFunzioneSuNumero(8, dividiPer2)

let res2 = applicaFunzioneSuNumero(8, dividiPer3)

console.log(res1);
console.log(res2);


function min(firstNumber, secondNumber) {
    if (firstNumber < secondNumber) {
        return firstNumber;
    } else {
        return secondNumber;
    }

}

console.log(min(2, 3));


function minimo(primoNumero, secondoNumero) {
    let risultato1 = (primoNumero < secondoNumero) ? primoNumero : secondoNumero
    return risultato1
}

console.log(minimo(9, 27));

let array = [];

function fib1() {
    let array = [];
    for (let i = 0; i < 100; i++) {

        if (i === 0) {
            array.push(0)
        }

        if (i === 0) {
            array.push(1)
        }

        if (i > 1) {
            array[i] = array[i - 1] + array[i - 2];
        }
        console.log(array[i]);
    }
}

fib1(); //primo esercizio

function fib2(numeroFib, array) {
    for (let i = 0; i < numeroFib; i++) {

        if (i === 0) {
            array.push(0)
        }

        if (i === 0) {
            array.push(1)
        }

        if (i > 1) {
            array[i] = array[i - 1] + array[i - 2];
            return array[i];
        }

        if (numeroFib === 0) {
            return 0;
        }

        if (numeroFib === 1) {
            return 1;
        }

    }
}
let array2 = []
console.log(fib2(100, array2));// secondo esercizio





function trovaFib(numeroFib2, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === numeroFib2) {
            return i + 1;
        }
    }
}

console.log(trovaFib(144, array)); // terzo esercizio



function fibonacci(number) {
    if (number === 0) {
        return 0;
    }
    if (number === 1) {
        return 1;
    }
    return number * fibonacci(number - 1);
}

console.log(fibonacci(5));