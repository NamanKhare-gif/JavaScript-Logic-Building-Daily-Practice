const checkBtn1 = document.querySelector(".Check-btn");
const checkBtn2 = document.querySelector(".check-btn2");
const checkBtn3 = document.querySelector(".check-btn3");
const SuccessDiv = document.querySelector(".Successfull");
const UnsuccessDiv = document.querySelector(".Unsuccessfull");
const number1 = document.querySelector(".number1");
const number2 = document.querySelector(".number2");
const numInp = document.querySelector("#number-input");

checkBtn1.addEventListener("click", () => {
  const value = numInp.value.trim();
  if (value === "") {
    alert("Please enter a number.");
    return;
  }
  if (!/^\d+$/.test(value)) {
    alert("Please enter numbers only.");
    return;
  }
  else{
    checkBtn1.textContent = "Checking . . . .";
    console.log(value);
    checking(value);
  }
  
});

checkBtn2.addEventListener("click", () => {
  const value = numInp.value.trim();
  if (value === "") {
    alert("Please enter a number.");
    return;
  }
  if (!/^\d+$/.test(value)) {
    alert("Please enter numbers only.");
    return;
  }
  else{
    checkBtn1.textContent = "Checking . . . .";
    console.log(value);
    checking(value);
  }
  
});

checkBtn3.addEventListener("click", () => {
  const value = numInp.value.trim();
  if (value === "") {
    alert("Please enter a number.");
    return;
  }
  if (!/^\d+$/.test(value)) {
    alert("Please enter numbers only.");
    return;
  }
  else{
    checkBtn1.textContent = "Checking . . . .";
    console.log(value);
    checking(value);
  }
  
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
            checkBtn3.style.display = "none";
            UnsuccessDiv.style.display = "none"
        } else {
            console.log("No! It is not a palindrome.");
            SuccessDiv.style.display = "none";
            checkBtn1.style.display = "none";
            checkBtn2.style.display = "none";
            checkBtn3.style.display = "flex";
            UnsuccessDiv.style.display = "inline-block"
        }

    }, 1000);

}