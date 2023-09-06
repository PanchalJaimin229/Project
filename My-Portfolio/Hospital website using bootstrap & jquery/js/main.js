$(document).ready(function () {

    $(".fa-bars").click(function () {
        $(this).toggleClass("fa-times");
        $(".nav_menu").toggleClass("active")
    })

    $(window).on("load scroll", function () {
        $(".fa-bars").removeClass("fa-times");
        $(".nav_menu").removeClass("active")

        if ($(window).scrollTop() > 30) {
            $(".header").addClass("header_active")
        } else {
            $(".header").removeClass("header_active")
        }
    })

    $('.facility').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
        }
    })

})


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

console.log(sections);

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
            document.querySelector('.nav_menu ul li a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.nav_menu ul li a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)
