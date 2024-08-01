$(document).ready(function () {

    $(window).on("load scroll", function () {

        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav_toggle');


        if ($(window).scrollTop() > 50) {
            $('.header').css({ 'background': '#6C5CE7', 'box-shadow': '0 .2rem .5rem rgba(0,0,0,.4)' });
        } else {
            $('.header').css({ 'background': 'none', 'box-shadow': 'none' });
        }
    })

    $(".accordian_header").click(function(){
        $(".accordian .accordian_body").slideUp(1000);
        $(this).next(".accordian_body").slideDown("slow");
        $(".accordian .accordian_header span").text('+');
        $(this).children("span").text("-");
    })



    $(".fa-bars").click(function(){
        $(this).toggleClass("fa-times");
        $(".navbar").toggleClass("nav_toggle");
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
        const sectionTop = current.offsetTop - 90;

        // console.log(sectionTop);
        const sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.navbar ul li a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.navbar ul li a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)
