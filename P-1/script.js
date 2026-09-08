const checkBtn1 = document.querySelector(".Check-btn");
const checkBtn2 = document.querySelector(".check-btn2");
const SuccessDiv = document.querySelector(".Successfull");
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

function checking(value) {

    setTimeout(() => {

        const reversed = value.split("").reverse().join("");

        if (value === reversed) {
            console.log("Yes! It is a palindrome.");
            checkBtn1.style.display = "none";
            checkBtn2.style.display = "flex";
            SuccessDiv.style.display = "inline-block";
        } else {
            console.log("No! It is not a palindrome.");
        }

    }, 1000);

}