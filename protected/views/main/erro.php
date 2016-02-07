<div class="md-card">
  <h3>Erro <?=$erro['code']?></h3>
  <h4>
    <?php if($erro['code'] == 404): ?>
      A página não foi encontrada.
    <?php else: ?>
      Ops. Algo deu errado. Verificaremos o que ocorreu.
    <?php endif; ?>
    Retorne para <?= CHtml::link('página inicial','/');?>
  </h4>
  <?php
  if(YII_DEBUG){
    echo '<pre>';
    print_r($erro);
    echo '</pre>';
  }
  ?>
</div>
