const input = document.querySelector(".inpt");
const button = document.querySelector(".btn1");

const addSection = document.querySelector(".todos");

button.addEventListener("click", function () {
  if (!input.value) {
    alert("Please add a note");
  } else {
    let p = document.createElement("p");
    let btn2 = document.createElement("button");
    let btn3 = document.createElement("button");

    btn2.innerHTML = "COMPLETE";
    btn3.innerHTML = "DELETE";
    addSection.appendChild(p);
    addSection.appendChild(btn2);
    addSection.appendChild(btn3);

    p.classList.add("ilstyle");
    btn3.classList.add("btnstyle2");
    btn2.classList.add("btnstyle");
    p.innerHTML = input.value;
    input.value = "";
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
