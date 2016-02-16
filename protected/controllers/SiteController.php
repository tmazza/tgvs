<?php
class SiteController extends MainController {

  public $pageSize = 5;

  protected function beforeAction($action){
    return parent::beforeAction($action);
  }

  public function actionIndex(){
    $this->render('index',[
    	'series' => $this->getSeries(0),
    ]);
  }

  public function actionNextPage($o,$ps){
    $o = (int) $o;
    echo $this->getSeries($o,$ps);
  }

  public function actionSearch($s){
    $s = addslashes($s);
    $criteria=new CDbCriteria;
    $criteria->compare('nome',$s, true);
    $criteria->compare('nome_org',$s, true, 'OR');
    $criteria->limit = 3;
    $criteria->order = 'popularity DESC,nome ASC';
    $data = Serie::model()->findAll($criteria);
    echo $this->output($data);
  }

  private function getSeries($offset=0,$pageSize=5){
    $data = Serie::model()->findAll([
      'limit' => $pageSize,
      'offset'=> $offset,
      'order' => 'popularity DESC',
    ]);
    return $this->output($data);
  }

  private function output($data){
    return json_encode(array_values(CHtml::listData($data,'id',function($s){
      return [
        'id' => $s->id,
        'nome' => $s->nome,
        'time' => $s->qtd_episodios*$s->tempo_episodios,
        'img' => $s->linkCapa('185'),
      ];
    })));
  }


}
