<?php

class MainController extends CController  {

    const fsuc = 'flash-success';
    const ferr = 'flash-error';
    const finf = 'flash-info';

    public $assets;

    public $pageTitle = null;
    public $description = null;
    public $keywords = null;
    public $subTitle = null;

    protected function beforeAction($action) {
        $this->pageTitle = 'Tempo Gasto Vendo Séries';
        $this->description = 'Calcule o tempo que você gastou assistindo seriados e animes.';
        $this->keywords = 'calcular,serie,seriados,animes,tempo,gasto,perdido,assitindo,vendo,wasted,time,watching,tv show';
        $this->addScripts();
        return parent::beforeAction($action);
    }

    private function addScripts(){
      if (!Yii::app()->request->isAjaxRequest) {
          Yii::app()->clientScript->registerCoreScript('jquery');
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
