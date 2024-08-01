let nav_toggle = document.getElementById("nav_toggle");
let navbar = document.querySelector(".navbar")

nav_toggle.onclick = () => {
    nav_toggle.classList.toggle("fa-times")
    navbar.classList.toggle("active")
}

window.onscroll = () => {
    nav_toggle.classList.remove("fa-times")
    navbar.classList.remove("active")

    if (window.scrollY > 0) {
        document.querySelector(".header").classList.add("active")
    } else {
        document.querySelector(".header").classList.remove("active")
    }
}

//========= filter section with id ==============//

let sections = document.querySelectorAll("section[id]")
console.log(sections);

//=============== nav active class toggle with scroll =================//

function scrollActive() {
    const scrollY = window.scrollY;
    // console.log(scrollY);
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        // console.log(sectionHeight);
        const sectionTop = current.offsetTop-60;
        // console.log(sectionTop);

        const sectionId = current.getAttribute("id");
        // console.log(sectionId);

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(`.navbar a[href*=${sectionId}]`).classList.add("active")
        }else{
            document.querySelector(`.navbar a[href*=${sectionId}]`).classList.remove("active")
        }
    })
}





window.addEventListener("scroll", scrollActive)