$(document).ready(function() {
	var
		name = ['Бауыржан', 'Нурсултан', 'Абдижамиль', 'Абдикайыр', 'Абай', 'Абат', 'Аббас', 'Абди', 'Абдибай', 'Абдигали', 'Абдижалел', 'Абдижамиль', 'Абдижаппар',  'Абдикадир', 'Абдикайыр', 'Абдикарим', 'Абдикен', 'Абдильда',  'Абдиманап', 'Абдинур', 'Абдираим', 'Абдирали', 'Абдирашид', 'Абдисаттар', 'Абдихалык', 'Абдолла', 'Абдраим', 'Абдрасул', 'Абдрахим', 'Абдрашит', 'Абдуазим', 'Абдуали', 'Абдулла', 'Абдулмамбет', 'Абдунаби', 'Абдуразах', 'Абдурахман', 'Абдухамит', 'Абдхалык', 'Абет', 'Абзал'],
		
		surname = ['Нурпеисов', 'Назарбаев', 'Момышулы'],
		
		random = function(array) { return array[~~(Math.random() * array.length)]; }

	$('#gen-btn').on('click', function() {
		$('#name').text(random(name) + ' ' + random(surname));
		return false;
	})
});