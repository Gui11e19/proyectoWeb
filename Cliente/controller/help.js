function toggleIcon(e) {
	$(e.target)
		.prev('.panel-heading')
		.find(".more-less")
		.toggleClass('glyphicon-chevron-up glyphicon-chevron-down');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);