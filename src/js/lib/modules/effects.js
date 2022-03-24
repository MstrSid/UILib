import $ from "../core";

$.prototype.animateOverTime = function (duration, callback, finalAction) {
	let timeStart;

	function _animateOverTime(time) {
		if (!timeStart) {
			timeStart = time;
		}

		let timeElapsed = time - timeStart;
		let complection = Math.min(timeElapsed / duration, 1);
		callback(complection);

		if (timeElapsed < duration) {
			requestAnimationFrame(_animateOverTime);
		} else {
			if (typeof finalAction === 'function') {
				finalAction();
			}
		}
	}
	return _animateOverTime;
};

$.prototype.fadeIn = function (duration, display, finalAction) {
	for (let i = 0; i < this.length; i++) {
		_show(this[i], this, duration, display, finalAction);
	}
	return this;
};


$.prototype.fadeOut = function (duration, finalAction) {
	for (let i = 0; i < this.length; i++) {
		_hide(this[i], this, duration, finalAction);
	}
	return this;
};

$.prototype.fadeToggle = function (duration, display, finalAction) {
	for (let i = 0; i < this.length; i++) {
		if (window.getComputedStyle(this[i]).display === 'none') {
			_show(this[i], this, duration, display, finalAction);
		} else {
			_hide(this[i], this, duration, finalAction);
		}
	}
	return this;
};

const _show = (item, context, duration, display, finalAction) => {
	const _fadeIn = (complection) => {
		item.style.opacity = complection;
		item.style.display = display || "block";
	};
	const anim = context.animateOverTime(duration, _fadeIn, finalAction);
	requestAnimationFrame(anim);
};

const _hide = (item, context, duration, finalAction) => {
	const _fadeOut = (complection) => {
		item.style.opacity = 1 - complection;
		if (complection === 1) {
			item.style.display = "none";
		}
	};
	const anim = context.animateOverTime(duration, _fadeOut, finalAction);
	requestAnimationFrame(anim);
};