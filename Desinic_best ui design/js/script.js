const barEl = document.querySelector(".bar");
const overlayEl = document.querySelector(".overlay")
const navbarlistEl = document.querySelector(".navbar_list")
const colseBtn = document.querySelector("#close_btn")
const navLink = document.querySelectorAll(".navbar_list a")
const headerEl = document.querySelector(".header")
const upArrowEl = document.querySelector(".upArrow")

console.log(navLink)
barEl.addEventListener("click", () => {
    overlayEl.classList.add("active")
    navbarlistEl.classList.add("active")
})

overlayEl.addEventListener("click", () => {
    if (overlayEl.classList.contains("active")) {
        overlayEl.classList.remove("active");
        navbarlistEl.classList.remove("active")
    }
})

colseBtn.addEventListener("click", () => {
    if (overlayEl.classList.contains("active")) {
        overlayEl.classList.remove("active");
        navbarlistEl.classList.remove("active")
    }
})

navLink.forEach(element => {
    element.addEventListener("click", () => {
        if (overlayEl.classList.contains("active")) {
            overlayEl.classList.remove("active");
            navbarlistEl.classList.remove("active")
        }
    })
});


window.onscroll = function(){
    if(window.pageYOffset > 500){
        headerEl.classList.add("active")
        upArrowEl.classList.add("active")
    }
    else{
        headerEl.classList.remove("active")
        upArrowEl.classList.remove("active")
    }

}

