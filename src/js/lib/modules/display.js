import $ from "../core";

$.prototype.show = function () {
	for (let i = 0; i < this.length; i++) {
		if (!this[i].style) {
			continue;
		}
		this[i].style.display = '';
		console.log(`show ${JSON.stringify(this[i])}`);
	}
	return this;
};

$.prototype.hide = function () {
	for (let i = 0; i < this.length; i++) {
		if (!this[i].style) {
			continue;
		}
		this[i].style.display = 'none';
		console.log(`hide ${this[i]}`);
	}
	return this;
};

$.prototype.toggle = function () {
	for (let i = 0; i < this.length; i++) {
		if (!this[i].style) {
			continue;
		}
		if (this[i].style.display === 'none') {
			this[i].style.display = '';
			console.log(`toggle ${this[i]}`);
		} else {
			console.log(`toggle ${this[i]}`);
			this[i].style.display = 'none';
		}
	}
	return this;
};