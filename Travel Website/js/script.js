const headerEl = document.querySelector(".header"),
    dayNight = document.querySelector("#day_night"),
    dayNightText = document.querySelector(".day_night_text")

// ============ navbar show and hide ============//

window.onscroll = function () {
    if (window.pageYOffset > 100) {
        headerEl.classList.add("active")
    } else {
        headerEl.classList.remove("active")
    }
}

// =========== dark and light mode toggle ============//

dayNight.addEventListener("click", () => {
    if (dayNight.classList.contains("fa-moon")) {
        dayNight.classList.replace("fa-moon", "fa-sun")
        dayNightText.innerHTML = `Light Mode`;
    } else {
        dayNight.classList.replace("fa-sun", "fa-moon")
        dayNightText.innerHTML = `Dark Mode`;
    }

    document.body.classList.toggle("dark");
})



/*==================== SWIPER DISCOVER ====================*/
let swiper = new Swiper(".discover_container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 45,
    coverflowEffect: {
        rotate: 0,
    },
})

/*==================== video play or pause ====================*/

const videoFile = document.getElementById("video_file"),
    videoIcon = document.getElementById("videoIcon"),
    videoBtn = document.getElementById("play_pause");

videoBtn.addEventListener("click", () => {
    if (videoFile.paused) {

        // video play 
        videoFile.play();

        // icon change 

        videoIcon.classList.replace("fa-play", "fa-pause")
    } else {
        // video pause 
        videoFile.pause();

        // icon change 
        videoIcon.classList.replace("fa-pause", "fa-play")
    }
})


// nav menu slide 

const barEl = document.querySelector("#bar"),
    navMenuEl = document.querySelector(".nav_menu");


barEl.addEventListener("click", () => {
    navMenuEl.classList.add("open")
})


// close nav menu 

const closeEl = document.getElementById("close");

closeEl.addEventListener("click", () => {
    navMenuEl.classList.remove("open")
})



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
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)



// ============= scroll revel animation ================= //

const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    // reset : true
})

sr.reveal(`.home_data, .home_social_link, .home_info,.discover_container, .experience_content, .experience_overlay, .place_card, .sponsor_card, .footer_data`, {
    origin: 'top',
    interval: 100,
})

sr.reveal(`.about_data, .video_sub_title, .subscribe_text`, {
    origin: "left"
})

sr.reveal(`.about_img_overlay, .video_container, .subscribe_form `, {
    origin: "right"
})



// ============= uparrow show and hide ============= //

const upArrow = document.querySelector(".uparrow");

window.addEventListener("scroll", ()=>{
    if (window.pageYOffset > 500) {
        upArrow.classList.add("active")
    } else {
        upArrow.classList.remove("active")
    }
})
