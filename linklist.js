
// let firstElement = { value: 5, nextelement: null, previouselement: null };

// let secondElement = { value: 9, nextelement: null, previouselement: firstElement };

// firstElement.nextelement = secondElement;








// let thirdElement = { value: 8, nextelement: null, previouselement: secondElement };

// secondElement.nextelement = thirdElement;


// let fourElement = { value: 16, nextelement: null, previouselement: thirdElement };

// thirdElement.nextelement = fourElement;

let myFirstNode = {};

function addElementToLinkedList(firstNode, value) {
    if (firstNode.value === undefined) {
        firstNode.value === value;
        firstNode.nextElement = null;
        firstNode.previousElement = null
    } else {

        let lastNode = firstNode;

        while (lastNode.nextElement !== null) {
            lastNode = lastNode.nextElement
        }

        let node = { value: value, previousElement: lastNode, nextElement: null };

        lastNode.nextElement=node
    }
}
addElementToLinkedList(myFirstNode, 6)
console.log(myFirstNode);

addElementToLinkedList(myFirstNode, 12)
console.log(myFirstNode);
addElementToLinkedList(myFirstNode, 30)
console.log(myFirstNode);
// let node = firstElement;

// while (true) {
//     console.log(node.value);

//     if (node.nextelement !== null) {
//         node = node.nextelement;
//     } else {
//         break;
//     }

// }

// let node2 = fourElement


// while (node2 !== null) {
//     console.log(node2.value);
//     node2 = node2.previouselement;
// }

// function linkedListToArray(linkedList) {

// }

// console.log(linkedListToArray(firstElement)); //=> [5, 9, 8, 2]



// let array = [7, 8, 12, 5]

// function arrayToLinkedList(linkedList) {

// }

// console.log(arrayToLinkedList(firstElement));