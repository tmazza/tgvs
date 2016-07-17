<?php

/**
 * This is the model class for table "serie".
 *
 * The followings are the available columns in table 'serie':
 * @property integer $id
 * @property integer $tmdb_id
 * @property string $nome
 * @property string $poster_path
 * @property string $backdrop_path
 * @property double $popularity
 */
class Serie extends CActiveRecord
{
	/**
	 * @return string the associated database table name
	 */
	public function tableName(){
		return 'serie';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules(){
		return array(
			array('tmdb_id', 'required'),
			array('tmdb_id', 'numerical', 'integerOnly'=>true),
			array('popularity', 'numerical'),
			array('backdrop_path,nome_org', 'safe'),
			array('id, tmdb_id, nome, poster_path, backdrop_path, popularity, nome_org', 'safe', 'on'=>'search'),
		);
	}

	/**
	 * @return array relational rules.
	 */
	public function relations(){
		return array(
		);
	}

	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'id' => 'ID',
			'tmdb_id' => 'Tmdb',
			'nome' => 'Nome',
			'poster_path' => 'Poster Path',
			'backdrop_path' => 'Backdrop Path',
			'popularity' => 'Popularity',
		);
	}

	/**
	 * Returns the static model of the specified AR class.
	 * Please note that you should have this exact method in all your CActiveRecord descendants!
	 * @param string $className active record class name.
	 * @return Serie the static model class
	 */
	public static function model($className=__CLASS__){
		return parent::model($className);
	}

	public function linkCapa($width='320'){
		if(is_null($this->poster_path)){
			return 'http://www.montatudo.com/App_Themes/montatudo/images/not-found.jpg';
		} else {
			return 'http://image.tmdb.org/t/p/w'.$width.$this->poster_path;
		}
	}

	public function linkCapa2($width='320'){
		return 'http://image.tmdb.org/t/p/w'.$width.$this->backdrop_path;
	}


}
