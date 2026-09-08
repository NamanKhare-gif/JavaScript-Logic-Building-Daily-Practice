const checkBtn1 = document.querySelector(".Check-btn");
const checkBtn2 = document.querySelector(".check-btn2");
const checkBtn3 = document.querySelector(".check-btn3");
const SuccessDiv = document.querySelector(".Successfull");
const UnsuccessDiv = document.querySelector(".Unsuccessfull");
const number1 = document.querySelector(".number1");
const number2 = document.querySelector(".number2");
const numInp = document.querySelector("#number-input");
const overlay = document.querySelector(".error-overlay");
const enteredValue = document.querySelector(".entered-value");
const errorMessage = document.querySelector(".error-message");
const errorClose = document.querySelector(".error-close");
const errorBtn = document.querySelector(".error-btn");

checkBtn1.addEventListener("click", () => {
  const value = numInp.value.trim();
  if (value === "") {
    alert("Please enter a number.");
    return;
  }
  if (!/^\d+$/.test(value)) {
    showError(value);
    return;
  }
  checkBtn1.textContent = "Checking . . . .";
  console.log(value);
  checking(value);
});


checkBtn2.addEventListener("click", () => {
  location.reload();
});

checkBtn3.addEventListener("click", () => {
  location.reload();
});

function checking(value) {
  number1.textContent = value;
  number2.textContent = value;
  setTimeout(() => {
    const reversed = value.split("").reverse().join("");
    if (value === reversed) {
      console.log("Yes! It is a palindrome.");
      checkBtn1.style.display = "none";
      checkBtn2.style.display = "flex";
      SuccessDiv.style.display = "inline-block";
      UnsuccessDiv.style.display = "none";
      checkBtn3.style.display = "none";
    }
    else {
      console.log("No! It is not a palindrome.");
      checkBtn1.style.display = "none";
      checkBtn2.style.display = "none";
      SuccessDiv.style.display = "none";
      UnsuccessDiv.style.display = "inline-block";
      checkBtn3.style.display = "flex";
    }
  }, 1000);
}

function showError(value) {
  const invalidCharacter = value.match(/[^0-9]/);
  const wrongChar = invalidCharacter[0];
  enteredValue.innerHTML = "";
  [...value].forEach((char) => {
    const span = document.createElement("span");    span.textContent = char;
    if (char === wrongChar) {
      span.classList.add("wrong-character");
    }
    enteredValue.appendChild(span);
  });

  errorMessage.innerHTML = `
        <strong>${wrongChar}</strong> is not a number.
        <br>
        Please enter numbers only.
    `;
  overlay.style.display = "flex";
}

errorClose.addEventListener("click", () => {
  overlay.style.display = "none";
  numInp.focus();
});

errorBtn.addEventListener("click", () => {
  overlay.style.display = "none";
  numInp.value = "";
  numInp.focus();
});