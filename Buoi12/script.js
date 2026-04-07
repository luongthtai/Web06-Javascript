// Bất đồng bộ trong JS

// Đồng bộ ( Synchronous ) hành động tuần tự
/**
    Code chạy từng dòng một, dòng sau chờ dòng trước chạy xong
 */

// Bất đồng bộ ( Asynchronous )
/**
    Một số tác vụ mất nhiều thời gian để thực thi -> được đẩy ra ngoài và chạy song song.
    Một số hàm ỏ phương thức bất đồng bộ: setTimeout(), fetch(), setInterval()
 */

// single-threaded -> javascript là ngôn ngữ đơn luồng. -> Chỉ làm một việc tại 1 thời điểm
// muti-threaded -> Có thể làm nhiều việc tại 1 thời điểm

// Call stack & Event loop
// 3 thành phần chính
/**
    Call stack: Nơi thực thi các hàm dồng bộ theo thứ tự
    Web APIs: Xử lý các tác vụ bất đồng bộ
    Callback Queue: Hàng chờ của các callback sẵn sàng chạy
    Event Loop: Kiểm tra: nếu stack rỗng -> đưa callback vào stack
 */

// setTimeout(() => {
//     console.log("6")
// }, 2000);

// setTimeout(() => {
//     console.log("5")
// }, 0);

// console.log("1")
// console.log("2")
// console.log("3")
// console.log("4")
// console.log("4")
// let a = 0

// setInterval(() => {
//     console.log(a)
//     a++
// }, 1000)

// Promise
/**
    Là 1 đối tượng đại diện cho "giá trị" sẽ có trong tương lai.  -> trả về kết quả -> hoặc thành công hoặc thất bại

    3 trạng thái
    - pending: khởi tạo, chưa có kết quả
    - fulfilled: hoàn thành, có giá trị trả về
    - rejected: Thất bại, có lỗi trả về
 */

// const statusCallApi = document.getElementById("content")

// const user = await fetch('https://randomuser.me/api/')
//     .then((res) => res.json())
//     .then((data) => data.results)
//     .finally(() => {
//         statusCallApi.textContent = "Fetch xong Api"
//     })

// const fetchApi = async () => {
//     const response = await fetch('https://randomuser.me/api/')
//     const user = await response.json()

//     return user.results
// }

// const user = fetchApi()
// const promise = new Promise((resolve, reject) => {
//     const status = true

//     if (status) {
//         resolve({
//             id: 1,
//             name: "Tai"
//         })
//     } else {
//         reject({ id: 9 })
//     }
// })

// promise
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error))
//     .finally(() => console.log("End"))

// const [users] = await Promise.all([
//     fetch('https://randomuser.me/api/').then(res => res.json())
// ])

// console.log(user)