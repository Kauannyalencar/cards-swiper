const swiper = new Swiper(".swiper",{
    effect: "cards",
    grabcursor: true,
    initialSlide: 3,
    speed:500,
    rotate: true,
    autoplay:{
        delay:1000,
    },
    mousewheel: {
        invert: false,
    }
})