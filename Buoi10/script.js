// ================== Bai 1 ====================
// const boxs = document.querySelectorAll(".box")
// const selectedLenth = document.querySelector("#selectedLength")
// const selectAll = document.querySelector("#selectAll")
// const unSelectAll = document.querySelector("#unSelectAll")

// let selected = []

// function updateCount(color) {
//     const isCheck = selected.includes(color)

//     if (isCheck) {
//         const newSelected = selected.filter(item => item !== color)
//         selected = newSelected
//     } else {
//         selected.push(color)
//     }

//     selectedLenth.textContent = selected.length
// }

// boxs.forEach(function (item) {
//     item.addEventListener('click', function () {
//         item.classList.toggle(`bg-${item.id}`)
//         updateCount(item.id)
//     })
// })

// selectAll.addEventListener('click', function () {
//     selected = [];
//     boxs.forEach(function (item) {
//         item.className = `box bg-${item.id}`
//         updateCount(item.id)
//     })
// })

// unSelectAll.addEventListener('click', function (item) {
//     selected = []

//     boxs.forEach(function (item) {
//         item.className = `box`
//     })

//     selectedLenth.textContent = selected.length
// })

// ================== Bai 2 ====================
// const form = document.querySelector("#form")
// const input = document.querySelector("#task")

// const btnAll = document.querySelector("#all")
// const btnUndo = document.querySelector("#undo")
// const btnCompl = document.querySelector("#compl")

// const list = document.querySelector("#tasks")

// let taskValue = ''

// function updateListTask(task) {
//     const li = document.createElement("li")
//     const span = document.createElement('span')
//     const btnDel = document.createElement('button')

//     span.textContent = task
//     li.classList.add('task')

//     btnDel.setAttribute('class', "btnDel")
//     btnDel.textContent = "Xóa"

//     li.appendChild(span)
//     li.appendChild(btnDel)

//     li.addEventListener('click', function () {
//         li.classList.add("success")
//     })

//     btnDel.addEventListener('click', function () {
//         li.remove()
//     })

//     list.appendChild(li)
// }

// input.addEventListener('input', function (e) {
//     taskValue = e.target.value
// })

// form.addEventListener('submit', function (e) {
//     e.preventDefault()

//     if (taskValue.trim() === "") return

//     updateListTask(taskValue)

//     input.value = ""
//     input.focus()
// })

// btnAll.addEventListener('click', function () {
//     const tasks = document.querySelectorAll(".task")
//     console.log(tasks)
//     tasks.forEach(function (item) {
//         item.style.display = "flex"
//     })
// })

// btnUndo.addEventListener('click', function () {
//     const tasks = document.querySelectorAll(".task")
//     tasks.forEach(function (item) {
//         const isSuccess = item.classList.contains("success")

//         if (isSuccess) {
//             item.style.display = "none"
//         } else {
//             item.style.display = "flex"
//         }
//     })
// })

// btnCompl.addEventListener('click', function () {
//     const tasks = document.querySelectorAll(".task")
//     tasks.forEach(function (item) {
//         const isSuccess = item.classList.contains("success")

//         if (!isSuccess) {
//             item.style.display = "none"
//         } else {
//             item.style.display = "flex"
//         }
//     })
// })

/**
 {
    task: "",
    status: "succes" | "normal"
 }
 */

// ================== Bai 3 ====================
// const cities = [
//     "Hà Nội", "Hồ Chí Minh", "Đà Nẵng", "Hải Phòng", "Cần Thơ",
//     "Huế", "Nha Trang", "Vũng Tàu", "Đà Lạt", "Biên Hòa",
//     "Bình Dương", "Long An", "Quảng Ninh", "Nam Định", "Thái Bình"
// ]

// const form = document.getElementById("form")
// const input = document.getElementById("city")
// const count = document.getElementById("count")
// const list = document.getElementById("list")

// input.addEventListener('input', (e) => {
//     const value = e.target.value.trim()

//     list.textContent = ""
//     count.textContent = 0

//     if (!value) return

//     for (let city of cities) {
//         const checkChar = city.search(`${value}`)

//         if (checkChar == -1) continue

//         const li = document.createElement('li')
//         let character = city.replace(value, `<mark>${value}</mark>`)

//         li.innerHTML = character

//         list.appendChild(li)
//     }

//     const li = document.getElementsByTagName('li')

//     count.textContent = li.length
// })

// ================== Bai 4 ====================
const form = document.getElementById("form")

const emailError = document.getElementById("emailError")
const passwordError = document.getElementById("passwordError")
const cfPasError = document.getElementById("cfPasError")

let formdata = {
    email: "",
    password: "",
    confirmPassword: ""
}

form.addEventListener('input', (e) => {
    formdata = {
        ...formdata,
        [e.target.name]: e.target.value
    }

    emailError.textContent = ""
    passwordError.textContent = ""
    cfPasError.textContent = ""

    // validate
    if (formdata.password.length < 8) passwordError.textContent = "Mật khẩu phải có ít nhất 8 kí tự"
    if (formdata.password !== formdata.confirmPassword) cfPasError.textContent = "Không khớp"
})

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const isError = emailError.textContent === "" && passwordError.textContent === "" && cfPasError.textContent === ""
    const isEmpty = formdata.email && formdata.password && formdata.confirmPassword

    if (isEmpty && isError) console.log(formdata)
})