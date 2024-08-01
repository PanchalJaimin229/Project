// navbar 

const navbar = document.querySelector(".navbar")

document.querySelector("#nav_toggle").onclick = () =>{
    navbar.classList.toggle("active");
    userEl.classList.remove("active");
    serchForm.classList.remove("active");
}


// user form 

const userEl = document.querySelector(".login_form")

document.querySelector("#user").onclick = () =>{
    userEl.classList.toggle("active");
    navbar.classList.remove("active");
    serchForm.classList.remove("active");
}

//serch toggle 

const serchForm = document.querySelector(".serch_form")

document.querySelector("#serchBtn").onclick = () =>{
    serchForm.classList.toggle("active");
    navbar.classList.remove("active");
    userEl.classList.remove("active");
}


// scroll hide all header menu

window.onscroll = () =>{
    navbar.classList.remove("active");
    userEl.classList.remove("active");
    serchForm.classList.remove("active");
}

const themeBtn = document.querySelector("#theme")

themeBtn.onclick = () =>{

    if(themeBtn.classList.contains("fa-moon")){
        themeBtn.classList.replace("fa-moon", "fa-sun");
        document.body.classList.add("active")
    }else{
        themeBtn.classList.replace( "fa-sun","fa-moon");
        document.body.classList.remove("active")
    }
}



// swiper js 

var swiper = new Swiper(".slider_container", {
    loop:true,
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });