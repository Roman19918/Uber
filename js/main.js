//Burger handler

(function () {
	const burgerItem = document.querySelector(".burger");
	const menu = document.querySelector(".header__menu");
	const menuCloseItem = document.querySelector(".header__menu-close");

	burgerItem.addEventListener("click", () => {
		menu.classList.add("header__menu_active");
	});

	menuCloseItem.addEventListener("click", () => {
		menu.classList.remove("header__menu_active");
	});
})();

function onEntry(entry) {
	entry.forEach((change) => {
		if (change.isIntersecting) {
			change.target.classList.add("element-show");
		} else {
			change.target.classList.remove("element-show");
		}
	});
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".element-animation");
for (let elm of elements) {
	observer.observe(elm);
}
