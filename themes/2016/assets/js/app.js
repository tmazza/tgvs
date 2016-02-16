var resetAdded = false;
var facShare = 'http://www.facebook.com/sharer/sharer.php';
var twtShare = 'http://twitter.com/intent/tweet';


$(window).ready(function(){

	$('#contact-box').hide();
	$('#list-area').hide();
	$('#search-input').focus();

	$('#contact-btn').click(function () {
	$('#contact-box').slideToggle('fast');
	});

	$('#switch-btn').click(function () {
	$('#list-area').slideToggle();
	$('#search-area').slideToggle('fast');

	if ($('#search-area').is(':visible')) {
	  $('#search-input').focus();
	}
	});
	
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
		'beforeSend':function(){ $("#btn-mais").html('<i class="icon fa fa-refresh fa-spin fa-3x"></i>'); },
		'success': function(html) {
			series = JSON.parse(html);
			$.each(series,function(num,serie){
				$('#lista').append(htmlSerie(serie));
			});
			$('#btn-mais').attr(
				'data-o',
				parseInt($('#btn-mais').attr('data-o')) + pageSize
			);
			$('#btn-mais').html('<i class="icon fa fa-plus fa-3x"></i>');
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
		addReset();
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
	html += '<div>'+tempo['dias']+'<br><small>dia'+hasPlural(tempo['dias'])+'</small></div>';
	html += '<div>:</div>';
	html += '<div>'+tempo['horas']+'<br><small>hora'+hasPlural(tempo['horas'])+'</small></div>';
	html += '<div>:</div>';
	html += '<div>'+tempo['min']+'<br><small>minuto'+hasPlural(tempo['min'])+'</small></div>';

	$('#tempo').html(html);
	lista = getLista();
	$('#added-show-list').html('');
	$.each(lista,function(id,serie){
		$('#added-show-list').append(htmlRemoveMenu(id,serie['time'],serie['img']));
	});	
	$('.tooltip').tooltipster({delay:0});
	setSocialShare();
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

	// div-image -> img-div.
	var html = '<div class="img-div" id="s'+id+'" data-id="'+id+'" data-time="'+serie['time']+'">';

	if(lista[id] === undefined){
		html += htmlAdd(serie['nome'],serie['img']); //+'<br>';
	} else {
		html += htmlRemove(serie['nome'],serie['img']); //+'<br>';
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
	// html += '<a href="#!" onclick="removeSerieMenu($(this));" title="'+formatMinToTime(time)+'" class="tooltip added-img" data-id="'+id+'" data-time="'+time+'">';
	// html += '<img src="'+img+'" />';
	// html += '</a>';

	html += '<div class="added-img-div tooltip" onclick="removeSerieMenu($(this));" title="'+formatMinToTime(time)+'" data-id="'+id+'" data-time="'+time+'">';
	html += '<img src="'+img+'" />';
	html += '</div>';

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

	$('#reset-btn-div').slideUp('fast');
	resetAdded = false;

	updateMenu();
	return false;
}

function addReset(){
	lista = getLista();
	if(resetAdded === false && Object.keys(lista).length > 1){
		$('#reset-btn-div').slideDown('fast');
		resetAdded = true;
	} else if(Object.keys(lista).length <= 1) {
		$('#reset-btn-div').slideUp('fast');
		resetAdded = false;
	}
}

function hasPlural(qtd){
	if(qtd > 1){
		return 's';
	} else {
		return '';
	}
}

function setSocialShare(){
	var url = 'tempogastovendoseries.com';
	var title = 'Eu "gastei" ' + formatMinToTime(getTempo()) + ' assistindo seriados';
	var texto = 'Veja quanto tempo você gastou: tempogastovendoseries.com';
	$('#fac-share').attr('href',facShare+'?u='+url+'&title='+title+'&description='+texto);
	$('#twt-share').attr('href',twtShare+'?status='+title+'+'+url);
}

function setLista(lista){
 	localStorage.setItem("adds",JSON.stringify(lista));
}
function setTempo(tempo){
 	localStorage.setItem("time",JSON.stringify(tempo));
}