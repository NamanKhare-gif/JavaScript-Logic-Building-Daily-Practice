const checkBtn1 = document.querySelector(".Check-btn");
const numInp = document.querySelector("#number-input");

checkBtn1.addEventListener("click",()=>{
    if(numInp.value.trim() == ""){
        console.log(alert("please enter the Number : "));
    }
    else{
        checkBtn1.textContent = "Checking . . . .";
        // checking();
    }
    console.log(numInp.value);
});