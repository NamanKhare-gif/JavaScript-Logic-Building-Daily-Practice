const firstColorBtn = document.querySelector("#firstColor");
const secondColorBtn = document.querySelector("#secondColor");
const thirdColorBtn = document.querySelector("#thirdColor");

const colorButtons = [
    firstColorBtn,
    secondColorBtn,
    thirdColorBtn
];

colorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        colorButtons.forEach((btn) => {
            btn.classList.remove("is-active");
        });
        button.classList.add("is-active");
    });

});