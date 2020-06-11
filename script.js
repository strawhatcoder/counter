const number = document.querySelector(".number");
const buttons = document.querySelectorAll(".btn");
const subBtn = document.querySelector(".sub");
const resetBtn = document.querySelector(".reset");

for (const button of buttons) {
  button.addEventListener("click", handleButton);
}

function handleButton(e) {
  e.preventDefault();

  let num = parseInt(number.innerHTML);
  const operation = e.target.innerText;

  switch (operation) {
    case "+":
      number.innerHTML = num + 1;
      subBtn.classList.remove("hide");
      resetBtn.classList.remove("hide");
      break;
    case "-":
      if (num == 1) {
        number.innerHTML = 0;
        subBtn.classList.add("hide");
        resetBtn.classList.add("hide");
      } else {
        number.innerHTML = num - 1;
      }
      break;
    case "Reset":
      number.innerHTML = 0;
      subBtn.classList.add("hide");
      resetBtn.classList.add("hide");
      break;
  }
}
