// №1===============================================================================
// function getUpperCases() {
//   let str = "";
//   for (let i = 65; i <= 90; i++) {
//     str += String.fromCharCode(i);
//   }
//   return str;
// }
// let upperCases = getUpperCases();

// console.log(upperCases.replaceAll("", " "));

// №2===============================================================================
// function table(n) {
//     if (n >= "0" && n <= "9") {
//         return "digit";
//     } else if (
//         (n >= "a" && n <= "z") ||
//         (n >= "A" && n <= "Z")
//     ) {
//         return "lotin";
//     } else {
//         return "nol";
//     }
// }
// let res = table("/");
// console.log(res);

// yoki

// function getUpperCases() {
//     let str = "";
//     for (let i = 65; i <= 90; i++) {
//         str += String.fromCharCode(i);
//     }
//     return str;
// }

// function getLowerCases() {
//     let str = "";
//     for (let i = 97; i <= 122; i++) {
//         str += String.fromCharCode(i);
//     }
//     return str;
// }

// function table(n) {
//     if (n >="0" && n<= "9") {
//         return "digit";
//     } else if (
//         (n = getUpperCases()) ||
//         (n = getLowerCases())
//     ) {
//         return "lotin";
//     } else {
//         return "nol";
//     }
// }
// let res = table("g");
// console.log(res);

// №3===============================================================================

// let str="234fgghjkk";
// let res1= str.charCodeAt(0) + ": satr boshi ";
// let res2 = str.charCodeAt(str.length - 1) + " :satr oxiri";
// let res = res1 + res2;
// console.log(res);

// // let res = `${str} ${str.charCodeAt(0) + "satr boshi"} ${str.charCodeAt(str.length - 1) + "satr oxiri"}`;
// // console.log(res);

// №4===============================================================================

// function Satr(N, a) {
//   let res = "";

//   for (let i = 0; i < N; i++) {
//     res += a;
//   }

//   console.log("natija:", res);
// }
// let N= parseInt(7);

// let a = "R";
// Satr(N, a);

// №5===============================================================================
// let str = "JS Developer";
// let res = "";

// for (let i = str.length - 1; i >= 0; i--) {
//     res += str[i];
// }

// console.log(res);

// console.log([...str].reverse().join(""));

// №6===============================================================================
// let str = "123456";
// let res=0;
// function getStringStars(n){
//   for(i=0; i<=n; i++){
//     return res+=i;
//   }
// };

// getStringStars(3);
// console.log([...str].join("*"));

// №7===============================================================================
// let str = "abc123xyz456";
// function number(satr) {
//     let count = 0;

//     for (let el of satr) {
//         if (!isNaN(el)) {
//             count++;
//         }
//     }

//     return count;
// }

// let res = number(str);
// console.log("Satrdagi raqamlar soni:", res);

// №8===============================================================================

// function count(satr) {
//     let sum = 0;

//     for (let el of satr) {
//         if ((el >= "a" && el <= "z") || (el >= "а" && el <= "я")) {
//             sum++;
//         }
//     }
//     return sum;
// }

// let str = "AbrrrCдEf";
// let res = count(str);
// console.log(
//     "Satrdagi kichik lotin va kirill harflarining umumiy soni:",
//     res
// );

// №9===============================================================================
// let str = "ASDFGHJZXCzxcВАПРОПРПА";
// let res= str.toLowerCase();
// console.log(res);

// №11===============================================================================
// function func(satr) {
//     function isReal(n) {
//         return !isNaN(n) && n % 1 !== 0;
//     }
//     const num = satr.match(/[-+]?\d+(\.\d+)?/g);

//     if (num) {
//         let integer = true;
//         let realNum = false;

//         for (let n of num) {
//             if (!Number.isInteger(parseFloat(n))) {
//                 integer = false;
//                 if (isReal(parseFloat(n))) {
//                     realNum = true;
//                 }
//             }
//         }

//         if (integer) {
//             console.log(1);
//         } else if (realNum) {
//             console.log(2);
//         } else {
//             console.log(0);
//         }
//     } else {
//         console.log(0);
//     }
// }

// func(str);

// 14
// function func(N1, N2, S1, S2) {

//     let satr = S1.substring(0, N1) + S2.substring(S2.length - N2);
//     return satr;
// }

// let N1 = 3;
// let N2 = 2;
// let S1 = "abcdefgh";
// let S2 = "12345";

// let res = func(N1, N2, S1, S2);
// console.log(res);

// 15
// function func(C, S) {

//     let res = "";
//     for (let el of S) {
//         if (el === C) {
//             res += C + C;
//         } else {
//             res += el;
//         }
//     }

//     return res;
// }

// let C = "a";
// let S = "abcdeabc";
// let result = func(C, S);

// if (result !== null) {
//     console.log("Natija:", result);
// }

// 16#
// function func(C, S1, S2) {

//     let res1 = "";
//     for (let el of S1) {
//         if (el === C) {
//             res1 += S2 + C;
//         } else {
//             res1 += el;
//         }
//     }

//     return res1;
// }

// let C = "a";
// let S1 = "bcde";
// let S2 = "123";
// let res = func(C, S1, S2);
// console.log(res);

// #17
// function repeat(S1, S2) {

//     let repeat = 0;
//     let index = 0;

//     while ((index = S1.indexOf(S2, index)) !== -1) {
//         repeat++;
//         index += S2.length;
//     }

//     return repeat;
// }

// let S1 = "abababab";
// let S2 = "ab";
// let res = repeat(S1, S2);
// console.log("Takrorlanishlar soni:",res);

// #18
// function funcDelete(S1, S2) {

//     let indeks = S1.indexOf(S2);

//     if (indeks !== -1) {
//         let res1 = S1.substring(0, indeks) + S1.substring(indeks + S2.length);
//         return res1;
//     } else {
//         return S1;
//     }
// }

// let S1 = "abcdefg";
// let S2 = "cd";
// let res = funcDelete(S1, S2);
// console.log(res);

// #19
// function funcDelete(S1, S2) {

//     let res1 = S1;
//     let indeks = res1.indexOf(S2);

//     while (indeks !== -1) {
//         res1 =
//             res1.substring(0, indeks) + res1.substring(indeks + S2.length);
//         indeks = res1.indexOf(S2);
//     }

//     return res1;
// }

// let S1 = "abracadabra";
// let S2 = "ra";
// let res = funcDelete(S1, S2);

// console.log(res);

// #20
// function change(S1, S2, S3) {

//     let x = S1.indexOf(S2);

//     if (x !== -1) {
//         let res1 = S1.substring(0, x) + S3 + S1.substring(x + S2.length);
//         return res1;
//     } else {
//         // console.log(`${S2} satrini ${S1} satrida topilmadi.`);
//         return S1;
//     }
// }

// let S1 = "Hello JavaScript";
// let S2 = "JavaScript";
// let S3 = "Python";
// let res = change(S1, S2, S3);
// console.log(res);

// #25===============================================================
// function sort(satr) {

//     let words = satr.split(" ");
//     let res1 = words.join(".");

//     console.log("Natija:", res1);
//     return res1;
// }

// let str = "Salom dunyo bugun yaxshi kun";
// sort(str);

// #26===============================================================
// function change(satr) {

//     let words = satr.split(" ");
//     let res1 = "";

//     for (let el of words) {
//         if (el.length > 0) {
//             let L = el[0].toUpperCase();
//             res1 += L + el.substring(1) + " ";
//         }
//     }

//     console.log("Natija:", res1.trim());
//     return res1.trim();
// }

// let res = "i'm learning programming language java script";
// change(res);

// #27===============================================================
// let str = "Hello, Maks! How are you?";
// function point(satr) {
//     const element = [".", ",", ";", ":", "?", "!", "-", "'", '"', "(", ")"];
//     let count = 0;

//     for (let el of satr) {
//         if (element.includes(el)) {
//             count++;
//         }
//     }

//     console.log("Tinish belgilari soni:", count);
//     return count;
// }

// point(str);
