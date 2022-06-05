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
    let p = document.createElement("p");
    let btn2 = document.createElement("button");
    let btn3 = document.createElement("button");
    let space = document.createElement("br");
    btn2.innerHTML = "COMPLETE";
    btn3.innerHTML = "DELETE";
    addSection.appendChild(btn3);
    addSection.appendChild(btn2);
    addSection.appendChild(p);
    addSection.appendChild(space);
    p.classList.add("ilstyle");
    btn3.classList.add("btnstyle2");
    btn2.classList.add("btnstyle");
    p.innerHTML = input.value;
    input.value = "";
    // stylebutton();
    inputControl();
    btn2.addEventListener("click", function () {
      p.style.textDecoration = "line-through";
    });
    btn3.addEventListener("click", function () {
      addSection.removeChild(p);
      addSection.removeChild(btn2);
      addSection.removeChild(btn3);
    });
  }
});

function inputControl() {
  input.value = "";
}

// function stylebutton() {
//   document.querySelectorAll(".todos button").forEach((a) => {
//     a.setAttribute("class", "btnstyle");
//   });
// }

input.addEventListener("keydown", (e) => {
  if (e.keyCode == 13) {
    button.click();
  }
});

input.focus();
