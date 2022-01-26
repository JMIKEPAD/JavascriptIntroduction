// let point = { x: 2, y: 3 };

// let student = { surname: "Aloia", name: "Simone", yob: 1997, married: false };

// let student2 = { surname: "Capogreco", name: "Alessandro", yob: 2002, married: false };

// let classe = { name: "programmatore Frontend", students: [student, student2] };

// let andrea = { name: "andrea", surname: "asioli", "classe di cui è docente": classe };

// console.log(andrea["classe di cui è docente"]);

// let nomeStudente1 = student.name

// console.log(nomeStudente1);

// student.name = "pippo";

// console.log(student);


// console.log(student.titoloDiStudio);

// student.titoloDiStudio = "Diploma di Maturità";

// console.log(student.titoloDiStudio);


// for (const key in student) {
//     if (Object.hasOwnProperty.call(student, key)) {
//         const element = student[key];
//         console.log(key + ": " + element);
//     }

// }

// console.log(JSON.stringify(andrea));

// let oggettoInStringa = '{"name":"andrea","surname":"asioli","classe di cui è docente":{"name":"programmatore Frontend","students":[{"surname":"Aloia","name":"pippo","yob":1997,"married":false,"titoloDiStudio":"Diploma di Maturità"},{"surname":"Capogreco","name":"Alessandro","yob":2002,"married":false}]}}'

// let AndreaCopy = JSON.parse(oggettoInStringa)

// console.log(AndreaCopy);

// function CalcolaTriangoloRettangolo(catetoMaggiore, catetoMinore, ipotenusa) {
//     let per = catetoMaggiore + catetoMinore + ipotenusa;
//     let ar = (catetoMaggiore * catetoMinore) / 2
// return (perimetro: (per), area: (ar))

// } => 

// let dimensioniTriangolo = CalcolaTriangoloRettangolo(4, 3, 5);

// console.log("il triangolo ha il perimetro di " + dimensioniTriangolo);








// let firstNumber=5

// function addOne(number){
//     number = number + 1
//     return number;
// }

// let secondNumber = addOne(firstNumber)

// console.log(secondNumber);


// let myAccount = {name: "Andre", surname: "Asioli", balance: 100}


// function addMoneys(moneyToAdd, account) {
//     // let tempAccount={};
//     // tempAccount = Object.assign(tempAccount, account) 
//     // tempAccount.balance = tempAccount.balance + moneyToAdd;
//     // return tempAccount
//     let tempAccount={...account}
//     tempAccount.balance = tempAccount.balance + moneyToAdd;
//     return tempAccount
// }

// let updateAccount= addMoneys(50,myAccount)
// console.log(myAccount);
// console.log(updateAccount);

let userAndrea = {name: "Andrea Asioli", age: 43}

let myAccount = {user: userAndrea, balance: 100}



function changeage(newage, account) {
    // let tempAccount={};
    // tempAccount = Object.assign(tempAccount, account) 
    // tempAccount.balance = tempAccount.balance + moneyToAdd;
    // return tempAccount
    let tempAccount = JSON.parse (JSON.stringify(account));

    tempAccount.user.age = newage;
    return tempAccount
}

let updateAccount= changeage(50,myAccount)
console.log(myAccount);
console.log(updateAccount);

function changeage(newage, account) {
    account.user.age = newage
}

changeage(50,myAccount)

console.log(myAccount.user.age);

let pippo =  {name: "pippo", city: "topolinia"};

let pippo1 = pippo;

let pippo2 = {name: "pippo", city: "topolinia"};



console.log(pippo === pippo2);

const age = 5; 

const name1 = "osvaldo";

let baby = {age, name: name1};



console.log(baby);













