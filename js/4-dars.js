// #1
// let a = 3;
// let b = 8;
// let n = 0;
// for (let i = a; i <= b; i++) {
//     console.log(i);
//     n++;
// }
// console.log(n, "ta");

// #2
// let a = 3;
// let b = 8;
// let n = 0;
// for (let i = b-1; i > a; i--) {
//     console.log(i);
//     n++;
// }
// console.log(n, "ta");

// #3
// let narx = +prompt("narxni kiriting: ");
// let kg = +prompt("kg ni kiriting: ");

// for (let i = 1; i <= kg; i++) {
//     console.log(i, "kg", narx * i, "so'm");
// }

// #4
// let narx = +prompt("narxni kiriting: ");
// let kg = +prompt("kg ni kiriting: ");

// for (let i = 10; i <= kg*10; i+=2) {
//     console.log(i/10, "kg", (narx * i)/10, "so'm");
// }

// #5
// let a = +prompt("a ni kiriting:");
// let b = +prompt("b ni kiriting:");
// let sum = 0;

// for (let i = a; i <= b; i++) {
//     sum += i;
//     console.log(i);
// }
// console.log("yig'indi =", sum);

// #6
// let a = +prompt("a ni kiriting:");
// let b = +prompt("b ni kiriting:");
// let sum = 1;

// for (let i = a; i <= b; i++) {
//     sum *= i;
//     console.log(i);
// }
// console.log("yig'indi =", sum);

// #7
// let a = +prompt("a ni kiriting:");
// let b = +prompt("b ni kiriting:");
// let sum = 0;

// for (let i = a; i <= b; i++) {
//     sum += Math.pow(i, 2);
//     console.log(i,"kvadrati:",Math.pow(i, 2));
// }
// console.log("yig'indi =", sum);

// #8
// let n = +prompt("n ni kiriting:");
// let sum = 0;

// for (let i = 1; i <= n; i++) {
//     sum +=1/ i;
//     console.log(1/i);
// }
// console.log("yig'indi =", sum);

// #9
// let n = +prompt("n ni kiriting:");
// let sum = 1;

// for (let i = 11; i <= n * 10; i++) {
//     sum *= i / 10;
//     console.log(i / 10);
// }
// console.log("ko'paytma =", sum);

// #10
// let sum = 0;
// let n = +prompt("n ni kiriting:");
// for (let i = 0; i <= n * 2 - 1; i++) {
//     if (i % 2 == 1) {
//         sum += i;
//         console.log(i);
//     }
// }
// console.log(sum);

// #11
// let sum;
// let a = +prompt("a ni kiriting:");
// let n = +prompt("n ni kiriting:");
// for (let i = 1; i <= n; i++) {
//     sum = Math.pow(a, i);
// }
// console.log(sum);

// #12
// let a = +prompt("a ni kiriting:");
// let n = +prompt("n ni kiriting:");
// for (let i = 1; i <= n; i++) {
//     console.log(Math.pow(a, i));
// }

// #13
// let sum = 0;
// let a = +prompt("a ni kiriting:");
// let n = +prompt("n ni kiriting:");
// for (let i = 1; i <= n; i++) {
//     sum += Math.pow(a, i);
//     console.log(Math.pow(a, i));
// }
// console.log("yig'indi:", sum);

// #14
// let sum = 1;
// let i;
// let j = 0;
// let n = +prompt("n ni kiriting:");
// for (i = 1; i <= n; i++) {
//     sum *= i;
//     console.log(sum);
//     j = j + sum;
// }
// console.log(j);

// #15
// let sum = 0;
// let n = +prompt("n ni kiriting:");
// let k = +prompt("k ni kiriting:");
// for (let i = 1; i <= n; i++) {
//     sum = sum + Math.pow(i, k);
//     console.log(Math.pow(i, k));
// }
// console.log(sum);

// #16
// let sum = 0;
// let n = +prompt("n ni kiriting:");
// for (let i = 1; i <= n; i++) {
//     sum = sum + Math.pow(i, i);
//     console.log(Math.pow(i, i));
// }
// console.log(sum);

// #17
// let a = +prompt("a ni kiriting:");
// let b = +prompt("b ni kiriting:");
// // let a = 3;
// // let b = 6;

// for (let i = a; i <= b; i++) {
//     for (let j = 1; j <= i; j++) {
//         console.log(i);
//     }
// }

// #18
// let sum = 0;
// let n = 0;
// let a = +prompt("sonni kiriting:");
// for (let i = 0; i <= a; i++) {
//     if (a % i == 0) {
//         console.log(i);
//         sum += i;
//         n++;
//     }
// }
// console.log("yig'indi:", sum);
// console.log(n, "ta");

// #19

// function isPrimeNumber(n) {
//     if (n < 2) {
//         return false;
//     }

//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             return false;
//         }
//     }

//     return true;
// }

// let myNumber = +prompt("sonni kiriting");

// if (isPrimeNumber(myNumber)) {
//     console.log(myNumber + " tub son!");
// } else {
//     console.log(myNumber + " tub son emas!");
// }

// #20
// let a = +prompt("sonni kiriting");
// for (let i = 1; i <= a; i++) {
//     let karochchi = "";
//     for (let j = 1; j <= i; j++) {
//         karochchi += j;
//     }
//     console.log(karochchi);
// }
