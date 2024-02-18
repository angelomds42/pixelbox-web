const menuicon = document.querySelector(".navbar_button");

const menumobile = document.querySelector(".navbar_menu");

menuicon.addEventListener("click", () => {
    menuicon.classList.toggle("active");
    menumobile.classList.toggle("active");
});

var tabs_indicator = document.querySelector('.teste');

var item = document.querySelectorAll('.navbar_menu_text');

function indicator(e){
    tabs_indicator.style.left = e.offsetLeft+"px";
    tabs_indicator.style.width = e.offsetWidth+"px";
}

item.forEach(link => {
    link.addEventListener("click", (e)=>{
        indicator(e.target);
    })
})

