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

const li = document.querySelectorAll("#list li");

// item 1
// item 2
// item 3

let items = document.getElementsByTagName("li");
for (let i = 0; i < li.length; i++) {
    console.log(li[i].textContent);
}

for (let i = 0; i < items.length; i++) {
    if (i === 0) {
        items[i].style.color = "green";
    }
    else if (i % 2 !== 0) {
        items[i].style.color = "red";
    } else {
        items[i].style.color = "green";
    }
}   