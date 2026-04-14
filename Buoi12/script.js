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

// fetch('https://randomuser.me/api/')
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

// alert("Hello world")

// console.log("Log")

// const user = new Promise((resolve, reject) => {
//     resolve({
//         status: "success"
//     })
// })

// user
//     .then(res => console.log("success: ", res))
//     .catch(error => console.log("error ", error))

// Async/Await
const loading = document.getElementById("status")
// const body = document.getElementsByTagName("body")[0]

// function renderUi(posts) {
//     posts.forEach(item => {
//         const div = document.createElement("div")
//         const h3 = document.createElement("h3")
//         const p = document.createElement("p")

//         h3.textContent = item.title
//         p.textContent = item.body

//         div.appendChild(h3)
//         div.appendChild(p)

//         body.appendChild(div)
//     })
// }

// async function getData() {
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/posts') // GET
//         const posts = await res.json()

//         loading.remove()
//         renderUi(posts)
//     } catch (error) {
//         console.log(error)
//         loading.textContent = "Lỗi khi lấy dữ liệu từ Server"
//     }
// }

// // getData()
// const data = {
//     email: "test@gmail.com",
//     password: "123456"
// }

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: "POST",
//     body: JSON.stringify(data),
//     // headers: {

//     // },
// })
// const ul = document.querySelector(".list");

// function add(users) {
//     users.forEach(user => {
//         const li = document.createElement("li");
//         const name = document.createElement("p");
//         const email = document.createElement("p");
//         name.innerHTML = user.name;
//         email.innerHTML = user.email;
//         li.appendChild(name);
//         li.appendChild(email);
//         ul.appendChild(li);
//     });
// }

// const render = async () => {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const users = await response.json();
//         add(users);
//         loading.remove()
//     } catch (error) {
//         console.error("Lỗi khi lấy dữ liệu:", error);
//     }
// }

// render();

const username = document.getElementById("username")
const email = document.getElementById("email")

const list = document.getElementById("list")

const targetUser = 7

const getUser = async (userId) => {
    try {
        loading.textContent = 'Loading user ...'
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await res.json()

        const user = users.find(item => item.id === userId)

        username.textContent = user.username
        email.textContent = user.email

        loading.remove()
    } catch (error) {
        console.log("Error user: ", error)
        loading.textContent = "Lấy dữ liệu user thất bại"
    }
}

const getPostByUser = async (userId) => {
    try {
        loading.textContent = "Loading posts ..."
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const posts = await res.json()

        const postsByUser = posts.filter(item => item.userId === userId)

        const p = document.createElement("p")
        p.textContent = `Số bài đăng là: ${postsByUser.length}`

        list.prepend(p)

        postsByUser.forEach(item => {
            const li = document.createElement("li")
            const h3 = document.createElement("h3")
            const p = document.createElement("p")

            h3.textContent = item.title
            p.textContent = item.body

            li.appendChild(h3)
            li.appendChild(p)

            list.appendChild(li)
        })

        loading.remove()
    } catch (error) {
        console.log("Error post: ", error)
        loading.textContent = "Lấy dữ liệu bài post thất bại"
    }
}

const render = (userId) => {
    getUser(userId)
    getPostByUser(userId)
}

render(targetUser)