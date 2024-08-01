const header = document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle ("sticky",this.window.scrollY > 0)
});

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}

menu = document.querySelector(".bx-menu")
menubar = document.querySelector(".navmenu")
cls = document.querySelector(".cls")

menu.addEventListener("click",function(){
    menubar.classList.add("active")
})
cls.addEventListener("click",function(){
    menubar.classList.remove("active")
})
// side bar






