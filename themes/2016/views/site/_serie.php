<div class='main-img' data-id='<?=$s->tmdb_id;?>' data-time='<?=$s->qtd_episodios*$s->tempo_episodios;?>'>
	<?=$s->nome;?>
	<span class='action'></span><br>
	<?=CHtml::image($s->linkCapa('185'),'#!',[
		'style'=>'width:185px;',
	]);?>
</div>