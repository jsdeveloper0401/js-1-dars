// arr1
// function getInitialOdds(n) {
//     let res = [];
//     for (let i = 0; i < n; i++) {
//         res.push(2 * i + 1);
//     }
//     return res;
// }
// let arr = getInitialOdds(5);
// console.log(arr);

// arr2
// function getEvenReverse(arr){
//   let evenArr = [];
//   for(let el of arr){
//     if(el%2===0){
//       evenArr.push(el);
//     }
//   }
//   return evenArr.reverse();
// }

// let res = getEvenReverse([4, 5, 7, 8, 6, 9]);
// console.log(res);

// arr3
// let arr = [4, 5, 7, 8, 6, 9];
// let len = arr.length;
// for(let i in arr){
//   console.log(arr[i], arr[len-i-1]);
// }

// arr4
// function  rangeSum(arr, K, L){
//   let res = arr.slice(K,L+1);
//   let sum = 0;

//   for(let el of res){
//     sum+=el;
//   }
//   return sum;
// }
// let arr = [1, 6, 9, 5, 8, 10, 15];
// let s = rangeSum(arr, 2, 5);
// console.log(s);

// arr1==================================================================
// function getLevel2(n) {
//     let res = [];
//     for (let i = 1; i <= n; i++) {
//         res.push(Math.pow(2, i + 1));
//     }
//     return res;
// }
// let n = 5;
// const func = getLevel2(n);
// console.log(func);

// arr2=======================================================================
// function arr(n, A, B) {
//     let res = [A, B];

//     for (let i = 2; i < n; i++) {
//         res.push(res[i - 1] + res[i - 2]);
//     }

//     return res;
// }
// let n = 5;
// let A = 2;
// let B = 3;

// let s = arr(n, A, B);
// console.log(s);

// / arr3=======================================================================
// let arr=[1,2,3,4,5];
// arr = arr.slice().reverse();
// console.log(arr);

// / arr4=======================================================================
// function odd(arr) {
//     let n = [];
//     let count = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 1) {
//             n.push(arr[i]);
//             count++;
//         }
//     }

//     console.log("elementlar: " + arr.join(" "));
//     console.log("Natija: " + n.join(" ") + " toqlar soni = " + count);
// }

// let s = [4, 5, 7, 8, 6, 9];
// odd(s);

// / arr5=======================================================================
// function toqJuft(arr) {
//     let even = [];
//     let odd = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             even.push(arr[i]);
//         } else {
//             odd.push(arr[i]);
//         }
//     }

//     let res = even.concat(odd.reverse());

//     console.log(" elementlar: " + arr.join(" "));
//     console.log("Natija: " + res.join(" "));
// }

// let s = [4, 5, 7, 8, 6, 9];
// toqJuft(s);

// / arr7=======================================================================
// function toq(arr) {
//     let res = [];
//     for (let i = arr.length - 1; i >= 1; i -= 2) {
//         res.push(arr[i]);
//     }

//     console.log(" elementlar: " + arr.join(" "));
//     console.log("Natija: " + res.join(" "));
// }
// let s = [1, 3, 5, 7, 9];
// toq(s);

// arr8===============================================================
// function index(arr) {
//     let res = [];

//     for (let i = 0; i < arr.length; i += 2) {
//         res.push(arr[i]);
//     }

//     for (let i = 1; i < arr.length; i += 2) {
//         res.push(arr[i]);
//     }

//     console.log("Massiv elementlari: " + arr.join(" "));
//     console.log("Natija: " + res.join(" "));
// }
// let func = [1, 3, 5, 7, 9, 11];
// index(func);

// arr11===============================================================
// function rangeOutSum(arr, K, L) {
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (i < K || i > L) {
//             sum += arr[i];
//         }
//     }

//     return sum;
// }
// let func = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let K = 2;
// let L = 7;

// let s = rangeOutSum(func, K, L);
// console.log(s);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function getOddMin(arr) {
//     let toq = Infinity;

//     for (let i = 1; i < arr.length; i += 2) {
//         if (arr[i] < toq) {
//             toq = arr[i];
//         }
//     }

//     return toq;
// }

// let res = [5, 3, 8, 1, 7, 2, 6, 4];
// let s = getOddMin(res);
// console.log(s);

