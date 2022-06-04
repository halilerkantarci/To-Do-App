const input = document.querySelector(".inpt");
const button = document.querySelector(".btn1");
const comp = document.querySelector(".btnstyle");

const addSection = document.querySelector(".todos");

const ul = document.createElement("ul");

addSection.appendChild(ul);

// const ok = document.querySelector(".ok");
// const complete = document.createElement("button");
// ok.appendChild(complete);
button.addEventListener("click", (e) => {
  const z =
    e.target.parentElement.nextElementSibling.nextElementSibling
      .firstElementChild;
  console.log(z);
  const element = e.target;
  if (!input.value) {
    alert("Lütfen Bir Madde Ekleyiniz");
  } else {
    ul.innerHTML += `<li><button>+</button>${input.value}</li>`;

    stylebutton();
    inputControl();
    styleIl();
  }
});

function inputControl() {
  input.value = "";
}
function styleIl() {
  document.querySelectorAll("ul li").forEach((a) => {
    a.setAttribute("class", "ilstyle");
  });
}
function stylebutton() {
  document.querySelectorAll("ul li button").forEach((a) => {
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
