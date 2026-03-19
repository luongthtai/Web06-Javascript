// Buổi 3: Vòng lặp

/**
    Là cấu trúc điều kiện cho phép thực thi một doạn code nhiều lần dựa vào một điều kiện
*/


/**
    Vòng lặp for:
    // (initialzation; condition; update)

    Cú pháp:
    for (khởi_tạo; điều_kiện; cập_nhật) {
        // code
    }

    1. khởi_tạo
        Tạo biến đếm
        Chạy 1 lần duy nhất
    vd: let i = 0;

    2. điều_kiện
    Nếu đúng -> chạy
    Nếu sai -> dừng

    3. update
    Thay đổi giá trị sau mỗi vòng


    Flow
    B1: i = 0
    B2: Kiểm tra i <= 10 -> true ? B3 : kết thúc vòng lặp
    B3: chạy code
    B4: i++
    B5: quay lại B2

    Lỗi thường gặp
    - Không truyền update -> infinity loop
    - Khởi tạo giá trị mà điều kiện không thỏa mãn ngay từ dầu -> không chạy vòng lặp
*/

// Lặp từ 0 đến 20 và lấy ra tất cả những số chia hết cho 2
// for (let i = 0; i <= 20; i++) {
//     if (i % 2 == 0) console.log(i);
// }

/**
    do .... while
    -> chạy ít nhất 1 lần

    Cú pháp:
        do {
            // code
        } while (điều_kiện)
 */

// let i = 20

// do {
//     console.log(i)
//     i++
// } while (i <= 10)

// Cho 1 số nguyên dương -> in ngược các số từ số đó về 1
// (5 -> 5 4 3 2 1) -> oke

// let i = 5;

// do {
//     console.log(i);
//     i--;
// } while (i != 0); // i > 0

// for...of & for...in -> array || object
// forEach & map --> array

// let i = 10
// while (i <= 15) {
    
// }

/**
    break & continue

    break -> kết thúc vòng lặp
    continue -> bỏ ua vòng lặp
 */

// for (let i = 0; i <= 10; i++) {
//     // if (i === 5 || i === 8) continue // 0 1 2 3 4 6 7 9 10
//     if (i === 5) break // 0 1 2 3 4
//     console.log(i)
// }


// Cho 1 dãy số nguyên bất kì bắt đầu từ a, kết thúc ở b. (a > b)

// 1. Tìm số đầu tiên chia hết cho 5
// 2. In số lẻ

// let a = 10
// let b = 20

// let a = 10;
// let b = 20;

// Bai 1
// for (let i = a; i <= b; i++) {
//     if (i % 5 === 0) {
//         console.log("Huy", i);
//         break;
//     }

// }

// for (let i = a; i < b; i++) {
//     if (i % 5 == 0) {
//         console.log("Kien", i);
//         break;
//     }
// }

// Bai 2
// for (let i = a; i <= b; i++) {
//     if (i % 2 !== 0) continue;
//     console.log("Huy", i);
// }

// for (let i = a; i < b; i++) {
//     if (i % 2 === 0) console.log("Kien", i);
// }

// Nested loop (vòng lặp lồng nhau)
// Loop ở trong sẽ chạy hết trước loop ở ngoài

// for ()
// 00 01 02 03 04 05 06 07 08 09 10 11 12 13 14

// for (let i = 0; i <= 2; i++) {
//     for (let j = 0; j < 10; j++) {
//         console.log("Hang chuc: ", i, ", ", "Hang don vi: ", j)
//     }
// }

// In ra những phép tính của bảng cửu chương số chẵn từ (1 -> 5)

// 2 x 1 = 2
// 2 x 2 = 4
// ....
// 2 x 10 = 20
// let i = 2

// for (let j = 1; j <= 10; j++) {
//     console.log(`${i} x ${j} = ${i * j}`);
// }

// // Huy
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 10; j++) {
//         if (i % 2 === 0) {
//             console.log(`${i} x ${j} = ${i * j}`);
//         }
//     }
// }
// // 13.229ms

// console.time("Timer")
// // Kien
// for (let i = 1; i <= 5; i++) {
//     if (i % 2 == 0) {
//         for (let j = 1; j <= 10; j++) {
//             console.log(i + " x " + j + " = " + (i * j));
//         }
//     }
// }
// // 12.551ms
// console.timeEnd("Timer")

// const -> x
// var

// for (var i = 0; i < 3; i++) {
//     console.log("trong", i)
// }

// console.log("ngoai", i)

// var -> func scope | global scope
// {} -> block scope

// if (true) {
//     var i = 10
// }

// console.log(i)

// for (let i = 0; i < 3; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, 2000);
// }