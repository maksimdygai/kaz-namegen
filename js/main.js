$(document).ready(function() {
	var
		name = ['Бауыржан', 'Нурсултан', 'Абдижамиль', 'Абдикайыр'],
		surname = ['Нурпеисов', 'Назарбаев', 'Момышулы'],
		
		random = function(array) { return array[~~(Math.random() * array.length)]; }

	$('#gen-btn').on('click', function() {
		$('#name').text(random(name) + ' ' + random(surname));
		return false;
	})
});