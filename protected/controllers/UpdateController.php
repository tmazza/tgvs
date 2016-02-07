<?php
class UpdateController extends MainController {
	
	
	public function actionIndex(){
		#$this->atualizaSeries();
		$this->atualizaTemporadas();
	}

	/**
	 * Consulta todas as series disponiveis
	 * Se a série é nova cria novo registro
	 * Se a série ja existe, atualiza a popularidade e as imagens
	 */
	private function atualizaSeries(){
	  	$url = 'http://api.themoviedb.org/3/tv/popular';
	    
	    $page = 1;
	    do {

		    $data = json_decode(Yii::app()->curl->get($url, [
		    	'api_key'=>Yii::app()->params['tmdb_key'],
		    	'page'=>$page,
		    	'language'=>'utf-8',
		   	]),true);

		    $do = false;
		    if(isset($data['results']) && $data['results'] > 0){
			    $do = true;
			    $results = $data['results'];
			    foreach ($results as $r) {
			    	$model = Serie::model()->findByAttributes([
			    		'tmdb_id' => $r['id'],
			    	]);
			    	if(is_null($model)){
			    		$model = new Serie();
			    		$model->nome = $r['name'];
			    		$model->tmdb_id = $r['id'];
			    		$model->popularity = $r['popularity'];
			    		$model->poster_path = $r['poster_path'];
			    		$model->backdrop_path = $r['backdrop_path'];
			    		if(!$model->save()){
			    			print_r($model->getErrors());
			    			exit;
			    			throw new Exception("Erro ao salvar nova serie.");
			    		}
			    	} else {
			    		$model->popularity = $r['popularity'];
			    		$model->poster_path = $r['poster_path'];
			    		$model->backdrop_path = $r['backdrop_path'];
			    		$model->update(['popularity','poster_path','backdrop_path'],false);
			    	}
			    }
			    echo 'Page ' . $page . ' - ' . count($results) . '<br>';
		    }

		    $page++;

		    if($page % 10 == 0){
		    	sleep(2.5);
		    }

  	    } while($do && $page < 5000);

	}

	/**10583
	 * Para cada registro de série busca/atualiza 
	 * as temporadas e o tempo médio dos episódios da temporada
	 */
	private function atualizaTemporadas(){
		$series = Serie::model()->findAll(['limit'=>20]);
		echo 'QTD: ' . count($series) .  '<hr>';
		foreach ($series as $s) {
			$url = 'http://api.themoviedb.org/3/tv/'.$s->tmdb_id;
		    $data = json_decode(Yii::app()->curl->get($url, [
		    	'api_key'=>Yii::app()->params['tmdb_key'],
		   	]),true);

		    $s->qtd_episodios = $data['number_of_episodes'];
		    $s->qtd_temporadas = $data['number_of_seasons'];
		    $tempo = $data['episode_run_time'];
		    if(is_array($tempo)){
		    	$tempo = ceil(array_sum($tempo) / count($tempo));
		    }
		    $s->tempo_episodios = $tempo;
		    $s->update(['qtd_episodios','qtd_temporadas','tempo_episodios']);
		   		

		    $temporadas = $data['seasons'];
		    foreach ($temporadas as $t) {
		    	$this->salvaTemporada($s,$t);
		    }
		}

	}

	private function salvaTemporada($s,$t){
		$model = Temporada::model()->findByAttributes([
			'tmdb_id' => $t['id'],
		]);
		if(is_null($model)){
			$model = new Temporada();
			$model->serie_id = $s->id;
			$model->tmdb_id = $t['id'];
			$model->qtd_episodios = $t['episode_count'];
			$model->ordem = $t['season_number'];
			$model->save();
		} else {
			if($model->qtd_episodios != $t['episode_count']){
				$model->qtd_episodios = $t['episode_count'];
				$model->update(['qtd_episodios']);
			}
		}
	}


}