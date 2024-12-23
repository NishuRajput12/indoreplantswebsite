

const menuIcon = document.getElementById('menuIcon');
const navMenu = document.getElementById('nav-menu');
const navLink = document.querySelectorAll(".nav-link");
menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('left-0');
    navMenu.classList.toggle('left-[-100%]');
    menuIcon.classList.toggle('fa-x');

});
navLink.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.toggle("left-[0]")
        menuIcon.classList.toggle('fa-x');

    });


});
//------------------------ swiper-----------------------
const swiper = new Swiper('.swiper', {
    // Optional parameters

    speed: 400,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    grabCursor: true,
    breakpoints: {
        640: {
            slidesPerview: 1
        }, 
        768: {
            slidesPerview: 2
        },
        1024: {
            slidesPerview: 3
        },

    }



});

//--------------------- scroll-up---------------
const scrollUp=()=>{
    const scrollUpBtn=document.getElementById("scroll-up")
    if(this.scrollY>250){
        scrollUpBtn.classList.remove("-bottom-1/2")
        scrollUpBtn.classList.add("bottom-4")
    }
    else{
        scrollUpBtn.classList.remove("-bottom-1/2")
        scrollUpBtn.classList.add("bottom-4")
    }
}
window.addEventListener("scroll",scrollUp)

//--------------------- change header background---------------
const scrollHeader=()=>{
    const header=document.getElementById("navbar")
    if(this.scrollY >=50){
      
        header.classList.add("border-b-yellow-500")
    }
    else{
        
       header.classList.add("border-b","border-yellow-500")
    }
}
window.addEventListener("scroll",scrollHeader)

//--------------------- scrol reveal animation ---------------
const sr=ScrollReveal({
    origin:"top",
    distance:"60px",
    duration:2500,
    delay:300,
    reset:true 
})//about-leaf about-item-1-img about-content about-item-2-img
sr.reveal(`.home-data,.about-top, .popular-top ,.review-top, .review-swiper,
    .footer-icon , .footer-content,.copy-footer`)
sr.reveal(`.home-img`,{delay:500,scale:0.5})

sr.reveal(`.service-data,.popular_card` ,{interval:100})

sr.reveal(`.about-leaf `,{delay:1000,origin:"right"})
sr.reveal(`.about-item-1 , .about-item-2-img,.about-content `,{delay:1000,origin:"right"})
sr.reveal(`.about-item-2 , .about-item-1-img,.about-content2 `,{delay:1000,origin:"left"})

sr.reveal(`.review-leaf ,.footer-floral `,{delay:1000,origin:"left"})




