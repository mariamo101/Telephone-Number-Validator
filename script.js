const input = document.querySelector("#user-input");
const result = document.querySelector("#results-div");
const check = document.querySelector("#check-btn");
const clear = document.querySelector("#clear-btn");
console.log(input);
console.log(result);
console.log(check);
console.log(clear);
const reg = /^(1\s?)?(\([0-9]{3}\)|[0-9]{3})[\s\-]?[0-9]{3}[\s\-]?[0-9]{4}$/;

const checkNumber = () => {
  const resultText = document.createElement("p");
  if (input.value === "") {
    alert("Please provide a phone number");
    return;
  }

  if (reg.test(input.value)) {
    resultText.textContent = `Valid US number: ${input.value}`;
    resultText.style.marginBottom = "10px";
    resultText.style.color = "orange";
    resultText.style.color = "orange";
    result.appendChild(resultText);
  } else {
    resultText.textContent = `Invalid US number: ${input.value}`;
    resultText.style.color = "red";
    resultText.style.marginBottom = "10px";
    result.appendChild(resultText);
  }
};

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkNumber();
    input.value = "";
  }
});

check.addEventListener("click", () => {
  checkNumber();
  input.value = "";
});

clear.addEventListener("click", () => {
  result.textContent = "";
});
