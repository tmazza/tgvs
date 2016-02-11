<!DOCTYPE HTML>
<!--
	Strata by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<html>
	<head>
		<title>Tempo Gasto Vendo Séries</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="stylesheet" href="<?=Yii::app()->baseUrl . '/themes/2016/assets/css/main.css';?>" />
		<link rel="stylesheet" href="<?=Yii::app()->baseUrl . '/themes/2016/assets/css/olivi.css';?>" />
		<script src="http://code.jquery.com/jquery-1.12.0.min.js" ></script>
	</head>
	<body id="top">
		
		<!-- Header -->
		<header id="header">

			<div id="title-area">
				<h1>Quanto <strong>tempo</strong><br/>
				você <strong>perdeu</strong><br/>
				assistindo seriados?</h1>
			</div>

			<div id="timer">
				<!-- <h1>Tempo: <strong id='tempo'>00:00:00</strong></h1> -->
				<h1><strong id='tempo'>00:00:00</strong></h1>
			</div>

			<div id="added-gallery"></div>

		</header>

		<!-- Main -->
		<div id="main">

			<!-- Two -->
			<section id="two">
				<ul class="actions">
					<li><a id="area-switch-btn" href="#!" class="button">Buscar / Listar</a></li>
				</ul>

				<div id="search-area">
					<form>
						<input id="search-input" type="text" placeholder="Digite o nome de um seriado" autocomplete="off">
					</form>
					<div id='search-results'></div>
				</div>

				<?=$content;?>
			</section>

		</div>

		<!-- Scripts -->
		<script src="<?=Yii::app()->baseUrl . '/themes/2016/assets/js/app.js';?>"></script>
		<script src="<?=Yii::app()->baseUrl . '/themes/2016/assets/js/jquery.min.js';?>"></script>
		<script src="<?=Yii::app()->baseUrl . '/themes/2016/assets/js/jquery.poptrox.min.js';?>"></script>
		<script src="<?=Yii::app()->baseUrl . '/themes/2016/assets/js/skel.min.js';?>"></script>
		<script src="<?=Yii::app()->baseUrl . '/themes/2016/assets/js/util.js';?>"></script>
		<script src="<?=Yii::app()->baseUrl . '/themes/2016/assets/js/main.js';?>"></script>
		<script src="<?=Yii::app()->baseUrl . '/themes/2016/assets/js/olivi.js';?>"></script>

	</body>
</html>