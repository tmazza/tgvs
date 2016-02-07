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
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('ordem, tmdb_id, qtd_episodios, serie_id', 'required'),
			array('ordem, tmdb_id, qtd_episodios, serie_id', 'numerical', 'integerOnly'=>true),
			// The following rule is used by search().
			// @todo Please remove those attributes that should not be searched.
			array('ordem, tmdb_id, qtd_episodios, serie_id', 'safe', 'on'=>'search'),
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
			'serie' => array(self::BELONGS_TO, 'Serie', 'serie_id'),
		);
	}

	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'ordem' => 'Ordem',
			'tmdb_id' => 'Tmdb',
			'qtd_episodios' => 'Qtd Episodios',
			'serie_id' => 'Serie',
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

		$criteria->compare('ordem',$this->ordem);
		$criteria->compare('tmdb_id',$this->tmdb_id);
		$criteria->compare('qtd_episodios',$this->qtd_episodios);
		$criteria->compare('serie_id',$this->serie_id);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}

	/**
	 * Returns the static model of the specified AR class.
	 * Please note that you should have this exact method in all your CActiveRecord descendants!
	 * @param string $className active record class name.
	 * @return Temporada the static model class
	 */
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}
}
