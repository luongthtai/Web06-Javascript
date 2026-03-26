// bai 1:
// const obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 16
// }

// function sumValue(obj) {
//     // C1
//     // const sum = Object.values(obj).reduce(function (pre, cur) {
//     //     return (pre + cur)
//     // }, 0)

//     // C2
//     let sum = 0

//     for (let key in obj) {
//         sum += obj[key]
//     }

//     return sum
// }

// const sum = sumValue(obj)
// console.log(sum) // 6

// let a = 3
// let b = 4

// let c = 8
// let d = 10

// let sum = a + b
// let sum2 = c + d

// console.log(sum2)

/**
    Function (hàm)
        là 1 đoạn code được định nghĩa 1 lần và có thể gọi lại nhiều lần

    Cú pháp:
        Tạo hàm:
        function tên_hàm(tham_số) {
            // code
        }

        Gọi hàm:
            tên_hàm()
 */

// =================================================================================

// function sayHi() {
//     console.log("hello")
// }

// sayHi()

// let a = 3
// let b = 4

// let c = 8
// let d = 10

// let c = 8
// let d = 10

// let sum = a - b
// let sum2 = c - d
// let sum3 = c - d

// function sum(a, b) {
//     return a - b
// }

// let c = sum(8, 10)
// let d = sum(3, 4)
// let e = sum(3, 4)

// console.log(c)
// console.log(d)
// console.log(e)

// ES6+

// const obj_3 = {
//     a: 30,
//     b: null,
//     c: 90,
//     d: undefined
// }

// // 1
// function cleanObject(obj_3) {
//     let result = {};
//     for (let key in obj_3) {
//         if (obj_3[key] != null) {
//             result[key] = obj_3[key];
//         }
//     }
//     return result;
// }

/**
    != null
        loại null
        loại undefined
 */

// function clenObject(a) {
//     const obj = {};

//     for (let key in a) {
//         let found = 0;
//         if (a[key] === null || a[key] === undefined) {
//             found = 1;
//         }
//         if (!found) {
//             obj[key] = a[key];
//         }
//     }
//     return obj;
// }

// console.log(cleanObject(obj_3))

// const obj_5 = {
//     a: 30,
//     b: null,
//     c: 90,
//     d: undefined,
//     e: 8,
//     f: 10,
//     g: NaN
// }

// function toStringValue(obj_4) {
//     let result = {};
//     for (let key in obj_4) {
//         result[key] = "" + obj_4[key];
//     }
//     return result
// }

// console.log(toStringValue(obj_4))

// typeof NaN === 'number

// function countNumberValue(obj_5) {
//     let count = 0;
//     for (let key in obj_5) {
//         if (typeof obj_5[key] === "number" && !isNaN(obj_5[key])) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countNumberValue(obj_5)) // 4

// =============================================================
// Function nâng cao
/**
    1. Scope (phạm vi)
        nơi biến có thể được truy cập

    - 3 loại scope
        + global scope
        + block scope {}
        + func scope

    2. Callback function
        function đưuọc truyền vào 1 function khá

    3. Hoisting
        đẩy lên đầu

    4. Closure
    5. High order function
    6. this trong function (và arrow function)
 */

// const array = [1, 2, 3]

// function func() {
//     var a = 10
// }

// for (let index = 0; index < array.length; index++) {
//     setTimeout(() => {
//         console.log(index)
//     }, 0);
// }

// console.log(a)
// console.log(sum(5, 10))

// function sum(a, b) {
//     return a - b
// }

// console.log(sum(5, 10))

// const sum = (a, b) => { // ES6 Arrow function
//     return a + b
// }


// function arv(callback) {
//     return callback(5, 10) + 10
// }

// sayHi(sum) // sum -> callback function

// console.log(arv(function (a, b) {
//     return a - b
// }))

// console.log(arv(sum))