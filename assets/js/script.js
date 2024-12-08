// ini untuk bagian hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("hamburger-active");
	navMenu.classList.toggle("hidden");
});

//navbar fixed
// window.onscroll = function () {
// 	const header = document.querySelector("header");
// 	const fixedNav = header.offsetTop;

// 	if (window.pageYOffset > fixedNav) {
// 		header.classList.add("navbar-fixed");
// 	} else {
// 		header.classList.remove("navbar-fixed");
// 	}
// };

$(document).ready(function () {
	$(".slider").slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		prevArrow: $(".prev-slide"),
		nextArrow: $(".next-slide"),
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});

	$(".slider-atas").slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: false,
		prevArrow: $(".prev-slide-atas"),
		nextArrow: $(".next-slide-atas"),
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});

	$(".slider-mentor-praktisi").slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		prevArrow: $(".prev-slide-mentor-praktisi"),
		nextArrow: $(".next-slide-mentor-praktisi"),
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});

	document.querySelectorAll(".toggle-btn").forEach(function (btn) {
		btn.addEventListener("click", function () {
			const content = this.parentElement.nextElementSibling;
			content.classList.toggle("hidden");
			this.classList.toggle("collapsed");
			const faqContainer = this.parentElement;
            faqContainer.classList.toggle("active");

            if (content.classList.contains("hidden")) {
                faqContainer.style.backgroundColor = "initial";
            } else {
                faqContainer.style.backgroundColor = "#D7FFFA";
            }
		});
	});

	$(document).ready(function () {
		$(".slider-mentor").slick({
			dots: false,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			prevArrow: $(".prev-slide-mentor"),
			nextArrow: $(".next-slide-mentor"),
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						infinite: true,
						dots: false,
					},
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
			],
		});

		$(".slider-alumni").slick({
			dots: false,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			prevArrow: $(".prev-slide-alumni"),
			nextArrow: $(".next-slide-alumni"),
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						infinite: true,
						dots: false,
					},
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
			],
		});

		$(".slider-mentor-mobile").slick({
			dots: false,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			prevArrow: $(".prev-slide-mentor-mobile"),
			nextArrow: $(".next-slide-mentor-mobile"),
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true,
						dots: false,
					},
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
			],
		});
	});
});
