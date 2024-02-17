const menuicon = document.querySelector(".navbar_button");

const menumobile = document.querySelector(".navbar_menu");

menuicon.addEventListener("click", () => {
    menuicon.classList.toggle("active");
    menumobile.classList.toggle("active");
});
