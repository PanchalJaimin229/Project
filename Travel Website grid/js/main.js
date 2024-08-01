// navbar 

const navbar = document.querySelector(".navbar")

document.querySelector("#nav_toggle").onclick = () => {
    navbar.classList.toggle("active");
    userEl.classList.remove("active");
    serchForm.classList.remove("active");
}


// user form 

const userEl = document.querySelector(".login_form")

document.querySelector("#user").onclick = () => {
    userEl.classList.toggle("active");
    navbar.classList.remove("active");
    serchForm.classList.remove("active");
}

//serch toggle 

const serchForm = document.querySelector(".serch_form")

document.querySelector("#serchBtn").onclick = () => {
    serchForm.classList.toggle("active");
    navbar.classList.remove("active");
    userEl.classList.remove("active");
}


// scroll hide all header menu

window.onscroll = () => {
    navbar.classList.remove("active");
    userEl.classList.remove("active");
    serchForm.classList.remove("active");
}

const themeBtn = document.querySelector("#theme")

themeBtn.onclick = () => {

    if (themeBtn.classList.contains("fa-moon")) {
        themeBtn.classList.replace("fa-moon", "fa-sun");
        document.body.classList.add("active")
    } else {
        themeBtn.classList.replace("fa-sun", "fa-moon");
        document.body.classList.remove("active")
    }
}



// swiper js 

var swiper = new Swiper(".slider_container", {
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});



/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

// console.log(sections);

function scrollActive() {
    const scrollY = window.pageYOffset

    // console.log(scrollY);
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;

        // console.log(sectionHeight);
        const sectionTop = current.offsetTop - 50;

        // console.log(sectionTop);
        const sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.navbar a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.navbar a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)
