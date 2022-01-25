import './lib/lib';

$('#add').on('click', function () {
	$(this).addAttribute('disabled');
});

$('#toggle').on('click', function () {
	$(this).toggleAttribute('disabled');
});

$('#remove').on('click', function () {
	$(this).removeAttribute('disabled');
});