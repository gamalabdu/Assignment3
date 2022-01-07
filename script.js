
// 1#
let containerWithout = document.getElementById("container")

// 2#
let containerWith = document.querySelector("#container")

// 3#
let second = document.querySelectorAll(".second")

// 4#
let third = document.querySelectorAll(".third")[1] //.parentElement

// 5#

let hello = document.createElement("h1")
hello.textContent = "Hello!"
containerWith.appendChild(hello)

// 6#

let footer = document.querySelector(".footer")
footer.classList.add("main")

// 7#

footer.classList.remove("main")

// 8#

let newLi = document.createElement("li")

// 9#

newLi.innerText = "four"

// 10#

console.log(containerWith.childNodes[1].appendChild(newLi))

// 12#

let ol = containerWith.children[1]

for(let i = 0; i < ol.children.length; i++) {
    console.log(ol.children[i].style.backgroundColor = "red")
}
 
// 13#

document.body.removeChild(footer)
















