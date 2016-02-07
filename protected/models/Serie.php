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
	public function tableName()
	{
		return 'serie';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		return array(
			array('tmdb_id, nome', 'required'),
			array('tmdb_id', 'numerical', 'integerOnly'=>true),
			array('popularity', 'numerical'),
			array('backdrop_path', 'safe'),
			array('id, tmdb_id, nome, poster_path, backdrop_path, popularity', 'safe', 'on'=>'search'),
		);
	}

	/**
	 * @return array relational rules.
	 */
	public function relations()
	{
		// NOTE: you may need to adjust the relation name and the related
		// class name for the relations automatically generated below.
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
	 * Retrieves a list of models based on the current search/filter conditions.
	 *
	 * Typical usecase:
	 * - Initialize the model fields with values from filter form.
	 * - Execute this method to get CActiveDataProvider instance which will filter
	 * models according to data in model fields.
	 * - Pass data provider to CGridView, CListView or any similar widget.
	 *
	 * @return CActiveDataProvider the data provider that can return the models
	 * based on the search/filter conditions.
	 */
	public function search()
	{
		// @todo Please modify the following code to remove attributes that should not be searched.

		$criteria=new CDbCriteria;

		$criteria->compare('id',$this->id);
		$criteria->compare('tmdb_id',$this->tmdb_id);
		$criteria->compare('nome',$this->nome,true);
		$criteria->compare('poster_path',$this->poster_path,true);
		$criteria->compare('backdrop_path',$this->backdrop_path,true);
		$criteria->compare('popularity',$this->popularity);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}

	/**
	 * Returns the static model of the specified AR class.
	 * Please note that you should have this exact method in all your CActiveRecord descendants!
	 * @param string $className active record class name.
	 * @return Serie the static model class
	 */
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}

	public function linkCapa($width='320'){
		return 'http://image.tmdb.org/t/p/w'.$width.'/'.$this->poster_path;
	}
	public function linkCapa2($width='320'){
		return 'http://image.tmdb.org/t/p/w'.$width.'/'.$this->backdrop_path;
	}


}
