// Array trong js
// Array là 1 cấu trúc ữ liệu dùng để lưu nhiều giá trị trong 1 biến duy nhất

/**
    - mỗi phần có một chỉ số (index) bắt từ 0
    - có thể chứa nhiều kiểu dữ liệu khác nhau

    Có 2 cách tạo mảng trong js
    - Literal (Là cách phổ biến hơn)
        const arr = [1, 2, 3, 4, 5, 6]
    - Contructor
        const arr = new Array(1, 2, 3, 4, 5, 6)

    Array trong JS thực chất là 1 object đặc biệt

    Cấu trúc nội bộ:
    const arr = [1, 2, 3, 4, 5]

    arr = {
        "0": 1,
        "1": 2,
        "2": 3,
        "3": 4,
        "4": 5,
        length: 5
    }

    * Lấy phần tử trong 1 mảng
    Cú pháp: tên_mảng[index]
 */

// const a = [1, 2, 3, 4, 5, 6]
// const b = new Array(1, 2, 3, 4, 5, 6)

// const arr = ["phần tử đầu tiên", 89982435923, true, [1, 2, 3, 4, 5, "string"], {}, function () { }]
// const arr = [1, 2, 3, 4, 5]

// // arr[5] = 100
// arr[8] = 99

// console.log(arr[7])

// /**
//     arr['-1'] = 0

//     arr = {
//        "0": 1,
//         "1": 2,
//         "2": 3,
//         "3": 4,
//         "4": 5,
//         '-1': 0,
//         length: 5
//     }

//     index "-1" -> không hợp lệ
//  */

// console.log(arr.length) //

// let a; // undefined

/**
    Có 2 cách đẻ copy giá trị từ mảng này ua mảng khác
        - Shallow copy
            const a = [1, 2, 3]
            const b = [...a]
        - Deep copy
            sử dụng hàm structuredClone()
 */

// const a = [1, 2, 3]
// // const b = [0, ...a, 4]
// const b = structuredClone(a)

// a[1] = 99


// console.log("a: ", a)
// console.log("b: ", b)

/**
    Method xử lý mảng: 2 loại
        - Mutable (thay đổi mảng gốc)
        - Immutable (trả về mảng mới, không thay đổi mảng gốc)
 */

/**
    Mutable:
        - push: thêm mới 1 phần tử vào cuối mảng O(1)
        - unshift: thêm phần tử vào đầu mảng
        - pop: xóa phần tử ở cuối mảng O(n)
        - shift: xóa phần tử ở đầu mảng
    Immutable
        - map: lặp qua tất cả phần tử ở trong mảng trả về mảng mới có số phần tử bằng với mảng gốc
        - filter: lặp qua tất cả phần tử ở trong mảng trả về mảng mới thỏa mãn yêu cầu

        - reduce(function(pre, cur) {

        }, initalValue)

        pre: giá trị hiện tại
        cur: phần tử hiện tại

        initalValue: giá trị khởi tạo

        - find: trả về giá trị khi thỏa mãn điều kiện và undefined khi không thỏa mãn
 */

/**
    Độ phức tạp của 1 thuật toán BIG-O
 */

const a = [1, 2, 3, 4, 5, 6] // [2, 4]

// a.shift()

// console.log(a)

// const b = a.map(function (item, index) {
//     // return
//     // console.log("item: ", item)
//     // console.log("index: ", index)
//     // console.log("================")

//     return item + 10
// })

// const b = a.filter(function (item) {
//     if (item % 2 !== 0) return item
// })

// console.log("====================")

// console.log("b: ", b)

// const sum = a.reduce(function (pre, cur) {
//     return pre + cur
// }, 0)

const sum = a.reduce(function (acc, cur) {
    return [...acc, cur + 1]
}, [])

// console.log(sum)

// const isFiveNumber = a.find(function (item) {
//     return item === 10
// })

// console.log(isFiveNumber)

// let a = []
// let b = []
// // so sánh reference

// console.log(a == b)

console.log(sum)