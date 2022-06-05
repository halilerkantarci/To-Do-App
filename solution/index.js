const input = document.querySelector(".inpt");
const button = document.querySelector(".btn1");
const comp = document.querySelector(".btnstyle");

const addSection = document.querySelector(".todos");

// const ul = document.createElement("ul");

// addSection.appendChild(ul);

// const ok = document.querySelector(".ok");
// const complete = document.createElement("button");
// ok.appendChild(complete);
// button.addEventListener("click", (e) => {

//     ul.innerHTML += `<li><button>+</button>${input.value}</li>`;

//     stylebutton();
//     inputControl();
//     styleIl();
//   }
// });

button.addEventListener("click", function () {
  if (!input.value) {
    alert("Lütfen Bir Madde Ekleyiniz");
  } else {
    let textLine = document.createElement("p");
    let btn2 = document.createElement("button");
    btn2.innerHTML = "+";
    addSection.appendChild(btn2);
    addSection.appendChild(textLine);
    textLine.classList.add("ilstyle");
    // btn2.classList.add("btnstyle");
    textLine.innerHTML = input.value;
    stylebutton();
    inputControl();
    textLine.addEventListener("click", function () {
      textLine.style.textDecoration = "line-through";
    });
    textLine.addEventListener("dblclick", function () {
      addSection.removeChild(textLine);
      addSection.removeChild(btn2);
    });
  }
});

// comp.addEventListener("click", (e) => {
//   const z = e.target;
//   if (z.parentElement.classList.contains("ilstyle")) {
//     z.parentElement.style.textDecoration = "line-through";
//     // struck(z.parentElement);
//   }
// });

// function struck(ele) {
//   ele.style = "text-decoration:line-through; list-style-type:none";
// }

function inputControl() {
  input.value = "";
}
// function styleIl() {
//   document.querySelectorAll("ul li").forEach((a) => {
//     a.setAttribute("class", "ilstyle");
//   });
// }
function stylebutton() {
  document.querySelectorAll(".todos button").forEach((a) => {
    a.setAttribute("class", "btnstyle");
  });
}
// function stylebutton() {
//   document.querySelectorAll(".ok button").forEach((a) => {
//     a.setAttribute("class", "btnstyle");
//   });
// }
input.addEventListener("keydown", (e) => {
  if (e.keyCode == 13) {
    button.click();
  }
});

input.focus();
