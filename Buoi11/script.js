// ES6+

/**
 * Ngắn gọn hơn
 * Dễ đọc hơn
 */

// sau 2015

/**
    1. let & const
    Dùng để khai báo biến thay cho var

    2. Arrow function
    Cách viết hàm ngắn gọn hơn

    Cú pháp:
        function tên_hàm() {  // Cách cũ
            // code
        }

        const tên_hàm = () => {
            // code
        }

    3. Template string
        Cho phép viết chuỗi dễ hơn

    4. Destructuring
        Lấy dữ liệu từ object hoặc array nhanh hơn
        Object:
            const user = { name: 'tai', age: 28 }
            const { name, age, gender } = user
        Array:
            const arr = [1, 2, 3]
            const [a, b] = arr
            const [ , , c] = arr

    5. Default parameter
        Đặt giá trị defaut cho tham số

    6. Rest parameter
        Gom nhiều tham số thành mảng

        Cú pháp:
            const func = (...params) => {
                console.log(params) //
            }

    7. Spread operator
        Trải dữ liệu ra

        Cú pháp: ...

        const a = [1, 2]
        const b = [0, ...a, 3, 4, 5]

    8. Enhanced object
        Viết object ngắn gọn hơn

        const name = "Tai"
        const age = 28

        const obj = {
            name,
            age
        }

    9. for...of
        Duyệt array

        Cú pháp:
            const arr = [1, 2, 3, 4, 5, 6]
            for (let item of arr) {
                // code
            }

    10. class
        Cách viết OOP dễ hơn

    11. import / export

    12. Nullish coalecing
        Lấy giá trị mặc định

    13. Optional chaining (?.) 
    14. Promise: Xử lý bất đồng bộ
    15. Async/Await: Xử lý bất đồng bộ
 */

// const sum = (a, b) => a + b

// let a = sum(9, 10)

// console.log(a)

// let a = 20

// const message = `Tuổi của tôi là: ${a}`

// console.log(message)

// const sum = (a = 0, b = 1) => a + b

// console.log(sum(0, 9)) // NaN

// const sum = (...params) => params.reduce((pre, cur) => pre + cur, 0)

// const a = sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

// console.log(a)

// const name = "Tai"
// const age = 28

// const obj = {
//     name,
//     age
// }

// console.log(obj)

// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (let item of a) {
//     console.log(item)
// }

// class Person {
//     constructor(name) {
//         this.name = name
//     }

//     sayHi() {
//         console.log(`Xin chao ${this.name}`)
//     }
// }

// const tai = new Person('Tai')

// tai.sayHi()

// const a = `Tai`

// module.exports = { a }

let a = "Kien"

const message = `Hello ${a ?? "User"}`

console.log(message)