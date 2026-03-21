// Object (đối tượng)

/**
    Là cấu trúc dữ liệu dùng để lưu trữ dữ liệu theo dạng cặp key và value {key: value}

    Đặc điểm:
        key: có thể tạo bằng nhiều kiểu dữ liệu
        JS Tự động đưa key có số lên trước

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

const student = {
    name: "tai",
    age: 28,
    123456: "học",
    1: "học js",
    "fullhouse dev": 1
}

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

const a = {
    name: "tai",
    age: 28
}

const b = { ...a }

a.age = 30

console.log(b)
