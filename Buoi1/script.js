// strict mode

// alert("123456") // popup
// console.log("Tai")

// ES6+

// ==================================
/*
  Biến và kiểu dữ liệu trong js
*/

// =============== //
// Khai báo biếm
// var, let, const
// cú pháp: var/let/const tên_biến = giá trị;

// var ten = 12345678;

// console.log(ten);

// var: Cách cũ (hạn chế dùng) (scope: phạm vi -> func scope): có thể gán lại giá trị

// let: (scope: phạm vi -> block scope): có thể gán lại giá trị
// const: không thể gán lại giá trị

// var: hoisting

// const Pi = 3.14;

// console.log(ten)
// console.log(a) // undefined
// console.log(b) // undefined

// var a = 10

// ==================================
// Kiểu dữ liệu trong js
/*
    Js chia dữ liệu thành 2 nhóm chính:
        - Kiểu nguyên thủy (Primitive Types): Chứa giá trị dơn giản (7 kiểu dữ liệu)
            + String (Chuỗi): '', "", backtick ``
            + Number (Số): bao gồm cả số nguyên và số thực
            + Boolean (logic): true/false
            + Undefined: Biến đã khai báo nhưng chưa gán giá trị
            + Null: Giá trị rỗng (có chủ đích)
            2 kiểu dữ liệu nữa: Symbol, BigInt
        - Kiểu phức tạp (Reference Types):
            - Object (Đối tượng): Tập hợp các cặp (key: value)
            - Array (Mảng): Danh sách các giá trị được đánh số thứ tự
*/

// Toán tử và câu lệnh điều kiện trong js

/**
    Toán tử toán học & so sánh
    - Toán học: +, -, *, /, % (chia lấy dư), ** (lũy thừa)
    - So sánh:
        +) == So sánh giá trị
        +) === So sánh tuyệt đối (so sánh cả giá trị và kiểu dữ liệu) -> Khuyên dùng
        +) !=, !==, >, <, >=, <=
 */

// NaN: Not a Number

// let a = "a"
// let b = "b"

// let c = 2 + 4 + a + b + 5 + 2

// console.log(a !== b) //

// Câu lệnh điều kiện trong js (if - else)
// Giúp cho chương trình đưa ra uyết dịnh dựa trên điều kiện đúng hay sai

/**
    Cú pháp:
    if (điều_kiện) {
        // Thục thi nếu điều_kiện đúng
    }
    else if (điều_kiện_khác) {
        // Thực thi nếu điều_kiện sai và điều_kiện_khác đúng
    }
    else {
        // Thực thi khi tất cả điều_kiện sai
    }
 */

// if (a > b) {
//     console.log("a lớn hơn b")
// } else {
//     console.log("a bé hơn b")
// }

// Biến không phải là số
// if (a === b) {
//     console.log("a có cùng kiểu dữ liệu b");
// } else if (a > b) {
//     console.log("a lớn hơn b");
// } else if (a < b) {
//     console.log("a nhỏ hơn b");
// } else if (a == b) {
//     console.log("a bằng b");
// } else {
//     console.log("a khác kiểu dữ liệu với b");
// }

// if (typeof a === "number" && typeof b === "number") {
//     if (a > b) console.log("a lon hon b")
//     else if (a == b) console.log("a bang b")
//     else console.log("a be hon b")
// }

// if (a === b) {
//     console.log("cung kieu du lieu")
//     if (a > b) {
//         console.log("a lon hon b")
//     } else if (a < b) {
//         console.log("a nho hon b")
//     } else {
//         console.log("a  bang b")
//     }
// } else {
//     console.log("a khác kiểu dữ liệu")
// }

// let a = false
// let b = "30"

// if (typeof a === "number") {
//     if (typeof b === "number") {
//         if (a > b) console.log("a lon hon b")
//         else if (a == b) console.log("a bang b")
//         else console.log("a be hon b")
//     } else console.log("b khong la number")
// } else console.log("a khong la number")

// if ((a - b).toString() != NaN.toString()) {
//     if (a > b) {
//         console.log("a lon hon b")
//     } else if (a == b) {
//         console.log("a bang b")
//     } else {
//         console.log("a be hon b")
//     }
// } else console.log("Biến không phải là số")

// truthy / falsy
/**
    là những giá trị mà js khi ép về kiểu boolean
    truthy: string, number, object, array, true
    falsy: false, 0, null, undefined, NaN, ""
 */

// if ("") {
//     console.log("true")
// } else {
//     console.log("false")
// }

// Toán tử 3 ngôi (Ternary Operator)
// cách viết tắt của if - else

/**
    Cú pháp: Điều_kiện ? giá_trị_nếu_đúng : giá_trị_nếu_sai
 */

// const age = 20
// const message = age >= 18 ? "Đủ tuổi" : "Chưa đủ tuổi"
// console.log(message)