(function (params) {
	const menu = document.querySelector('[data-menu]');
	const dropdown = document.querySelector('[data-dropdown]');

	if (menu) {
		menu.addEventListener('click', () => (document.body.classList.toggle('is-menu-open')));
	}
	if (dropdown) {
		dropdown.addEventListener('click', (e) => (e.preventDefault()))
	}

}());
