// if1

// let n = +prompt("n ni kiriting: ");
// first
// if (n > 0) {
//   n++;
// } else {
//   n ;
// }
// second
// n > 0 ? n++ : n;

// console.log(n);

// if2
// let n = +prompt("n ni kiriting: ");
// // first
// if (n > 0) {
//     n++;
// } else if (n < 0) {
//     n -= 2;
// } else {
//     n == 0;
// }
//  n > 0 ? n++ : (n -= 2);

// if3

// let a = +prompt("a ni kiriting: ");
// let b = +prompt("b ni kiriting: ");
// let c = +prompt("c ni kiriting: ");

// let positiveCount = 0;
// let negativeCount = 0;

// if (a > 0) {
//   positiveCount++;
// } else if (a < 0) {
//   negativeCount++;
// }

// if (b > 0) {
//   positiveCount++;
// } else if (b < 0) {
//   negativeCount++;
// }

// if (c > 0) {
//   positiveCount++;
// } else if (c < 0) {
//   negativeCount++;
// }

// console.log(positiveCount);
// console.log(negativeCount);

// if4
// let a = +prompt("a ni kiriting: ");
// let b = +prompt("b ni kiriting: ");
// if (a > b) {
//     console.log(a);
// } else {
//     console.log(b);
// }

// if5
// let a = +prompt("a ni kiriting: ");
// let b = +prompt("b ni kiriting: ");

// if (a > b) {
//     console.log(b);
// }

// if (a < b) {
//     console.log(a);
// }

// if (a == b) {
//     console.log(a, b, " bu ikki son o'zaro teng");
// }

// a > b && console.log("kichik sonning tartib raqami", 2);

// a < b && console.log("kichik sonning tartib raqami", 1);

// if6

// let a = +prompt("a ni kiriting: ");
// let b = +prompt("b ni kiriting: ");
// if (a > b) {
//     console.log(a, "and", b);
// } else {
//     console.log(b, "and", a);
// }
// if (a == b) {
//     console.log(a, "and", b, " bu ikki son o'zaro teng");
// }

// if7

// let a = +prompt("a ni kiriting: ");
// let b = +prompt("b ni kiriting: ");
// let x = a;
// if (a < b) {
//     console.log(a, "and", b);
// } else if (a > b) {
//     a = b;
//     b = x;
//     console.log(a, "and", b);
// }

// if8

// let a = +prompt("a ni kiriting: ");
// let b = +prompt("b ni kiriting: ");
// let res = a + b;

// if (a !== b) {
//     console.log(res, " ", a, "and", b);
// } else if (a == b) {
//     console.log(0," ", a, "and", b);
// }

// if9

// let a = +prompt("a ni kiriting: ");
// let b = +prompt("b ni kiriting: ");

// if (a > b) {
//     console.log(a, " ", a, "and", b);
// } else if (a < b) {
//     console.log(b, " ", a, "and", b);
// } else if (a == b) {
//     console.log(0, " ", a, "and", b);
// }

// if10

// let a = +prompt("a ni kiriting: ");
// let b = +prompt("b ni kiriting: ");
// let c = +prompt("c ni kiriting: ");

// if (a < b && a < c) {
//     console.log(a);
// } else if (b < a && b < c) {
//     console.log(b);
// } else if (c < a && c < b) {
//     console.log(c);
// } else if (a == b && a == c && b == c){
//   console.log(a, b, c, " bu sonlar o'zaro teng");
// }
// if11
// let a = +prompt("a ni kiriting: ");
// let b = +prompt("b ni kiriting: ");
// let c = +prompt("c ni kiriting: ");

// if (a < b && a < c && b<c) {
//     console.log(b);
// } else if (b < a && b < c && c < a) {
//     console.log(c);
// } else if (c < a && c < b && a < b) {
//     console.log(a);
// } else if (a == b && a == c && b == c){
//   console.log(a, b, c, " bu sonlar o'zaro teng");}

// if12
// let a = +prompt("a ni kiriting: ");
// let b = +prompt("b ni kiriting: ");
// let c = +prompt("c ni kiriting: ");

// if (a > b && b > c) {
//     console.log(a, "and", b);
// } else if (b>c && c > a) {
//     console.log(b, "and", c);
// } else if (c>a && a > b) {
//     console.log(c, "and", a);

// }else if (a > c && c > b) {
//     console.log(a, "and", c);
// } else if (b > a && a > c) {
//     console.log(b, "and", a);
// } else if (c > b && b > a) {
//     console.log(c, "and", b);
// }
// if13

// let a = +prompt("a ni kiriting: ");
// let b = +prompt("b ni kiriting: ");
// let c = +prompt("c ni kiriting: ");
// if(a>b && b<c){
//   console.log();
// }

// if16
// let x = +prompt("x ni kiriting: ");
// if (x <= 0) {
//     console.log(-x);
// } else if (x > 0 && x < 2) {
//     console.log(Math.pow(x, 2));
// } else if(x>= 2) {
//   console.log(4);
// }

// if17
// let a = +prompt("a ni kiriting: ");
// if (a % 400 == 0 ) {
//     console.log("366kun");
// } else if (a % 100 == 0) {
//     console.log("365kun");
// } else if (a % 4 == 0) {
//     console.log("366kun");
// } else{
//   console.log("365kun");
// }

// if18
// let res = +prompt("sonni kiriting: ");

// if (res > 99 && res < 1000 && res % 2 == 0) {
//     console.log(res, "uch xonali juft son");
// } else if (res > 99 && res < 1000 && res % 2 == 1) {
//     console.log(res, "uch xonali toq son");
// } else if (res > 9 && res < 100 && res % 2 == 0) {
//     console.log(res, "ikki xonali juft son");
// } else if (res > 9 && res < 100 && res % 2 == 1) {
//     console.log(res, "ikki xonali toq son");
// } else if (res > 0 && res < 10 && res % 2 == 0) {
//     console.log(res, "bir xonali juft son");
// } else if (res > 0 && res < 10 && res % 2 == 1) {
//     console.log(res, "bir xonali toq son");
// } else {
//     console.log("No valid !!!");
// }
// case1
// let k = +prompt("bahoni kiriting: ");
// switch (k) {
//     case 1:
//         console.log("yomon");
//         break;
//     case 2:
//         console.log("qoniqarsiz");
//         break;
//     case 3:
//         console.log("qoniqarli");
//         break;
//     case 4:
//         console.log("yaxshi");
//         break;
//     case 5:
//         console.log("a'lo");
//         break;
//     default:
//         console.log("xato");
//         break;
// }

// case2
// let k = +prompt("oyni kiriting: ");
// switch (k) {
//     case 1:
//     case 2:
//     case 12:
//         console.log("qish");
//         break;
//     case 3:
//     case 4:
//     case 5:
//         console.log("bahor");
//         break;
//     case 6:
//     case 7:
//     case 8:
//         console.log("yoz");
//         break;
//     case 9:
//     case 10:
//     case 11:
//         console.log("kuz");
//         break;
//     default:
//         console.log("xato");
//         break;
// }

// case3
// let k = +prompt("oyni kiriting: ");
// switch (k) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log("31 kun");
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log("30 kun");
//         break;
//     case 2:
//         console.log("28 va 29 kun");0
//         break;
//     default:
//         console.log("bunday oy yo'q");
//         break;
// }

// case4
// let a = +prompt("qiymatni kiriting: ");
// let b = +prompt("1-5 gacha oraliqni kiriting: ");
// switch (b) {
//     case 1:
//         console.log(a, "desimetr = ", a / 10, "metr");
//         break;
//     case 2:
//         console.log(a, "kilometr = ", a * 1000, "metr");
//         break;
//     case 3:
//         console.log(a, "metr = ", a, "metr");
//         break;
//     case 4:
//         console.log(a, "millimetr = ", a / 1000, "metr");
//         break;
//     case 5:
//         console.log(a, "santimetr = ", a / 100, "metr");
//         break;
//     default:
//         console.log("bunday qiymat yo'q");
//         break;
// }

// case5
// let a = +prompt("qiymatni kiriting: ");
// let b = +prompt("1-5 gacha oraliqni kiriting: ");
// switch (b) {
//     case 1:
//         console.log(a, "kilogramm = ", a, "kilogram");
//         break;
//     case 2:
//         console.log(a, "milligramm = ", a / 1000000, "kilogram");
//         break;
//     case 3:
//         console.log(a, "gramm = ", a / 1000, "kilogram");
//         break;
//     case 4:
//         console.log(a, "tonna = ", a * 1000, "kilogram");
//         break;
//     case 5:
//         console.log(a, "sentner = ", a * 100, "kilogram");
//         break;
//     default:
//         console.log("bunday qiymat yo'q");
//         break;
// }

// case6

// let a = +prompt("kunni kiriting: ");
// let b = +prompt("oyni oraliqni kiriting: ");
// if (a > 0 && a < 32) {
//     switch (b) {
//         case 1:
//             console.log(a, "yanvar");
//             break;
//         case 2:
//             console.log(a, "fevral");
//             break;
//         case 3:
//             console.log(a, "mart");
//             break;
//         case 4:
//             console.log(a, "aprel");
//             break;
//         case 5:
//             console.log(a, "may");
//             break;
//         case 6:
//             console.log(a, "iyun");
//             break;
//         case 7:
//             console.log(a, "iyul");
//             break;
//         case 8:
//             console.log(a, "avgust");
//             break;
//         case 9:
//             console.log(a, "sentyabr");
//             break;
//         case 10:
//             console.log(a, "oktyabr");
//             break;
//         case 11:
//             console.log(a, "noyabr");
//             break;
//         case 12:
//             console.log(a, "dekabr");
//             break;
//     }
// }

// case11

// let abc = +prompt("sonni kiriting: ");
// let a = parseInt(abc / 100);
// let c = abc % 10;
// let b = ((abc % 100) - c) / 10;

// let res;

// switch (a) {
//     case 1:
//         res = "bir yuz";
//         break;
//     case 2:
//         res = "ikki yuz";
//         break;
//     case 3:
//         res = "uch yuz";
//         break;
//     case 4:
//         res = "to'rt yuz";
//         break;
//     case 5:
//         res = "besh yuz";
//         break;
//     case 6:
//         res = "olti yuz";
//         break;
//     case 7:
//         res = "yetti yuz";
//         break;
//     case 8:
//         res = "sakkiz yuz";
//         break;
//     case 9:
//         res = "to'qqiz yuz";
//         break;
// }
// res += " ";

// switch (b) {
//     case 1:
//         res += "o'n";
//         break;
//     case 2:
//         res += "yigirma";
//         break;
//     case 3:
//         res += "o'ttiz";
//         break;
//     case 4:
//         res += "qirq";
//         break;
//     case 5:
//         res += "ellik";
//         break;
//     case 6:
//         res += "oltmish";
//         break;
//     case 7:
//         res += "yetmish";
//         break;
//     case 8:
//         res += "sakson";
//         break;
//     case 9:
//         res += "to'qson";
//         break;
// }
// res += " ";

// switch (c) {
//     case 1:
//         res += "bir";
//         break;
//     case 2:
//         res += "ikki";
//         break;
//     case 3:
//         res += "uch";
//         break;
//     case 4:
//         res += "to'rt";
//         break;
//     case 5:
//         res += "besh";
//         break;
//     case 6:
//         res += "olti";
//         break;
//     case 7:
//         res += "yetti";
//         break;
//     case 8:
//         res += "sakkiz";
//         break;
//     case 9:
//         res += "to'qqiz";
//         break;
// }
// console.log(res);

// case12

let abcd = +prompt("yilni kiriting: ");
let a = 1984 % 60;

let b = abcd % 60;
let c = abcd % 12;
let d = abcd % 5;
let res;
switch (c) {
    case 1:
        res = "yashil";
    case 2:
        res = "qizil";
    case 3:
        res = "sariq";
    case 4:
        res = "oq";
    case 0:
        res = "qora";
}
res += " ";

switch (d) {
    case 1:
        res += "sichqon";
    case 2:
        res += "sigir";
    case 3:
        res += "yo'lbars";
    case 4:
        res += "quyon";
    case 5:
        res += "baliq";
    case 6:
        res += "ilon";
    case 7:
        res += "ot";
    case 8:
        res += "qo'y";
    case 9:
        res += "maymun";
    case 10:
        res += "tovuq";
    case 11:
        res += "it";
    case 0:
        res += "to'ng'iz";
}
console.log(res);
