const mainMenu = document.querySelector(".mainMenu");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");
const blast = document.querySelector(".blast");
const heroContent = document.querySelector(".hero-content");
const nav = document.querySelector("nav");
const menuLinks = document.querySelector("menuLinks");
const scrolled = document.querySelector(".scrolled");

openMenu.addEventListener("click", () => {
	mainMenu.style.display = "flex";
	mainMenu.style.top = "0";
	heroContent.style.display = "none";
});
closeMenu.addEventListener("click", () => {
	mainMenu.style.top = "-100%";
	heroContent.style.display = "flex";
	gsap.from(".hero-content", { opacity: 0 });
	gsap.to(".hero-content", { duration: 1, opacity: 1 });
	gsap.from(".blast", { x: 400, opacity: 0 });
	gsap.to(".blast", { x: 0, duration: 2, opacity: 1 });
	gsap.from(".hero-content h1", { duration: 2, ease: "none", x: -500 });
	gsap.from(".hero-content p", { duration: 2, ease: "none", y: -500 });
	gsap.from(".hero-content button", { x: 0, duration: 2, opacity: 0 });
	gsap.to(".hero-content button", { x: 0, duration: 2, opacity: 1 });
});

// $("h1").blast({
// 	delimiter: "character",
// 	customClass: "alpha",
// });

gsap.registerPlugin(ScrollTrigger);

gsap.from(".blast", { x: 400, opacity: 0 });
gsap.to(".blast", { x: 0, duration: 2, opacity: 1 });
gsap.from(".hero-content h1", { duration: 2, ease: "none", x: -200 });
gsap.from(".hero-content p", { duration: 2, ease: "none", y: -200 });
gsap.from(".hero-content button", { x: 0, duration: 2, opacity: 0 });
gsap.to(".hero-content button", { x: 0, duration: 2, opacity: 1 });

gsap.to("nav", {
	scrollTrigger: {
		trigger: ".about-section",
		start: 800,
		scrub: 2,
		toggleClass: {
			targets: "nav",
			className: "scrolled",
		},
	},
});
gsap.to(".main-menu", {
	scrollTrigger: {
		trigger: ".about-section",
		start: 800,
		scrub: 2,
		toggleClass: {
			targets: "ul",
			className: "main-menu-scrolled",
		},
	},
});
gsap.to("menuLinks", {
	scrollTrigger: {
		trigger: ".about-section",
		start: 800,
		scrub: 2,
		toggleClass: {
			targets: ".menuLinks",
			className: "menuLink",
		},
	},
});
gsap.to(".logo", {
	scrollTrigger: {
		trigger: ".about-section",
		start: 800,
		scrub: 2,
		toggleClass: {
			targets: ".logo",
			className: "logos",
		},
	},
});

gsap.from(".about-section img", {
	x: -100,
	duration: 2,
	scrollTrigger: {
		trigger: ".about-section",
		start: "top 90%",
		end: "bottom 30%",
	},
});


gsap.from(".about-section div", {
	x: 100,
	duration: 2,
	scrollTrigger: {
		trigger: ".about-section",
		start: "top 90%",
		end: "bottom 30%",
	},
});
gsap.to(".about-section div", {
	x: 0,
	duration: 2,
	scrollTrigger: {
		trigger: ".about-section",
		start: "top 90%",
		end: "bottom 10%",

		markers: false,
	},
});

// gsap.from('.about-section img', {x: -400, duration: 2, opacity: 0 });
// gsap.to('.about-section img', {x: 0, duration: 2, opacity: 1});
// gsap.from('.about-section div', {x: 400, duration: 2, opacity: 0, scrub: true});
// gsap.to('.about-section div', {x: 0, duration: 2, opacity: 1, scrub: true});
