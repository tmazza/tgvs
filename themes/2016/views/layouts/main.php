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

		<style type="text/css">
			.div-image {
				cursor: pointer;
				display: inline-block;
				vertical-align: top;
				margin-left: 0.5em
			}
			.div-image img {
			    opacity: 1;
			    transition: opacity 0.2s ease-in-out;
			    -moz-transition: opacity 0.2s ease-in-out;
			    -webkit-transition: opacity 0.2s ease-in-out;
			    -ms-transition: opacity 0.2s ease-in-out;
			    transition: opacity 0.2s ease-in-out;

			    width: 215px;
			    border-radius: 0.35em;
			}
		    .div-image img:hover {
		    	opacity: 0.5;
		    }
		    .div-image p {
		    	width: 215px;
		    	margin-bottom: 1em;
		    	margin-top: -0.5em;
		    	line-height: 18px;
		    }
		</style>

		<?php if(!YII_DEBUG): ?>
			<script>
			  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

			  ga('create', 'UA-73593676-1', 'auto');
			  ga('send', 'pageview');
			</script>
		<?php endif; ?>

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

				<div>
					<div class="div-image">
						<img src="<?=Yii::app()->baseUrl . '/themes/2016/assets/001.jpg';?>">
						<p>Game of Thrones</p>
					</div>
				</div>
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