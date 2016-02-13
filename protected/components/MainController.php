<?php

/**
 * Utilizado por todos os da aplicação
 */
class MainController extends CController  {

    const fsuc = 'flash-success';
    const ferr = 'flash-error';
    const finf = 'flash-info';

    public $assets;

    public $pageTitle = 'Tempo Gasto Vendo Séries';
    public $description = 'Calcule o tempo que você gastou assistindo seriados e animes.';
    public $keywords = 'calcular,serie,seriados,animes,tempo,gasto,perdido,assitindo,vendo,wasted,time,watching,tv show';
    public $subTitle = '';

    protected function beforeAction($action) {
        $this->addScripts();
        return parent::beforeAction($action);
    }

    private function addScripts(){
      if (!Yii::app()->request->isAjaxRequest) {
          Yii::app()->clientScript->registerCoreScript('jquery');
          #$this->assets = Yii::app()->assetManager->publish(Yii::getPathOfAlias('application.webroot'), false, -1, YII_DEBUG ? true : null);
      } else {
          Yii::app()->clientScript->scriptMap['jquery.js'] = false;
          Yii::app()->clientScript->scriptMap['jquery.min.js'] = false;
          Yii::app()->clientScript->scriptMap['jquery-ui.js'] = false;
          Yii::app()->clientScript->scriptMap['jquery-ui.min.js'] = false;
      }
    }

    public function actionError() {
        $erro = Yii::app()->errorHandler->error;
        $this->render('application.views.main.erro',array(
          'erro' => $erro,
        ));
    }
    
}
