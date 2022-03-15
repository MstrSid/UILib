const $ = function (selector) {
	return new $.prototype.init(selector);
};

$.prototype.init = function (selector) {
	if (!selector) {
		return this; // return empty object {}
	}

	if (selector.tagName) {
		this[0] = selector;
		this.length = 1;
		return this;
	}

	Object.assign(this, document.querySelectorAll(selector));
	this.length = document.querySelectorAll(selector).length;
	return this; //return object
};
$.prototype.init.prototype = $.prototype; // set prototype of returned object from init prototype of $. 
// Now we can use all methods from $ and chaining.

window.$ = $;

export default $;