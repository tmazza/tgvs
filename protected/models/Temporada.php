<?php

/**
 * This is the model class for table "temporada".
 *
 * The followings are the available columns in table 'temporada':
 * @property integer $ordem
 * @property integer $tmdb_id
 * @property integer $qtd_episodios
 * @property integer $serie_id
 *
 * The followings are the available model relations:
 * @property Serie $serie
 */
class Temporada extends CActiveRecord
{
	/**
	 * @return string the associated database table name
	 */
	public function tableName()
	{
		return 'temporada';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules(){
		return array(
			array('ordem, tmdb_id, qtd_episodios, serie_id', 'required'),
			array('ordem, tmdb_id, qtd_episodios, serie_id', 'numerical', 'integerOnly'=>true),
			array('ordem, tmdb_id, qtd_episodios, serie_id', 'safe', 'on'=>'search'),
		);
	}

	/**
	 * @return array relational rules.
	 */
	public function relations(){
		// NOTE: you may need to adjust the relation name and the related
		// class name for the relations automatically generated below.
		return array(
			'serie' => array(self::BELONGS_TO, 'Serie', 'serie_id'),
		);
	}

	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels(){
		return array(
			'ordem' => 'Ordem',
			'tmdb_id' => 'Tmdb',
			'qtd_episodios' => 'Qtd Episodios',
			'serie_id' => 'Serie',
		);
	}

	/**
	 * Returns the static model of the specified AR class.
	 * Please note that you should have this exact method in all your CActiveRecord descendants!
	 * @param string $className active record class name.
	 * @return Temporada the static model class
	 */
	public static function model($className=__CLASS__){
		return parent::model($className);
	}
}
