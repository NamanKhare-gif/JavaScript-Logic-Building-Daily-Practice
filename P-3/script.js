const firstColorBtn = document.querySelector("#firstColor");
const secondColorBtn = document.querySelector("#secondColor");
const thirdColorBtn = document.querySelector("#thirdColor");
const mainImg = document.querySelector(".Main-img");
const galleryThumbs = document.querySelectorAll(".gallery__thumb");

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

galleryThumbs.forEach((thumb) => {

    thumb.addEventListener("click", () => {

        // Remove is-active from all thumbnail buttons
        galleryThumbs.forEach((item) => {
            item.classList.remove("is-active");
        });

        // Add is-active to the clicked thumbnail
        thumb.classList.add("is-active");

        // Find the image inside the clicked button
        const selectedImg = thumb.querySelector("img");

        // Change the main image
        if (selectedImg) {
            mainImg.src = selectedImg.src;
        }

    });

});