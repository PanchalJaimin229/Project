let menuBtn = document.getElementById("nav_open"),
    navMenu = document.querySelector("nav"),
    navCloseBtn = document.querySelector("#close_nav");


menuBtn.onclick = () => {
    navMenu.classList.add("active")
}


navCloseBtn.onclick = () => {
    navMenu.classList.remove("active")
}

window.onscroll = () => {
    navMenu.classList.remove("active")

    if (window.scrollY > 20) {
        document.querySelector(".header").classList.add("active")
    } else {
        document.querySelector(".header").classList.remove("active")
    }
}

window.onload = () => {
    navMenu.classList.remove("active")

    if (window.scrollY > 20) {
        document.querySelector(".header").classList.add("active")
    } else {
        document.querySelector(".header").classList.remove("active")
    }
}