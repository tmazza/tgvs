$(window).ready(function(){
	$('#form').select().focus();
	if(typeof(Storage) === "undefined") {
		alert("Browser não suporta a aplicação.");	
	}
	updateMenu();
	getSeries();
});

$('#btn-mais').on('click',function(){
	getSeries();
	return false;
});

$('#search-input').keyup(function(){	
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
				$.each(series,function(num,serie){
					$('#search-results').append(htmlSerie(serie));
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
	pageSize = 30;
	jQuery.ajax({
		'type':'GET',
		'data':{'o':parseInt($('#btn-mais').attr('data-o')),'ps':pageSize},
		'beforeSend':function(){ $("#btn-mais").html("<img style='height:160px;margin-top:-80px;' src=\"http://i.imgur.com/P5ApKIy.gif\" />"); },
		// 'beforeSend':function(){ $("#btn-mais").html("<img style='height:160px;margin-top:-80px;' src=\"http://phette23.github.io/speed-is-a-feature/img/loadingBar.gif\" />"); },
		'success': function(html) {
			series = JSON.parse(html);
			$.each(series,function(num,serie){
				$('#lista').append(htmlSerie(serie));
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

function removeSerieMenu(elem){
	id = elem.attr('data-id');
	if($('#s'+id)){
		nome = $('#s'+id).find('h3').text();
		img = elem.find('img').attr('src');
		$('#s'+id).html(htmlAdd(nome,img));
	}
	removeSerie(elem);
}

function updateAdd(elem){
	elem.html(htmlRemove(elem.find('.nome').text(),elem.find('img').attr('src')));
}

function updateRemove(elem){
	elem.html(htmlAdd(elem.find('.nome').text(),elem.find('img').attr('src')));
}

function updateMenu(){
	tempo = getTempo();

	tempo = minToTime(tempo);

	// $('#tempo').html(tempo + ' min<br>' + Math.ceil((tempo/60)) + ' hor<br>' + Math.ceil((tempo/60/24)) + ' dias<br>');
	$('#tempo').html(tempo['dias']+'d <b>'+tempo['horas']+'</b>h <b>'+tempo['min']+'min</b>');
	lista = getLista();
	$('#added-gallery').html('');
	$.each(lista,function(id,serie){
		$('#added-gallery').append(htmlRemoveMenu(id,serie['time'],serie['img']));
	});	
}

function minToTime(tempo){
	minDia = 1440;
	dias = Math.floor(tempo/minDia);
	horas = Math.floor( (tempo - (dias * minDia)) / 60);
	min = tempo - (horas*60) - dias*minDia
	return {
		'dias': dias,
		'horas': horas,
		'min': min,
	};
}

function formatMinToTime(tempo){
	tempo = minToTime(tempo);
	return tempo['dias']+'d '+tempo['horas']+'h '+tempo['min']+'min';
}

function htmlSerie(serie){
	id = serie['id'];
	lista = getLista();
	var html = '<article class="main-img 4u 6u(small) 12u$(xsmall)" id="s'+id+'" data-id="'+id+'" data-time="'+serie['time']+'">';
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
	html += '</a>';
	html += '<h3 class="nome">' + nome + '</h3>';
	return html;
}

function htmlRemove(nome,img){
	var html = '';
	html += '<a href="#!" onclick="removeSerie($(this).parent());" class="image fit thumb thumb2">';
	html += '<img src="'+img+'" style="width:185px;" />';
	html += '</a>';
	html += '<h3 class="nome">' + nome + '</h3>';
	return html;
}

function htmlRemoveMenu(id,time,img){
	var html = '';
	html += '<a href="#!" onclick="removeSerieMenu($(this));" class="added-img" title="'+formatMinToTime(time)+'" data-id="'+id+'" data-time="'+time+'">';
	html += '<img src="'+img+'" style="" />';
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