// Object (đối tượng)

/**
    Là cấu trúc dữ liệu dùng để lưu trữ dữ liệu theo dạng cặp key và value {key: value}

    key: thuộc tính
    value: giá trị

    Đặc điểm:
        key: có thể tạo bằng nhiều kiểu dữ liệu -> string hoặc symbol
        JS Tự động đưa key có số lên trước

        1 -> "1"

    Cú pháp:
    - Literal (Là cách phổ biến hơn)
        const student = {
            name: "tai",
            age: 28,
            ....
        }

    - Contructor
        const obj = new Object({
            name: "tai",
            age: 28,
            ....
        })

    Truy xuất tới 1 trường (cặp key: value)
        2 cách:
            - tên_đối_tượng.key
            - tên_đối_tượng["key"] -> nên dùng

    Thêm / Sửa / Xóa
 */

// ================================================================
// const student = {
//     name: "tai",
//     age: 28,
//     123456: "học",
//     1: "học js",
//     "fullhouse dev": 1
// }

// student["school"] = "PTTC" // Thêm
// student["name"] = "Kien" // Sửa
// delete student["123546"] // Xóa

// const obj = new Object({
//     name: "tai",
//     age: 28,
//     123546: "học",
//     "fullhouse dev": 1
// })

// console.log(obj)

// console.log(student)

// ================================================================
/**
    Duyệt Object
        for...in
            Cú pháp:
                for (let key in tên_object) {

                }
    Lấy tất cả keys ở trong 1 object
        Object.keys(tên_object) -> 1 mảng chứa tất cả key có trong object đó


    Lấy tất cả values ở trong 1 object
        Object.values(tên_object) -> 1 mảng chứa tất cả values có trong object đó
 */

// for (let key in student) {
//     console.log(key, student[key])
// }

// console.log(Object.values(student))

// const a = {
//     name: "tai",
//     age: 28
// }

// const b = { ...a }

// a.age = 30

// console.log(b)

// function handleForm() {

// }

// handleForm()

// ================================================================
// Method trong Object
// -> Function trong object gọi là method

// -> this = object lúc gọi hàm

// const user = {
//     name: "Tai",
//     age: 20,
//     updateAge(age) {
//         this.age = age
//     },
//     logAge() {
//         return this.age
//     }
// }

// user.updateAge(28)
// const a = user.logAge
// console.log(a()) // undefine

// ================================================================
// Object lồng nhau
// const obj = {
//     a: {
//         b: {
//             c: {

//             }
//         }
//     }
// }

// console.log(obj?.d?.a) // undefined

// ================================================================
// Destructuring
// const a = {
//     name: "tai",
//     age: 28
// }

// const { age, name } = a

// console.log(name)
// console.log(age)

// ================================================================
// spread operator
// const b = { ...a, gender: "Male" }
// console.log(b)

// ================================================================
// JSON
// Convert object -> string
// const str = JSON.stringify(a)
// console.log(str)

/**
{
    "name":"tai",
    "age":28
}
 */
// Convert string -> object
// const newObj = JSON.parse(str)
// console.log(newObj)

// const a = {
//     name: "tai"
// }

// const b = a

// a.name = "huy"

// console.log(b) // false

/**
    So sánh 2 object
        Tạo ra 1 hàm có 2 tham số là 2 object
        Yêu cầu:
            isEqual(a, b) -> boolean
            {a: 1, b: 2, c: 2} === {a: 1, b: 2, c: 2} -> true
 */

// function isEqual(a, b) {

// }

// const a = {
//     a: 1,
//     b: 2,
//     c: 2
// }
// const b = {
//     a: 1,
//     b: 2,
//     c: 2
// }
// function isEqual(a, b) {
//     if (Object.keys(a).length !== Object.keys(b).length) {
//         return false;
//     }
//     for (let key in a) {
//         if (a[key] !== b[key]) {
//             return false;
//         }
//     }
//     return true;
// }