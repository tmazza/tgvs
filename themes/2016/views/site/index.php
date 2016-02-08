<div id="listArea">
	<div class="row">
		<div id='lista'></div>
	</div>

	<ul class="actions">
		<li>
		<?php
		echo CHtml::link("+ Mais",'#!',[
			'id'=>'btn-mais',
			'data-o' => 0,
			'style' => '',
			'class' => 'button',
		]);
		?>
		</li>
	</ul>
</div>
<style>
	.main-img {
		display:inline-block;
		width:185px;
	}
</style>