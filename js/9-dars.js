// klasswork
// const people = [
//     { name: "Abdulaziz", age: 33 },
//     { name: "Erkin", age: 22 },
//     { name: "Temur", age: 34 },
//     { name: "Sardor", age: 20 },
// ];

// function getAverageAge(arr) {
//     let sum = 0;
//     for (el of arr) {
//         sum += el.age;
//     }
//     return sum / arr.length;
// }

// let res = getAverageAge(people);
// console.log(res);

// №2
// const people = [
//     { name: "Abdulaziz", age: 33 },
//     { name: "Erkin", age: 22 },
//     { name: "Temur", age: 34 },
//     { name: "Sardor", age: 20 },
// ];

// for (let el of people){
//   if(el.age <25){
//     el.isMarried = false;
//   } else{
//     el.isMarried = true;
//   }
// }
// console.log(people);

// #3
// const people = [
//     { name: "Abdulaziz", age: 33, isMarried: true },
//     { name: "Erkin", age: 22, isMarried: false },
//     { name: "Temur", age: 34, isMarried: true },
//     { name: "Sardor", age: 20, isMarried: false },
// ];
// function getNameMaxMinAge(arr) {
//     let max = arr[0];
//     let min = arr[0];
//     for (el of arr) {
//         if (max.age < el.age) {
//             max = el;
//         }
//         if (min.age > el.age) {
//             min = el;
//         }
//     }
//     return [max.name, max.age, min.name, min.age];
// }

// let res = getNameMaxMinAge(people);
// console.log(res);

// #4
// let obj = { 1: 20, 2: 30, 3: 20, 4: 40, 5: 30, 6: 50, 7: 40, 8: 20 };
// let res = {};

// for (let [key, value] of Object.entries(obj)) {
//   if (value in res) {
//     res[value].push(key);
//   } else {
//     res[value] = [key];
//   }
// }

// console.log(res);

// homework

// #1==========================================================================
// const me = {
//     firstName: "Murod",
//     lastName: "Nazarov",
//     age: 20,
//     languages: ["js", "python", "c++", "vuejs"],
//     friends: ["Jamshid", "Abbos", "Jalol", "Mar'uf"],
// };

// for (let key in me) {
//     if (Array.isArray(me[key])) {
//         console.log(`${key}: ${me[key].join("+")}`);
//     } else {
//         console.log(`${key}: ${me[key]}`);
//     }
// }

// #2==========================================================================
// function kvadratobj(n) {
//     let res = {};

//     for (let i = 1; i <= n; i++) {
//         res[i] = Math.pow(i, 2);
//     }

//     return res;
// }

// let n = 5;
// let square = kvadratobj(n);

// console.log(square);

// #3==========================================================================

// const objsum = { 1: 1, 2: 4, 3: 9, 4: 16, 5: 25 };

// const keysSum = Object.keys(objsum).reduce(
//     (sum, key) => sum + parseInt(key),
//     0
// );
// const valuesSum = Object.values(objsum).reduce((sum, value) => sum + value, 0);

// console.log("Kalitlar yig'indisi:", keysSum);
// console.log("Qiymatlar yig'indisi:", valuesSum);

// function kvadratobj() {
//     const n = 5;
//     let result = {};

//     for (let i = 1; i <= n; i++) {
//         result[i] = i * i;
//     }

//     return result;
// }

// const objsum = kvadratobj();
// let keysSum = 0;
// let valuesSum = 0;

// for (let key in objsum) {
//     keysSum += parseInt(key);
//     valuesSum += objsum[key];
// }

// console.log("Kalitlar yig'indisi:", keysSum);
// console.log("Qiymatlar yig'indisi:", valuesSum);

// #4==========================================================================
// let arr = ["Murod", "Safarmurod", "Bekzod", "Jahongir"];
// let obj = {};

// for (let i = 0; i < arr.length; i++) {
//     let key = arr[i];
//     let value = key.length;
//     obj[key] = value;
// }

// console.log(obj);

// #5==========================================================================
// let productsPrices = {
//     Apelsin: 10000,
//     Olma: 12000,
//     Mandarin: 8000,
//     Banan: 20000,
// };

// function getProductInfo(prices) {
//     let values = Object.values(prices);
//     let count = values.length;
//     let sum = values.reduce(function (acc, price) {
//         return acc + price;
//     }, 0);

//     return { count, sum };
// }

// let res = getProductInfo(productsPrices);
// let count = res.count;
// let sum = res.sum;

// console.log("Barcha mahsulotlar soni:", count);
// console.log("Jami:", sum);

// #6==========================================================================
// function defineObject(obj) {
//     const keys = Object.keys(obj);

//     for (let el of keys) {
//         if (typeof obj[el] !== "string") {
//             return false;
//         }
//     }

//     return true;
// }

// let res1 = { abc: "as", 123: "rt", d: "gh" };
// let res2 = { abc: 1, 123: 2, d: 5, 456: true };

// console.log(defineObject(res1));
// console.log(defineObject(res2));

// #7==========================================================================
// function filter(obj) {
//     const res = {};

//     for (let key in obj) {
//         if (obj[key]) {
//             res[key] = obj[key];
//         }
//     }

//     return res;
// }

// let object = { a: false, b: 12, c: true, d: 0, f: null };
// let res2 = filter(object);

// console.log(res2);

// #8==========================================================================

// function countarr(arr) {
//     let res = {};

//     for (let i = 0; i < arr.length; i++) {
//         let num = arr[i];

//         if (res[num]) {
//             res[num] += 1;
//         } else {
//             res[num] = 1;
//         }
//     }

//     return res;
// }

// let arr = [7, 8, 4, 5, 7, 5, 4, 8, 5, 4, 7, 9];
// let obj = countarr(arr);

// console.log(obj);

// #9==========================================================================
// function numOfStr(number) {
//     let numstr = number.toString();
//     let res = {};
//     let arr = ["birlar", "minglar", "millionlar", "milliardlar", "trilionlar"];

//     for (let i = 0; i < arr.length; i++) {
//         let name = arr[i];
//         let startIndex = Math.max(0, numstr.length - (i + 3) * 3);
//         let endIndex = numstr.length - i * 3;
//         res[name] = +numstr.slice(startIndex, endIndex) || 0;
//     }

//     return res;
// }

// let res1 = 8945472985629;
// let res2 = numOfStr(res1);

// console.log(res2);

// #10==========================================================================
// const books = [
//     {
//         title: "Boy ota, kambag'al ota",
//         author: "Robert Kiosaki",
//         alreadyRead: false,
//     },
//     {
//         title: "Dunyo ishlari",
//         author: "O'tkir Hoshimov",
//         alreadyRead: true,
//     },
//     {
//         title: "Yulduzli tunlar",
//         author: "Pirimqul Qodirov",
//         alreadyRead: true,
//     },
// ];

// for (let i = 0; i < books.length; i++) {
//     let book = books[i];
//     let status = book.alreadyRead ? "o'qilgan" : "o'qilmagan";
//     console.log(
//         `${i + 1}. ${book.author}ning "${book.title}" kitobi ${status};`
//     );
// }

// #11==========================================================================
// const products = [
//     { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
//     { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
//     { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
//     { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
//     { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
// ];

// let totalSum = 0;

// for (let i = 0; i < products.length; i++) {
//     let product = products[i];
//     let sale = product.price * (1 - product.discount / 100);
//     let productSum = sale * product.quantity;
//     totalSum += productSum;
// }

// console.log("Umumiy summa:", totalSum);

// #12==========================================================================
// const obj = {
//     it: 20,
//     mushuk: 10,
//     sigir: 200,
//     tovuq: 2,
// };

// let arr = [];

// for (let key in obj) {
//     arr.push(key, obj[key]);
// }

// console.log(arr);

// #13==========================================================================
// const grades = [
//     { name: "Fizika", grade: 4, kredit: 6 },
//     { name: "Matematika", grade: 5, kredit: 6 },
//     { name: "Tarix", grade: 4, kredit: 4 },
//     { name: "Dasturlash", grade: 5, kredit: 8 },
//     { name: "Kibrxavfsizlik", grade: 4, kredit: 8 },
// ];

// function calculateGPA(grades) {
//     let totalPoint = 0;
//     let totalCredits = 0;

//     for (let i = 0; i < grades.length; i++) {
//         const subject = grades[i];
//         totalPoint += subject.grade * subject.kredit;
//         totalCredits += subject.kredit;
//     }

//     return totalPoint / totalCredits;
// }

// let gpa = calculateGPA(grades);
// console.log("GPA:", gpa);

// #14==========================================================================

// const rightAnswers = {
//     1: "B",
//     2: "A",
//     3: "C",
//     4: "D",
//     5: "B",
//     6: "C",
//     7: "A",
//     8: "D",
//     9: "A",
//     10: "B",
// };
// const myAnswers = {
//     1: "C",
//     2: "A",
//     3: "D",
//     4: "D",
//     5: "B",
//     6: "C",
//     7: "B",
//     8: "C",
//     9: "A",
//     10: "C",
// };

// let t = 0;
// let not = 0;

// for (let el in rightAnswers) {
//     const rightAnswer = rightAnswers[el];
//     const myAnswer = myAnswers[el];

//     myAnswer === rightAnswer ? t++ : not++;
// }

// console.log("To'g'ri javoblar soni:", t);
// console.log("Noto'g'ri javoblar soni:", not);

// #15==========================================================================

// function getMultipleValues(obj, n) {
//     const result = {};

//     for (let key in obj) {
//         result[key] = obj[key] * n;
//     }

//     return result;
// }

// let n = 3;
// const obj = { a: 2, b: 3, c: 4, d: 6 };
// const res = getMultipleValues(obj, n);

// console.log(res);

// #16==========================================================================
// const product = {
//     name: "Iphone 14",
//     company: {
//         name: "Apple",
//         price: "200 mlrd",
//         founder: {
//             firstName: "Steve",
//             lastName: "Jobs",
//             birthDate: 1950,
//         },
//     },
// };

// let {
//     name,
//     company: {
//         name: companyName,
//         price,
//         founder: { firstName, lastName, birthDate },
//     },
// } = product;

// console.log(
//     `Name: ${name}, Company Name: ${companyName}, Price: ${price}, 
//     Founder's First Name: ${firstName}, Founder's Last Name: ${lastName}, 
//     Founder's Birth Date: ${birthDate}`
// );

// #18==========================================================================

// const student = {
//     name: "John",
//     grade: 85,
// };

// let res;

// if (student.grade >= 90 && student.grade <= 100) {
//     res = 5;
// } else if (student.grade >= 80 && student.grade < 90) {
//     res = 4;
// } else if (student.grade >= 70 && student.grade < 80) {
//     res = 3;
// } else {
//     res = 2;
// }

// console.log(res);


// #20==========================================================================
// const pupils = [
//     {
//         name: "Elbek",
//         percent: 95,
//     },
//     {
//         name: "Zafar",
//         percent: 78,
//     },
//     {
//         name: "Aziz",
//         percent: 83,
//     },
//     {
//         name: "Jasur",
//         percent: 88,
//     },
//     {
//         name: "Bobur",
//         percent: 66,
//     },
//     {
//         name: "Kamron",
//         percent: 75,
//     },
// ];

// let otdi = 0;
// let fail = 0;

// for (let i = 0; i < pupils.length; i++) {
//     let pupil = pupils[i];

//     pupil.percent >= 70 ? otdi++ : fail++;
// }

// console.log(
//     `O'tganlar soni: ${otdi}, O'ta olmaganlar soni: ${fail}`
// );


