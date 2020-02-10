import moment from 'moment';
import 'moment/locale/ja';

moment.locale('ja')

window.addEventListener('DOMContentLoaded', () => {
	const replaceText: (selector: string, text: string) => void = (selector, text) => {
	const element: HTMLElement | null = document.getElementById(selector)
		if (element) element.innerText = text
	};

	for (const type of ['chrome', 'node', 'electron', 'date-app-start']) {
		var replaced: string = `${type}-version`;
		var replacing: string;
		switch (type) {
			case 'chrome':
				replacing = process.versions.chrome as string;
				break;
			case 'node':
				replacing = process.versions.node as string;
				break;
			case 'electron':
				replacing = process.versions.electron as string;
				break;
			case 'date-app-start':
				replaced = `${type}`;
				replacing = moment().format("YY/MM/DD dd");
				break;
			default:
				replaced = '';
				replacing = '';
				break;
		}
		if (replaced !== '' || replacing !== '')
			replaceText(replaced, replacing);
	}

	/* Bulma navbar burger */
	var $burger: any[] = Array.prototype.slice.call(
		document.querySelectorAll('.navbar-burger'), 0);

	const burger_init: (el: any, index: number, array: any[]) => void = (el) => {
		el.addEventListener('click', () => {
			var target: string = el.dataset.target;
			var $target: HTMLElement | null = document.getElementById(target);
			el.classList.toggle('is-active');
			if ($target) $target.classList.toggle('is-active');
		});
	};

	if ($burger.length > 0) {
		$burger.forEach(burger_init);
	};
});