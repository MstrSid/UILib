import $ from "../core";

$.prototype.html = function (content) {
	for (let i = 0; i < this.length; i++) {
		for (let key in this[i]) {
			if (key === 'innerHTML') {
				if (content) {
					this[i][key] = content;
				} else {
					return this[i][key];
				}
			}
		}
	}
	return this;
};

$.prototype.eq = function (i) {
	const element = this[i],
		objLength = Object.keys(this).length;

	for (let i = 0; i < objLength; i++) {
		delete this[i];
	}

	this[0] = element;
	this.length = 1;
	return this;
};

$.prototype.index = function () {
	const parent = this[0].parentNode,
		childs = [...parent.children];

	const findMyIndex = (item) => {
		return item === this[0];
	};

	return childs.findIndex(findMyIndex);
};

$.prototype.find = function (selector) {
	let numOfItems = 0,
		counter = 0;
	const copyObj = Object.assign({}, this);

	for (let i = 0; i < copyObj.length; i++) {
		const array = copyObj[i].querySelectorAll(selector);
		if (array.length === 0) {
			continue;
		}
		for (let j = 0; j < array.length; j++) {
			this[counter] = array[j];
			counter++;
		}

		numOfItems += array.length;
	}
	this.length = numOfItems;
	for (; numOfItems < Object.keys(this).length; numOfItems++) {
		delete this[numOfItems];
	}
	return this;
};

$.prototype.closest = function (selector) {
	let counter = 0;

	for (let i = 0; i < this.length; i++) {
		this[i] = this[i].closest(selector);
		if (this[i] === null) {
			this[i] = '';
		}
		counter++;
	}
	for (; counter < Object.keys(this).length; counter++) {
		delete this[counter];
	}

	return this;
};

$.prototype.siblings = function () {
	let numOfItems = 0,
		counter = 0;
	const copyObj = Object.assign({}, this);

	for (let i = 0; i < copyObj.length; i++) {
		const array = copyObj[i].parentNode.children;
		for (let j = 0; j < array.length; j++) {
			if (copyObj[i] === array[j]) {
				continue;
			}
			this[counter] = array[j];
			counter++;
		}

		numOfItems += array.length - 1;
	}
	this.length = numOfItems;
	for (; numOfItems < Object.keys(this).length; numOfItems++) {
		delete this[numOfItems];
	}
	return this;
};