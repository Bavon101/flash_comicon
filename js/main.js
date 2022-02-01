const menuBtn = document.querySelector('.menu_button');
const closeBtn = document.querySelector('.close_button');
function openCloseDrawer() {
	const menuDrawer = document.querySelector('.open_nav');
	menuDrawer.classList.toggle('show_drawer');
	menuBtn.classList.toggle('show_drawer');
	closeBtn.classList.toggle('show_drawer');

}

menuBtn.addEventListener('click', openCloseDrawer);
closeBtn.addEventListener('click', openCloseDrawer);