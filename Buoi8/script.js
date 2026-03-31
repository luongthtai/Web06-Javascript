// const h1Id = document.getElementById("title")
// const h1 = document.getElementsByClassName("text")
// const h1Tag = document.getElementsByTagName("h1")

// const contact = document.querySelector("div a:nth-of-type(4)")

// contact.innerHTML = "<b>Contact us</b>"

// // contact.setAttribute('id', 'contact')
// // contact.setAttribute('class', "text-green")
// // contact.removeAttribute("id")

// // sửa 1 thuộc tính trong element
// contact.id = "contactUs"
// contact.style.borderRadius = "8px"

// const title = document.getElementById("title");
// title.innerText = "Hello World"

// const li = document.querySelectorAll("#list li")[0];
// const btn = document.querySelector("#btn")

// li.remove()

// li.classList.add("text-red")
// li.className = "text-red font-bold"
// li.classList.remove("text-green")
// const status = li.classList.contains("font-bold") // boolean

// btn.addEventListener("click", function () {
//     // li.classList.toggle("turnOnLight")
// })

// item 1
// item 2
// item 3

// let items = document.getElementsByTagName("li");
// for (let i = 0; i < li.length; i++) {
//     console.log(li[i].textContent);
// }

// for (let i = 0; i < items.length; i++) {
//     if (i === 0) {
//         items[i].style.color = "green";
//     }
//     else if (i % 2 !== 0) {
//         items[i].style.color = "red";
//     } else {
//         items[i].style.color = "green";
//     }
// }
// ================================================ //
// const p = document.createElement("p")

// p.innerText = "Hello mọi người"

// p.classList.add("text-red")

// // chưa được hiển thị lên giao diện
// document.body.appendChild(p)

// const btn = document.querySelector("#btn")

// btn.onclick = function () {  // cách cũ
//     //
//     console.log("Click")
// }

// btn.addEventListener("click", function () {  // cách mới
//     //
//     console.log("Click 123456")
// })

// ================================================= //
//  Bài tập:

/**
    Yêu cầu:
        <h2>Danh sách môn học</h2>

        <ul>
            <li>HTML</li>
            <li>Css</li>
            <li>Javascript</li>
            <li>Reactjs</li>
        </ul>

    style:
        - Màu của tiêu đề: xanh lá
        - Chữ của tiêu đề sẽ có font-size: 20px
        - Tiêu đề căn giữa màn hình

        - Danh sách:
            + Bỏ dấu chấm ở đầu dòng
            + padding bằng 0

        - Style tưng Item:
            + padding: 10px
            + border bottom: 1px solid gray

        Tô màu xem kẽ giữa những item
            Item chẵn: màu đỏ
            Item lẻ: màu xanh
 */
// const h2 = document.createElement("h2");
// h2.textContent = "Danh sách môn học";
// const ul = document.createElement("ul");
// const subjects = ["HTML", "CSS", "Javascript", "Reactjs"];
// subjects.forEach(subject => {
//     const li = document.createElement("li");
//     li.textContent = subject;
//     ul.appendChild(li);
// });
// document.body.appendChild(h2);
// document.body.appendChild(ul);
// h2.style.color = "green";
// document.body.style.fontSize = "20px";
// document.body.style.textAlign = "center";

// ul.style.listStyle = "none";
// ul.style.padding = "0";

// document.body.style.textAlign = "center"
// document.body.style.padding = "0"
// const h2 = document.createElement("h2");
// h2.innerHTML = "Danh sách môn học";
// h2.style.color = "green";
// h2.style.fontSize = "20px"
// document.body.appendChild(h2);
// // ==============================
// const ul = document.createElement("ul");
// const li1 = document.createElement("li");
// const li2 = document.createElement("li");
// const li3 = document.createElement("li");
// const li4 = document.createElement("li");
// li1.innerText = "HTML"
// li2.innerText = "Css"
// li3.innerText = "Javascript"
// li4.innerText = "Reactjs"

// ul.style.listStyle = "none"
// // ==============================
// ul.appendChild(li1);
// ul.appendChild(li2);
// ul.appendChild(li3);
// ul.appendChild(li4);
// document.body.appendChild(ul);


// const h2 = document.createElement("h2");
// h2.textContent = "Danh sách môn học";
// const ul = document.createElement("ul");
// const subjects = ["HTML", "CSS", "Javascript", "Reactjs"];
// subjects.forEach((subject, index) => {
//     const li = document.createElement("li");
//     li.textContent = subject;
//     li.style.padding = "10px";
//     li.style.borderBottom = "1px solid gray";
//     li.style.color = ((index + 1) % 2 === 0) ? "red" : "green";
//     ul.appendChild(li);
// });
// document.body.appendChild(h2);
// document.body.appendChild(ul);
// h2.style.color = "green";
// document.body.style.fontSize = "20px";
// document.body.style.textAlign = "center";
// ul.style.listStyle = "none";
// ul.style.padding = "0";

// document.body.style.textAlign = "center"
// document.body.style.padding = "0"
// const h2 = document.createElement("h2");
// h2.innerHTML = "Danh sách môn học";
// h2.style.color = "green";
// h2.style.fontSize = "20px"
// document.body.appendChild(h2);
// const ul = document.createElement("ul");
// const li1 = document.createElement("li");
// const li2 = document.createElement("li");
// const li3 = document.createElement("li");
// const li4 = document.createElement("li");
// li1.innerText = "HTML"
// li2.innerText = "Css"
// li3.innerText = "Javascript"
// li4.innerText = "Reactjs"
// ul.style.listStyle = "none";
// ul.style.padding = "0"
// li1.style.padding = "10px"
// li2.style.padding = "10px"
// li3.style.padding = "10px"
// li4.style.padding = "10px"

// li1.style.borderBottom = "1px solid gray"
// li2.style.borderBottom = "1px solid gray"
// li3.style.borderBottom = "1px solid gray"
// li4.style.borderBottom = "1px solid gray"
// li2.style.color = "red"
// li4.style.color = "red"
// li1.style.color = "green"
// li3.style.color = "green"
// ul.appendChild(li1);
// ul.appendChild(li2);
// ul.appendChild(li3);
// ul.appendChild(li4);
// document.body.appendChild(ul);


// const button = document.getElementById("btn");

// const span = document.querySelector("span")

// let count = 0;

// button.addEventListener("click", function () {
//     count++;
//     span.innerText = count;
// })

// const span = document.querySelector("span");
// const btn = document.querySelector("#btn");
// btn.addEventListener("click", function () {
//     span.textContent++;
// });

const email = document.getElementById("email")
const btn = document.getElementById("btn")

let emailValue = ''

email.addEventListener('input', function (event) {
    emailValue = event.target.value
})

btn.addEventListener('click', function () {
    console.log(emailValue)
})