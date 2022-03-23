import $ from '../core';

$.prototype.modal = function () {
	for (let i = 0; i < this.length; i++) {
		const target = this[i].getAttribute("data-target");
		$(this[i]).click((e) => {
			e.preventDefault();
			$(target).fadeIn(500);
			document.body.style.overflow = 'hidden';
			document.body.style.marginRight = `${calcScroll()}px`;
		});
	}
	const closeElements = document.querySelectorAll("[data-close]");
	closeElements.forEach((elem) => {
		$(elem).click(() => {
			closeModal();
		});
	});
	$(".modal").click((e) => {
		if (e.target.classList.contains("modal")) {
			closeModal();
		}
	});
};

function calcScroll() {
	let div = document.createElement('div');
	div.style.width = '50px';
	div.style.height = '50px';
	div.style.overflowY = 'scroll';
	div.style.visibility = 'hidden';

	document.body.appendChild(div);

	let scrollWidth = div.offsetWidth - div.clientWidth;

	div.remove();

	return scrollWidth;
}

function closeModal() {
	$(".modal").hide();
	document.body.style.overflow = "";
	document.body.style.marginRight = "0px";
}

$('[data-toggle="modal"]').modal();