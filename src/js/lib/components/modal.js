import $ from '../core';

$.prototype.modal = function (created) {

	for (let i = 0; i < this.length; i++) {
		const targetElem = this[i].getAttribute('data-target');
		$(this[i]).click(event => {
			event.preventDefault();
			$(targetElem).fadeIn(500);
			document.body.style.overflow = 'hidden';
			if (scrollbarVisible()) {
				document.body.style.marginRight = `${calcScroll()}px`;
				console.log(scrollbarVisible());
			} else {
				console.log(scrollbarVisible());
			}
		});

		const closeElements = document.querySelectorAll(`${targetElem} [data-close]`);
		closeElements.forEach(elem => {
			$(elem).click(() => {
				closeModal(targetElem, created);
			});
		});
		$(targetElem).click(e => {
			if (e.target.classList.contains('modal')) {
				closeModal(targetElem, created);
			}
		});
	}
};

$.prototype.createModal = function ({
	texts,
	btns
} = {}) {
	for (let i = 0; i < this.length; i++) {
		let modal = document.createElement('div');
		modal.classList.add('modal');
		modal.setAttribute('id', this[i].getAttribute('data-target').slice(1));

		const buttons = [];

		for (let j = 0; j < btns.count; j++) {
			let [text, classNames, close, callback] = btns.settings[j];
			let btn = document.createElement('button');
			btn.classList.add('btn', ...classNames);
			btn.textContent = text;
			if (close) {
				btn.setAttribute('data-close', 'true');
			}
			if (callback && typeof (callback === 'function')) {
				btn.addEventListener('click', callback);
			}
			buttons.push(btn);
		}

		modal.innerHTML = `
		<div class="modal-dialog">
				<div class="modal-content">
					<button class="close" data-close>
						<span>&times;</span>
					</button>
					<div class="modal-header">
						<div class="modal-title">
							${texts.title}
						</div>
					</div>
					<div class="modal-body">
						${texts.body}
					</div>
					<div class="modal-footer">
				
					</div>
				</div>
			</div>
		`;
		modal.querySelector('.modal-footer').append(...buttons);
		document.body.appendChild(modal);
		$(this[i]).modal(true);
		$(this[i].getAttribute('data-target')).fadeIn(500);
	}
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

function closeModal(targetElem, created) {
	$(targetElem).hide();
	document.body.style.overflow = '';
	document.body.style.marginRight = '0px';
	if (created) {
		document.querySelector(targetElem).remove();
	}
}

const scrollbarVisible = function() {
	return window.innerHeight < document.body.clientHeight;
};

$('[data-toggle="modal"]').modal();