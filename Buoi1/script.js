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