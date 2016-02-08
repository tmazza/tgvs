<?php foreach ($series as $s): ?>
	<?php $this->renderPartial('_serie',['s'=>$s]); ?>
<?php endforeach; ?>