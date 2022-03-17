import $ from "../core";

$.prototype.addAttribute = function (attrName) {
	for (let i = 0; i < this.length; i++) {
		this[i].setAttribute(attrName, '');
	}
	return this;
};

$.prototype.removeAttribute = function (attrName) {
	for (let i = 0; i < this.length; i++) {

		this[i].removeAttribute(attrName);
	}
	return this;
};

$.prototype.toggleAttribute = function (attrName) {
	for (let i = 0; i < this.length; i++) {
		this[i].toggleAttribute(attrName);
	}
	return this;
};

$.prototype.getAttribute = function (attrName) {
	for (let i = 0; i < this.length; i++) {
		return this[i].getAttribute(attrName);
	}
	return this;
};