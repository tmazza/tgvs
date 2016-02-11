<?php
class UpdateController extends MainController {
	
	
	public function actionIndex(){
		$this->atualizaSeries();
		$this->atualizaTemporadas();
	}

	public function actionSoSer(){
		$this->atualizaSeries();
	}
	public function actionSoTem(){
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

	    	$time = microtime(true);

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
			    		$model->nome_org = isset($r['original_name']) ? $r['original_name'] : '';
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
			    		$model->nome = $r['name'];
			    		$model->nome_org = isset($r['original_name']) ? $r['original_name'] : '';
			    		$model->popularity = $r['popularity'];
			    		$model->poster_path = $r['poster_path'];
			    		$model->backdrop_path = $r['backdrop_path'];
			    		$model->update(['popularity','poster_path','backdrop_path','nome_org'],false);
			    	}
			    }
			    echo 'Page ' . $page . ' - ' . count($results) . '<br>';
		    }

		    $page++;

		    echo 'T: ' . number_format((microtime(true)-$time),2) . '<br>';

		    // if($page % 80 == 0){
		    	// sleep(1);
		    // }

  	    } while($do && $page <= 5000);

	}

	/**10583
	 * Para cada registro de série busca/atualiza 
	 * as temporadas e o tempo médio dos episódios da temporada
	 */
	private function atualizaTemporadas(){
		set_time_limit(0);
		$series = Serie::model()->findAll([
			'condition' => 'nome_org IS NOT NULL',
		]);
		$count=0;
		foreach ($series as $s) {
			$time = microtime(true);
			$url = 'http://api.themoviedb.org/3/tv/'.$s->tmdb_id;
		    $data = json_decode(Yii::app()->curl->get($url, [
		    	'api_key'=>Yii::app()->params['tmdb_key'],
		   	]),true);

		    $s->nome = isset($data['name']) ? $data['name'] : '';
		    $s->nome_org = isset($data['original_name']) ? $data['original_name'] : '';
		    $s->qtd_episodios = isset($data['number_of_episodes']) ? $data['number_of_episodes'] : null;
		    $s->qtd_temporadas = isset($data['number_of_seasons']) ? $data['number_of_seasons'] : null;
		    $tempo = $data['episode_run_time'];
		    if(is_array($tempo)){
		    	if(count($tempo) > 0){
			    	$tempo = ceil(array_sum($tempo) / count($tempo));
		    	} else {
		    		$tempo = 0;
		    	}
		    }
		    $s->tempo_episodios = $tempo;
		    
		    $s->update(['nome','nome_org','qtd_episodios','qtd_temporadas','tempo_episodios'],false);

		    #$temporadas = $data['seasons'];
		    #foreach ($temporadas as $t) {
		    #	$this->salvaTemporada($s,$t);
		    #}
		   	#echo 'T: ' . number_format((microtime(true)-$time),2) . '<br>';
		    $count++;

		    if($count % 40 == 0){
		    	sleep(1);
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