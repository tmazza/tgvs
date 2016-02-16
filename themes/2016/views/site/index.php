<div id="list-area">
	<div id='lista'></div>

	<div id="more-btn-div">
	    <a href="#!" id="btn-mais"><i class="icon fa fa-plus fa-3x"></i></a>
	</div>

	<ul class="actions" style="text-align:center;">
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
