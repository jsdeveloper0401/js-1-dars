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

// klasswork 5-dars

// 6-rars=======================================================================================
// #1
// function power(a, n) {
//     let k = Math.pow(a, n);
//     return k;
// }
// let degre = power(5, 4);
// console.log(degre);

// #2
// function mean(a, b) {
//     let ar = (a + b) / 2;
//     let gr = (a * b) ** (1 / 2);
//     console.log("o'rta arifmetik", ar);
//     console.log("o'rta geometrik", gr);
// }
// mean(8, 9);
// #3

// function sign(n) {
//     if (n < 0) {
//         console.log(0);
//     } else if (n > 0) {
//         console.log(1);
//     } else if ((n = 0)) {
//         console.log(0);
//     }
//     return n;
// }
// let d = sign(10);
// console.log(d);

// #5
// function areaCircle(r) {
//     let p = Math.PI;
//     let s = p * Math.pow(r, 2);
//     return s;
// }
// let result = areaCircle(9);
// console.log(result);

// #6
// function sumRange(a,b) {
//   if(a>b){
//     return 0;
//   }
//   let s = 0;
//   for (let i = a; i <= b; i++) {
//     s += i;
//   }
//   return s;
// }

// let s = sumRange(10, 15);
// console.log(s);

// #7---------------------------------===========================================00000000000000000000000000000
// function calc(a, b, c=0) {
//   if (c === 0) {
//     let res2 = a + b;
//     return res2;
//   } else if (c!==0){
//       let res1 = a * b;
//       return res1;
//     }
// }
// let s1 = calc(4, 5, "*");
// let s2 = calc(5, 7, "+");
// console.log(s1);
// console.log(s2);

// #8==========================================================////////////////////////////////////////
// function isEven(n) {
//   let s = n % 2;
//   let res = Number.isInteger(s);
//     return res;
// }

// let res1 = isEven(11);
// console.log(res1);

// #9===========================================================================================================
// function sortABC(a,b,c){
//   if(a>b && b>c){
//     console.log(a,b,c);
//   } else if(a<b && b<c){
//     console.log(c,b,a);
//   } else if(b<a && c>a){
//     console.log(c,a,b)
//   }
// }
// let res = sortABC(1,2,3)
// console.log(res)

// #10++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function isPowerN(k, n) {
//     let s = Math.pow(n, k);
//     let res = Number.isInteger(s ** (1 / 2));
//     return res;
// }
// let res1 = isPowerN(49);
// let res2 = isPowerN(25);

// console.log(res1);
// console.log(res2);

// #11=========================================================================================================

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

// #12==========================---------------------------======================================--------------------------
// function isPrime(n) {
//     if (n < 2) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) return false;
//     }
//     return true;
// }

// function numberOfPrime(a, n) {
//     let count = 0;
//     for (let i = a; i <= n; i++) {
//         if (isPrime(i)) {
//             count++;
//         }
//     }
//     return count;
// }
// let res= numberOfPrime(1,30)
// console.log(res);

// #13
// function digitNth(k,n){

// }

// #14..................................................................................................
// function inverseNumber(n){
//   let res=n()
//   const inverseNumber=parseFloat(n);
//   return inverseNumber;
// }
// function inverseNumber(n) {
//     const reversedStr = String(n).split("").reverse().join("");

//     const reversedNumber = parseInt(reversedStr, 10);

//     return reversedNumber;
// }
// const n = 12345;
// const reversedResult = inverseNumber(n);
// console.log(
//     `Original number: ${n}, Reversed number: ${reversedResult}`
// );

// #16==============================================================================================
// function factorial(n) {
//     let result = 1;
//     for (let i = 2; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }

// let res = factorial(5)
// console.log(res);

// // #14++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function inverseNumber(n) {
//     let res = 0;

//     while (n !== 0) {
//         let mod = n % 10;
//         res = res * 10 + mod;
//         n = Math.floor(n / 10);
//     }

//     return res;
// }

// const func = inverseNumber(56814);
// console.log(func);

// 15+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function isPalindrom(n) {
//     let a = n;
//     let res = 0;

//     while (n !== 0) {
//         let mod = n % 10;
//         res = res * 10 + mod;
//         n = Math.floor(n / 10);
//     }
//     if (a == res) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isPalindrom(121));

// 21++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const isLeapYear = (y) => (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
// console.log(isLeapYear(2000));

// function isLeapYear(y) {
//     return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
// }
// 22====================================================================1
