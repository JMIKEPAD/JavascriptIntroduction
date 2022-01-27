let firstElement = { value: 5, nextelement: null, previouselement: null };

let secondElement = { value: 9, nextelement: null, previouselement: firstElement };

firstElement.nextelement = secondElement;

let thirdElement = { value: 8, nextelement: null, previouselement: secondElement };

secondElement.nextelement = thirdElement;

let fourElement = { value: 16, nextelement: null, previouselement: thirdElement };

thirdElement.nextelement = fourElement;

// let myFirstNode = {};

// function addElementToLinkedList(firstNode, value) {
//     if (firstNode.value === undefined) {
//         firstNode.value === value;
//         firstNode.nextElement = null;
//         firstNode.previousElement = null
//     } else {

//         let lastNode = firstNode;

//         while (lastNode.nextElement !== null) {
//             lastNode = lastNode.nextElement
//         }

//         let node = { value: value, previousElement: lastNode, nextElement: null };

//         lastNode.nextElement=node
//     }
// }
// addElementToLinkedList(myFirstNode, 6)
// console.log(myFirstNode);

// addElementToLinkedList(myFirstNode, 12)
// console.log(myFirstNode);
// addElementToLinkedList(myFirstNode, 30)
// console.log(myFirstNode);


let node = firstElement;

while (true) {
    console.log(node.value);

    if (node.nextelement !== null) {
        node = node.nextelement;
    } else {
        break;
    }

}

let node2 = fourElement


while (node2 !== null) {
    console.log(node2.value);
    node2 = node2.previouselement;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let el1 = { value: "pippo", rest: null };
let el2 = { value: "pluto", rest: el1 };
let el3 = { value: "paperino", rest: el2 };

console.log(el3);


let ela = { value: "paperone", rest: el3 };

let elb = { value: "paperoga", rest: el3 };

let elc = { value: "topolino", rest: elb }

console.log(ela);

console.log(elb);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let myArray = [7, 8, 12, 5];

function arrayToLinkedList(array) {

    let firstNode = null;

    for (let i = array.length - 1; i >= 0; i--) {
        // let rest;
        // if (firstNode === null) {
        //     rest = null
        // } else {
        //     rest = firstNode
        // }
        // let node = { value: array[i], rest: firstNode };
        // firstNode = node
        firstNode = prepand(array[i], firstNode)
    }
    return firstNode;
}

console.log(arrayToLinkedList(myArray));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function prepand(value, listNode) {
    let node = { value: value, rest: listNode };
    return node
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function linkedListToArray(listNode) {
    let node2 = listNode

    let array = [];

    while (node2 !== null) {
        array.push(node2.value);
        node2 = node2.rest;
    }
    return array;

}

console.log(linkedListToArray(elc));

function nth(listNode, index) {
    let node = listNode
    let actualindex = 0
    while (node !== null) {
        if (actualindex === index) {
            return node.value
        }
        node = node.rest;
        actualindex++
    }
    return undefined
}
console.log(nth(elc, 2));

function nth2(listNode,index,startIndex) {
    if (listNode===null) {
        return undefined
    }

if (startIndex ===index ) {
    return listNode.value
}    

let node1 = listNode.rest

startIndex++

return nth2(node1,index,startIndex)
}

console.log(nth2(elc,3,0));












