<!DOCTYPE HTML>
<html>
	<head>
		<title><?=$this->pageTitle;?></title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<script src="http://code.jquery.com/jquery-1.12.0.min.js" ></script>
		<meta name="description" content="<?=$this->description;?>" />
		<meta name="keywords" content="<?=$this->keywords;?>" />
		<link rel="stylesheet" href="<?=Yii::app()->baseUrl . '/themes/2016/assets/css/main.css';?>" />
		<link rel="stylesheet" href="<?=Yii::app()->baseUrl . '/themes/2016/assets/css/olivi.css';?>" />
		<link rel="stylesheet" href="<?=Yii::app()->baseUrl . '/themes/2016/assets/css/tooltipster.css';?>" />

		<meta property="og:url"           content="http://tempogastovendoseries.com" />
		<meta property="og:type"          content="website" />
		<meta property="og:title"         content="<?=$this->pageTitle?>" />
		<meta property="og:description"   content="<?=$this->description?>" />

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

		<div id="fb-root"></div>
		<script>(function(d, s, id) {
		  var js, fjs = d.getElementsByTagName(s)[0];
		  if (d.getElementById(id)) return;
		  js = d.createElement(s); js.id = id;
		  js.src = "//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.5&appId=522006247922558";
		  fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));</script>
		
		<!-- Header -->
		<header id="header">

			<ul id="barra-superior" class="icons">
				<li><a id='fac-share' target="_blank" title="Compartilhar no Facebook" href="#!" class="tooltip icon fa-facebook"><span class="label">Facebook</span></a></li>
				<li><a id='twt-share' target="_blank" title="Compartilhar no Twitter"  href="#!" class="tooltip icon fa-twitter"><span class="label">Twitter</span></a></li>
				<li><a id="contato-btn" href="#!" title="Sobre" class="icon fa-info tooltip"><span class="label">Contato</span></a></li>
			</ul>

			<div title="Sobre" id="contato-box" style="text-align: left;padding:12px;">
				Desenvolvido por <a href="#!">Oliver Hung Buo Tso</a> e 
				<a href="mailto:tiagomdepaula@gmail.com">Tiago Mazzarollo</a>. Dados de <a href='https://www.themoviedb.org'>The Movie Database (TMDb)</a>.
			</div>

			<div id='tempo'>00:00:00</div>
			<div style='text-align:center' id='btn-reset'></div>
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
		<script src="<?=Yii::app()->baseUrl . '/themes/2016/assets/js/notify.min.js';?>"></script>
		<script src="<?=Yii::app()->baseUrl . '/themes/2016/assets/js/jquery.tooltipster.min.js';?>"></script>

	    <script>
        $(document).ready(function() {
			$('.tooltip').tooltipster({delay:0});
		});
		</script>

	</body>
</html>
