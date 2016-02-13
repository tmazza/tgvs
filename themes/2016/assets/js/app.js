var resetAdded = false;

$(window).ready(function(){
	$('#search-input').select().focus();
	if(typeof(Storage) === "undefined") {
		alert("Browser não suporta a aplicação.");	
	}
	updateMenu();
	getSeries();
	addReset();

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
	pageSize = 48;
	jQuery.ajax({
		'type':'GET',
		'data':{'o':parseInt($('#btn-mais').attr('data-o')),'ps':pageSize},
		// 'beforeSend':function(){ $("#btn-mais").html("<img style='height:160px;margin-top:-80px;' src=\"http://i.imgur.com/P5ApKIy.gif\" />"); },
		'beforeSend':function(){ $("#btn-mais").html("<span style='color:#F7C873;'>Carregando...</span>"); },
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
		addReset();
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
		nome = $('#s'+id).find('p').text();
		img = elem.find('img').attr('src');
		$('#s'+id).html(htmlAdd(nome,img));
	}
	removeSerie(elem);
}

function updateAdd(elem){
	elem.html(htmlRemove(elem.find('p').text(),elem.find('img').attr('src')));
}

function updateRemove(elem){
	elem.html(htmlAdd(elem.find('p').text(),elem.find('img').attr('src')));
}

function updateMenu(){
	tempo = getTempo();

	tempo = minToTime(tempo);

	var html = '';
	html += '<div>'+tempo['dias']+'<br><small>dias</small></div>';
	html += '<div>:</div>';
	html += '<div>'+tempo['horas']+'<br><small>horas</small></div>';
	html += '<div>:</div>';
	html += '<div>'+tempo['horas']+'<br><small>minutos</small></div>';

	$('#tempo').html(html);
	lista = getLista();
	$('#added-gallery').html('');
	$.each(lista,function(id,serie){
		$('#added-gallery').append(htmlRemoveMenu(id,serie['time'],serie['img']));
	});	
	$('.tooltip').tooltipster({delay:0});
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
	texto = '';
	if(tempo['dias'] > 0){
		texto += tempo['dias']+' dia' + hasPlural(tempo['dias']) + ' ';
	}
	if(tempo['horas'] > 0){
		texto += tempo['horas']+' hora' + hasPlural(tempo['horas']) + ' e ';
	} else {
		texto += ' e ';
	}
	return texto + tempo['min']+' minuto' + hasPlural(tempo['min']);
}

function htmlSerie(serie){
	id = serie['id'];
	lista = getLista();
	var html = '<div class="div-image" id="s'+id+'" data-id="'+id+'" data-time="'+serie['time']+'">';
	if(lista[id] === undefined){
		html += htmlAdd(serie['nome'],serie['img'])+'<br>';
	} else {
		html += htmlRemove(serie['nome'],serie['img'])+'<br>';
	}
	html += '</div>';
	return html;
}

function htmlAdd(nome,img){
	var html = '';
	html += '<img src="'+img+'" onclick="addSerie($(this).parent());" />';
	html += '<p>' + nome + '</p>';
	return html;
}


function htmlRemove(nome,img){
	var html = '';
	html += '<img src="'+img+'" onclick="removeSerie($(this).parent());" class="added"/>';
	html += '<p>' + nome + '</p>';
	return html;
}

function htmlRemoveMenu(id,time,img){
	var html = '';
	html += '<a href="#!" onclick="removeSerieMenu($(this));" title="'+formatMinToTime(time)+'" class="tooltip added-img" data-id="'+id+'" data-time="'+time+'">';
	html += '<img src="'+img+'" />';
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

function reset(){
	setLista({});
	setTempo(0);

	unselect = function() {
		nome = $(this).find('p').text();
		img = $(this).find('img').attr('src');
		$(this).html(htmlAdd(nome,img));
	};

	$('#lista div').each(unselect);
	$('#search-results div').each(unselect);


	updateMenu();
	return false;
}

function addReset(){
	if(resetAdded === false){
		lista = getLista();
		if(Object.keys(lista).length > 1){
			$('#btn-reset').html('<a href="#!" onclick="return reset();">Remover todos</a>');
			resetAdded = true;
		}
	}
}

function hasPlural(qtd){
	if(qtd > 1){
		return 's';
	} else {
		return '';
	}
}

function setLista(lista){
 	localStorage.setItem("adds",JSON.stringify(lista));
}
function setTempo(tempo){
 	localStorage.setItem("time",JSON.stringify(tempo));
}