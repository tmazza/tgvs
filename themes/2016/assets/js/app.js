$(window).ready(function(){
	$('#form').select().focus();
	if(typeof(Storage) === "undefined") {
		alert("Browser não suporta a aplicação.");	
	}
	getSeries();
});

$('#btn-mais').on('click',function(){
	getSeries();
	return false;
});

var delay = (function(){
  var timer = 0;
  return function(callback, ms){
    clearTimeout (timer);
    timer = setTimeout(callback, ms);
  };
})();

$('#form').keyup(function(){	

	text = $(this).val();
	if(text.length > 0){
		var elem = $(this);
		if ( elem.data('requestRunning') )
	      return;	  	
		elem.data('requestRunning', true);
		jQuery.ajax({
			'type':'GET',
			'data':{'s':text},
			//'beforeSend':function(){ $("#btn-mais").html("<img src=\"http://phette23.github.io/speed-is-a-feature/img/loadingBar.gif\" />"); },
			'success': function(html) {
				series = JSON.parse(html);
				$('#search-results').html('');
				$.each(series,function(id,serie){
					$('#search-results').append(htmlSerie(id,serie));
				});
				elem.data('requestRunning', false);
			},
			'url':'/index.php?r=site/search',
			'cache':false,
		});
	} else {
		$('#search-results').html('');
	}
});

function getSeries(){
	pageSize = 10;
	jQuery.ajax({
		'type':'GET',
		'data':{'o':parseInt($('#btn-mais').attr('data-o')),'ps':pageSize},
		'beforeSend':function(){ $("#btn-mais").html("<img src=\"http://phette23.github.io/speed-is-a-feature/img/loadingBar.gif\" />"); },
		'success': function(html) {
			series = JSON.parse(html);
			$.each(series,function(id,serie){
				$('#lista').append(htmlSerie(id,serie));
			});
			$('#btn-mais').attr(
				'data-o',
				parseInt($('#btn-mais').attr('data-o')) + pageSize
			);
			$('#btn-mais').text('+ Mais');
		},
		'url':'/index.php?r=site/nextPage',
		'cache':false,
	});
}

function addSerie(elem){
	id = elem.attr('data-id');
	lista = getLista();
	if(lista[id] === undefined){
		tempo = getTempo();
		tempo += parseInt(elem.attr('data-time'));
		setTempo(tempo);
	 	lista[id] = {
	 		'time': parseInt(elem.attr('data-time')),
	 		'img': elem.find('img').attr('src'),
	 	};
	 	setLista(lista);
	 	updateAdd(elem);
		updateMenu();
	}
}

function removeSerie(elem){
	id = elem.attr('data-id');
	lista = getLista();
	if(lista[id] !== undefined){
		// Incrementa tempo
		tempo = getTempo();
		tempo -= parseInt(elem.attr('data-time'));
		setTempo(tempo);
		delete lista[id];
	 	setLista(lista);
	 	updateRemove(elem);
		updateMenu();
	}
}

function updateAdd(elem){
	elem.html(htmlRemove(elem.find('.nome').text(),elem.find('img').attr('src')));
}

function updateRemove(elem){
	elem.html(htmlAdd(elem.find('.nome').text(),elem.find('img').attr('src')));
}

function updateMenu(){
	tempo = getTempo();
	$('#tempo').html(tempo + ' min<br>' + Math.ceil((tempo/60)) + ' hor<br>' + Math.ceil((tempo/60/24)) + ' dias<br>');
	// console.log('asdad');
}

function htmlSerie(id,serie){
	lista = getLista();
	var html = '<article class="main-img 4u 6u(small) 12u$(xsmall)" data-id="'+id+'" data-time="'+serie['time']+'">';
	if(lista[id] === undefined){
		html += htmlAdd(serie['nome'],serie['img'])+'<br>';
	} else {
		html += htmlRemove(serie['nome'],serie['img'])+'<br>';
	}
	html += '</article>';
	return html;
}

function htmlAdd(nome,img){
	var html = '';
	html += '<a href="#!" onclick="addSerie($(this).parent());" class="image fit thumb">';
	html += '<img src="'+img+'" style="width:185px;" />';
	html += '<h3 class="nome">' + nome + '</h3>';
	html += '</a>';
	return html;
}

function htmlRemove(nome,img){
	var html = '';
	html += '<a href="#!" onclick="removeSerie($(this).parent());" class="image fit thumb thumb2">';
	html += '<img src="'+img+'" style="width:185px;" />';
	html += '<h3 class="nome">' + nome + '</h3>';
	html += '</a>';
	return html;
}

function getLista(){
	var lista = localStorage.getItem("adds");
 	if(lista === null){
 		lista = {};
 	} else {
 		lista = JSON.parse(lista);
 	}
 	return lista;
}

function getTempo(){
	var tempo = localStorage.getItem("time");
 	if(tempo === null){
 		tempo = 0;
 	} else {
 		tempo = JSON.parse(tempo);
 	}
 	return tempo;
}

function setLista(lista){
 	localStorage.setItem("adds",JSON.stringify(lista));
}
function setTempo(tempo){
 	localStorage.setItem("time",JSON.stringify(tempo));
}