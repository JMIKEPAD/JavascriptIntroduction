// // console.log(typeof "Ciao a tutti!");

// // prompt("ciao a tutti!");

// // console.log(`half of 100 is ${100/2}`);

// // console.log(5 === 4)

// // console.log(5 !== 4)

// // console.log(NaN === NaN )

// console.log(true && true)

// console.log(true && false)

// console.log(false && false)

// console.log(true || true)

// console.log(true || false)

// console.log(true ? 1 : 2);

// console.log(false ? 1 : 2);

// console.log((5 > 7) ? 1 : 2);

// console.log((5 < 7) ? 1 : 2);

// console.log(null);

// console.log(undefined);

// let numero = 5;

// console.log(" prima assegnazione della variabile numero", numero);

// numero = 7;

// console.log(" seconda assegnazione della variabile numero", numero);

// const costante = 12;

// console.log(" log costante", costante);

// // costante = 15;

// // console.log(costante);

// // var numero2 = 27;

// // console.log("primo log var", numero2);

// // numero2=134;

// // console.log("secondo log var", numero2);

// let pippo = "Ciao a tutti!";

// console.log("primo log di pippo", pippo);

// pippo = "Ciao ad alcuni";

// console.log("secondo log di pippo", pippo);

// let pilppo, pluto, paperino;

// let operazione = 5 + 6;

// console.log("log operazione", operazione);
// if ((operazione < 10) || (operazione === 11)) {
//     console.log("sono passato dall'if")
// } else {
//     console.log("non sono passato dall'if")
// }


// let numero3 = 0;


// if (numero3 > 0) {
//     console.log("il numero è positivo");
// } else if (numero3 === 0) {
//     console.log("il numero è neutro");
// } else {
//     console.log("il numero è negativo");
// }


// let numero4 = 50;

// if (numero4 > 20) {
//     console.log("maggiore di 20");
// } else if (numero4 > 10) {
//     console.log("maggiore di 10");

// } else if (numero4 > 0) {
//     console.log("maggiore uguale a 0");
// } else {
//     console.log("minore di 0");
// }

// let numero5 = 12;

// if (numero5 % 2 === 0) {
//     console.log("il numero e' divisibile per 2");
// } 
// if (numero5 % 3 === 0) {
//     console.log("il numero e' divisibile per 3"); 
// } 
 
// console.log("while");
// let i = 0;

// while (i <10) {
//     console.log( i )
//     i= i+1
    
// }

// console.log("dowhile");

// let j = 0;

// do {
//     console.log( j );
//     j=j+1
// } while ( j < 10);

// console.log("for");

// for (let k = 0; k < 10; k++) {
    
//     console.log(k);

// }


// let y=10;

// while ( true ) {
    
//     if (y % 7 === 0) {
//         console.log( y )
//         break
//     }

//     y++
  
// }


// for (let i = 0; i <=100, i++ ) {
//     if (i === 0) {
//         console.log(i);
//         break
//     }
//     if (i % 7 === 0) {
//         console.log(i);
//         break
//     }
// }

//     for (let g = "#"; g < "########"; g+="#") {
// console.log(g)
//         if (g === "#######") {
// break            
//         }
        
//     }


    // if (numero5 % 2 === 0) {
    //     console.log("il numero e' divisibile per 2");
    // } 
    // if (numero5 % 3 === 0) {
    //     console.log("il numero e' divisibile per 3"); 
    // } 
     

    // let fizzbuzz = 1

    // while (fizzbuzz<101) {
    //     if (fizzbuzz % 15 === 0) {
    //         console.log("FizzBuzz");
    //     } else if (fizzbuzz % 5 === 0) {
    //         console.log("Buzz");

    //     } else if (fizzbuzz % 3 === 0) {
    //         console.log("Fizz");
            
    //     }else {console.log(fizzbuzz);}
    //     fizzbuzz++;   
    // }


    let size = (prompt())
    let grid =''
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if ((i + j) % 2 === 0) {
                grid += " "
            } else {
                grid += "#"
            }
            
          
        }
        grid+='\n'
     
    }
    console.log(grid)


    let grid2 =''
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let result = ((i+j) % 2 === 0) ? ' ':'#';
            grid2 += result;
          
        }
        grid2+='\n'
     
    }
    console.log(grid2)