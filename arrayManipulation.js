// let myArray=[100,101,9,1000,12,-3]

// function filterToRemoveGreaterThan100(arrayToFilter) {
//     let tempArray=[];
//     for (const element of arrayToFilter) {
//         if (element <= 100) {
//             tempArray.push(element);
//         }
//     }
//     return tempArray;
// }

// console.log( filterToRemoveGreaterThan100(myArray));


// function greaterThan30(element) {
//     // if (element > 30) {
//     //     return true;
//     // } else{
//     //     return false;
//     // }



//     return (element > 30);
// }

// function isEven(element){
//     if ( element %2 === 0 ){
//     return true;
//     } else{
//         return false;
//     }
//     return (element % 2 === 0);
// }

// function isPositive(element) {
//     return (element > 0);
// }





// function filter(arrayToFilter, filterFunction) {
//     let tempArray=[];
//     for (const element of arrayToFilter) {
//         if (filterFunction(element)) {
//             tempArray.push(element);
//         }
//     }
//     return tempArray;
// }





// console.log("mio filter ",filter(myArray, isEven ));

// console.log("is positive filter",myArray.filter(isPositive));


// function isNegative(element, index) {
//     return (element < 0);
// }

// let isNegative2 = function (element, index) {
//     return (element < 0);
// }

// let isNegative3 = (element, index) => element < 0;

// // let isNegative3 = (element) => {
// //     return (element < 0);
// // }




// console.log(myArray.filter(isNegative));
// console.log(myArray.filter(function(element){
//     return (element<0);
// }));





// function hasEvenPosition(element, index) {
//     if (index % 2 ===0) {
//         return true;

//     } else {
//         return false;
//     }
// }

// console.log( myArray.filter( hasEvenPosition ) );

// console.log(myArray.filter(function(element,index){
//     return index % 2 === 0;
// }));

// console.log( myArray.filter((e,i) => i % 2 === 0 ) );

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function addOneToArray(arrayToModify) {
//     let tempArray = [];

//     for (const element of arrayToModify) {
//         let modifiedElement= element + 1;
//         tempArray.push(modifiedElement);
//     }
//     return tempArray;
// }

// console.log(addOneToArray(myArray));


// function map(arrayToModify,alterationFunction) {
//     let tempArray = [];
//     for (const element of arrayToModify) {
//         let modifiedElement= alterationFunction(element);
//         tempArray.push(modifiedElement);
//     }
//     return tempArray;
// }

// console.log(map(myArray, addOneToArray));

// console.log(myArray.map(addOneToArray));

// console.log(myArray.map(function (element) {
//     return element + 1;
// }));

// console.log(myArray.map((element)=> element + 1));



// function elementIndexProduct(element,index) {
//     return element * index;
// }

// console.log(myArray.map(elementIndexProduct));

// console.log(myArray.map(function (element,index) {
//     return element * index;
// }));

// console.log(myArray.map((e,i)=> e * i));


// console.log(myArray.map(elementIndexProduct).filter(isNegative));


let testArray1 = [12, 57, 1001, -67, -12, 5, 27, 48, -6000];

let testArray2 = ["pippo", "pluto", "paperino", "topolino", "paperone", "paperoga"];


/// teniamo i numeri divisibili per 3 ;
function filteredArray1(element) {
    let tempArray = [];
    for (const element of testArray1) {
        if (element % 3 === 0) {
            tempArray.push(element);
        }
    }
    return tempArray;

}
let result = console.log(filteredArray1(testArray1));

/// soluzione 2 

console.log(testArray1.filter((e) => e % 3 === 0));


// /// teniamo le stringhe che sono più lunghe di 6 caratteri ;
function filteredArray2(element) {
    let tempArray = [];
    for (const element of testArray2) {
        if (element.length > 6) {
            tempArray.push(element);
        }
    }
    return tempArray
}
console.log(filteredArray2(testArray2));

/// soluzione 2 

console.log(testArray2.filter((e) => e.length > 6));

// /// tutti i numeri dovranno essere ridotti del 10%;
function mappedArray1(element) {
    let tempArray = [];
    for (let element of testArray1) {
        element = element - (element * 10) / 100
        tempArray.push(element)
    }
    return tempArray;
}
console.log(mappedArray1(testArray1));

/// soluzione 2

console.log(testArray1.map((e) => e -= e * 10 / 100));

// /// tutte le stringhe dovranno essere maiuscole;
function mappedArray2(element) {
    let tempArray = [];
    for (let element of testArray2) {
        element = element.toUpperCase();
        tempArray.push(element);
    }
    return tempArray;
}
console.log(mappedArray2(testArray2));

/// soluzione 2

console.log(testArray2.map((e) => e.toUpperCase()));

// /// tutti i numeri andranno traformati in positivi e andranno eliminati i numeri maggiori di 100;
function modifiedArray1(element) {
    let tempArray = [];
    for (let element of testArray1) {
        if (element < 0) {
            element *= (-1);
        }
        if (element >= 0 && element < 100) {
            tempArray.push(element);
        }


    }
    return tempArray;
}
console.log(modifiedArray1(testArray1));

/// soluzione 2 

console.log(testArray1.map((e) => Math.abs(e)).filter((e => e <= 100)));

// /// tutte le stringhe dovranno avere la prima lettera maiuscola e andranno eliminate le stringhe che non contengono la lettera r;

function modifiedArray2(element) {
    let tempArray = [];
    for (const element of testArray2) {
        if (element.includes = "r" || "R") {
            tempArray.push(element[0].toUpperCase())
        }
    }
    return tempArray;
}
console.log(modifiedArray2(testArray2));

///// soluzione 2 

console.log(testArray2.map((e) => e[0].toUpperCase() + e.slice(1)).filter((e) => e.toLowerCase().includes(e.slice(1))));

function sumAllArray(arrayToSum) {
    let result = 0;
    for (const element of arrayToSum) {
        result = result + element;
    }
    return result
}

console.log(sumAllArray(testArray1));

function sum(first, second) {
    return first + second;
}

function product(previous, current, index) {
    return previous * current;
}

function sumEvenIndex(previous, current, index) {
    if (index % 2 === 0) {
        return previous +  current;
    } else {
        return previous
    }
}

function reduce(arrayToAggregate, aggregationFunction, startingElement) {

    let result;

    let startingIndex;

    if (startingElement !== undefined) {
        startingIndex = 0
        result = startingElement;
    } else {
        result = arrayToAggregate[0]
        startingIndex = 1
    }
    for (let i = 0; i < arrayToAggregate.length; i++) {

        const element = arrayToAggregate[i];

        result = aggregationFunction(result, element, i);
    }

    return result
}

console.log(reduce(testArray1, sum));

console.log(reduce(testArray1, product));

console.log(reduce(testArray1, sum, 100));

console.log(reduce(testArray1, sumEvenIndex));

console.log(testArray1.reduce((previous, current, index, array) => previous + current,0));



let testArray3 =["la","vergogna", "casa","dannazione", "ha", "pippo","preso", "secchio", "fuoco"];

//console.log(testArray3.reduce((array,indice) => ));

function sumEvenIndexStr(previous, current, index) {
    if (index % 2 === 0) {
        return previous + " " + current;
    } else {
        return previous
    }
}

function reduce(arrayToAggregate, aggregationFunction, startingElement) {

    let result;

    let startingIndex;

    if (startingElement !== undefined) {
        
        result = startingElement;
    } else {
        result = arrayToAggregate[0]
        startingIndex = 1
    }
    for (let i = startingIndex; i < arrayToAggregate.length; i++) {
    const element = arrayToAggregate[i];

        result = aggregationFunction(result, element, i);

        
    }

    return result
}

console.log(testArray3.reduce(sumEvenIndexStr));

/////// soluzione 2

console.log(testArray3.reduce((previous, current, index, array) => index % 2 === 0 ? previous + " " + current : previous));





























































