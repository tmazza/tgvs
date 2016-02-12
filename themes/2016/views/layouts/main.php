<!DOCTYPE HTML>

<html>
	<head>
		<title>Tempo Gasto Vendo Séries</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />

		<script src="http://code.jquery.com/jquery-1.12.0.min.js" ></script>
		<link rel="stylesheet" href="<?=Yii::app()->baseUrl . '/themes/2016/assets/css/main.css';?>" />
		<link rel="stylesheet" href="<?=Yii::app()->baseUrl . '/themes/2016/assets/css/olivi.css';?>" />

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

			<ul id="barra-superior" class="icons">
				<li><a href="#!" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
				<li><a href="#!" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
				<li><a id="contato-btn" href="#!" class="icon fa-question-circle"><span class="label">Contato</span></a></li>
			</ul>

			<div id="contato-box">
				<spam>Tiago Mazzarollo</spam>
				<br/>
				<spam>Oliver Hung Buo Tso</spam>
			</div>

			<div id='tempo'>00:00:00</div>
			<div id="added-gallery"></div>

		</header>

		<!-- Main -->
		<div id="main">

			<!-- Two -->
			<section id="two">

				<ul class="actions">
					<li><a id="area-switch-btn" href="#!" class="icon fa-th fa-2x"><span class="label">Github</span></a></li>
				</ul>

				<div id="search-area">
					<form>
						<input id="search-input" type="text" placeholder="Digite o nome do seriado." autocomplete="off">
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