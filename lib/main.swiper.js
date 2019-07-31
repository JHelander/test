// Swiper options for landing page
var swiper = new Swiper('.swiper-container', {
	direction: 'vertical',
    initialSlide: 0,
    spaceBetween: 0,
	speed: 1500,
    slidesPerView: 1,
    mousewheel: true,
    threshold: 25,
	longSwipes: true,
	longSwipesRatio: 0.1,
    parallax: true,
    freeMode: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: false,
    },
});
