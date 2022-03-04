const mainMenu = document.querySelector(".mainMenu");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");

openMenu.addEventListener("click", () => {
	mainMenu.style.display = "flex";
	mainMenu.style.top = "0";
});
closeMenu.addEventListener("click", () => {
	mainMenu.style.top = "-100%";
});

$("h1").blast({
	delimiter: "character",
	customClass: "alpha",
});
gsap.from(".blast", { opacity: 0 });
gsap.to(".blast", { duration: 2, opacity: 1 });
