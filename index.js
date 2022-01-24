let header = document.querySelector("header");

window.addEventListener("scroll", function () {
	let header = document.querySelector("header");
	let links = document.querySelectorAll("a");
	let li = document.querySelector("li");
	let logo = document.querySelector(".logo");

	let body = document.querySelector("body");

	let windowPosition = window.scrollY > 1;

	header.classList.toggle("scrolling-active", windowPosition);

	windowPosition === true
		? (header.style.height = "4rem")
		: (header.style.height = "6rem");
	windowPosition === true
		? (header.style.transition = "1s")
		: (header.style.height = "6rem");
	windowPosition === true
		? (logo.style.transition = "0.5s")
		: (header.style.height = "6rem");
	windowPosition === true
		? (header.style.transition = "0.5s")
		: (header.style.height = "6rem");
	if (windowPosition === true) {
		body.style.backgroundColor = "#fc5c9c";
	} else {
		body.style.backgroundColor = "#099bf6";
	}
	windowPosition === true
		? (body.style.transition = "2s")
		: (body.style.transition = "2s");
});


anime({
    targets: '#amazing path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 5000,
    delay: function(el, i) { return i * 00 },
    direction: 'alternate',
    loop: false
  });

  anime({
    targets: '.staggering-grid',
    translateX: 0.3,
    duration: 5000,
    scale: 1,
    rotate: '1turn'
    
  });
  anime({
    targets: '.subtitle-anim',
    translateX: 250,
    direction: 'alternate',
    duration: 3000,
    easing: 'cubicBezier(.5, .05, .1, .3)'
  })