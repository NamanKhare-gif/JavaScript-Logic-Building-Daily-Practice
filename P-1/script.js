const checkBtn1 = document.querySelector(".Check-btn");
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
  checkBtn1.textContent = "Checking . . . .";
  console.log(value);
  // checking();
});