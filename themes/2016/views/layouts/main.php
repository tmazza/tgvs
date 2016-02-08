<!DOCTYPE HTML>
<!--
	Strata by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<html>
	<head>
		<title>Strata by HTML5 UP</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<!--[if lte IE 8]><script src="assets/js/ie/html5shiv.js"></script><![endif]-->
		<link rel="stylesheet" href="<?=Yii::app()->baseUrl . '/themes/2016/assets/css/main.css';?>" />
		<!--[if lte IE 8]><link rel="stylesheet" href="assets/css/ie8.css" /><![endif]-->

		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">

		<style type="text/css">
			html {
				height: 100%;
			}
			input {
				font-size: 26pt;
			}
			#main {
				padding: 1em 4em 4em 4em;
			}
			#top {
				background-color: #083D56;
			}
			#header {
				background-color: #0E5F76;
				background-image: none;
				padding: 1em 4em 1em 0;
			}
			#form {
				background-color: #0C2233;
			}
			#timer {
				font-size: 20px;
				border: solid 3px #efefef;
				border-radius: 0.35em;
				display: inline-block;
				padding: 0 1.5em;
				text-align: center;
				text-decoration: none;
				white-space: nowrap;
			}
			.imgFixedSize {
				width: 110px;
				height: 150px;
			}
			.button {
				color: #efefef !important;
			}
			.image.thumb:after {
				content: 'Adicionar';
			}
			.image.thumb2:after {
				content: 'REMOVER'!important;
				left: 45%;
				color: red!important;
				opacity: 1!important;
			}
			.image.fit {
				margin: 0 0 0 0;
			}
			.image {
				height: 360px;
			}
		</style>
	</head>
	<body id="top">

		<!-- Header -->
		<header id="header">
			<h1>Quanto <strong>tempo</strong><br/>
			você <strong>perdeu</strong><br/>
			assistindo seriados?</h1>

			<br/>

			<div id="timer">
				<h1>Tempo: <strong id='tempo'>00:00:00</strong></h1>
			</div>

			<br/>
			<br/>

			<div style="padding-left: 4em; overflow-y: auto; height: 70%;">
				<a href="" style="display: inline-block;"><img class="imgFixedSize" src='images/thumbs/got00.jpg' alt="" /></a>
				<a href="" style="display: inline-block;"><img class="imgFixedSize" src='images/thumbs/got00.jpg' alt="" /></a>
				<a href="" style="display: inline-block;"><img class="imgFixedSize" src='images/thumbs/got00.jpg' alt="" /></a>
				<a href="" style="display: inline-block;"><img class="imgFixedSize" src='images/thumbs/got00.jpg' alt="" /></a>
				<a href="" style="display: inline-block;"><img class="imgFixedSize" src='images/thumbs/got00.jpg' alt="" /></a>
				<a href="" style="display: inline-block;"><img class="imgFixedSize" src='images/thumbs/got00.jpg' alt="" /></a>
				<a href="" style="display: inline-block;"><img class="imgFixedSize" src='images/thumbs/got00.jpg' alt="" /></a>
				<a href="" style="display: inline-block;"><img class="imgFixedSize" src='images/thumbs/got00.jpg' alt="" /></a>
				<a href="" style="display: inline-block;"><img class="imgFixedSize" src='images/thumbs/got00.jpg' alt="" /></a>
				<a href="" style="display: inline-block;"><img class="imgFixedSize" src='images/thumbs/got00.jpg' alt="" /></a>
				<a href="" style="display: inline-block;"><img class="imgFixedSize" src='images/thumbs/got00.jpg' alt="" /></a>
				<a href="" style="display: inline-block;"><img class="imgFixedSize" src='images/thumbs/got00.jpg' alt="" /></a>
				<a href="" style="display: inline-block;"><img class="imgFixedSize" src='images/thumbs/got00.jpg' alt="" /></a>
				<a href="" style="display: inline-block;"><img class="imgFixedSize" src='images/thumbs/got00.jpg' alt="" /></a>
				<a href="" style="display: inline-block;"><img class="imgFixedSize" src='images/thumbs/got00.jpg' alt="" /></a>
				<a href="" style="display: inline-block;"><img class="imgFixedSize" src='images/thumbs/got00.jpg' alt="" /></a>
				<a href="" style="display: inline-block;"><img class="imgFixedSize" src='images/thumbs/got00.jpg' alt="" /></a>
				<a href="" style="display: inline-block;"><img class="imgFixedSize" src='images/thumbs/got00.jpg' alt="" /></a>
				<a href="" style="display: inline-block;"><img class="imgFixedSize" src='images/thumbs/got00.jpg' alt="" /></a>
				<a href="" style="display: inline-block;"><img class="imgFixedSize" src='images/thumbs/got00.jpg' alt="" /></a>
			</div>
		</header>

		<!-- Main -->
		<div id="main">

			<!-- Two -->
			<section id="two">
				<ul class="actions">
					<li><a id="searchListSwitchBtn" href="#!" class="button">Buscar / Listar</a></li>
				</ul>

				<div id="searchArea" style="padding: 8em 4em 4em 4em;">
					<form>
						<input id="form" type="text" placeholder="Digite o nome de um seriado">
					</form>
					<div id='search-results'></div>
				</div>

				<?=$content;?>
			</section>

		</div>

		<!-- Scripts -->
		<script src="<?=Yii::app()->baseUrl . '/themes/2016/assets/js/app.js';?>"></script>
		<script src="<?=Yii::app()->baseUrl . '/themes/2016/assets/js/jquery.poptrox.min.js';?>"></script>
		<script src="<?=Yii::app()->baseUrl . '/themes/2016/assets/js/skel.min.js';?>"></script>
		<script src="<?=Yii::app()->baseUrl . '/themes/2016/assets/js/util.js';?>"></script>
		<script src="<?=Yii::app()->baseUrl . '/themes/2016/assets/js/main.js';?>"></script>
		<script src="<?=Yii::app()->baseUrl . '/themes/2016/assets/js/mine.js';?>"></script>

		<script>
			// var data = [
			// 	{id: 0, showName: 'Game of Thrones', src: 'images/thumbs/got00.jpg'},
			// 	{id: 1, showName: 'Vikings', src: 'images/thumbs/vikings00.jpg'},
			// 	{id: 2, showName: 'Prison Break', src: 'images/thumbs/prisonbreak00.jpg'},
			// 	{id: 3, showName: 'Black Sails', src: 'images/thumbs/blacksails00.jpg'},
			// 	{id: 4, showName: 'Gotham', src: 'images/thumbs/gotham00.jpg'},
			// 	{id: 5, showName: 'Arrow', src: 'images/thumbs/arrow00.jpg'},
			// 	{id: 6, showName: 'Breaking Bad', src: 'images/thumbs/breakingbad00.jpg'},
			// 	{id: 7, showName: 'Daredevil', src: 'images/thumbs/daredevil00.jpg'},
			// 	{id: 8, showName: 'The Flash', src: 'images/thumbs/flash00.jpg'},
			// 	{id: 9, showName: 'Homeland', src: 'images/thumbs/homeland00.jpg'},
			// 	{id: 10, showName: 'House of Cards', src: 'images/thumbs/houseofcards00.jpg'},
			// 	{id: 11, showName: 'Silicon Valley', src: 'images/thumbs/siliconvalley00.jpg'},
			// 	{id: 12, showName: 'Jessica Jones', src: 'images/thumbs/jessicajones00.jpg'},
			// 	{id: 13, showName: 'Legends of Tomorrow', src: 'images/thumbs/lot00.jpg'},
			// 	{id: 14, showName: 'Orphan Black', src: 'images/thumbs/orphanblack00.jpg'}
			// ];

			// var ShowList = React.createClass({
			// 	render: function () {
			// 		var listItem = this.props.data.map(function (data) {
			// 			return (
			// 				<article className='4u 6u(small) 12u$(xsmall)' key={data.id}>
			// 					<a className='image fit thumb'><img src={data.src} alt="" /></a>
			// 					<h3>{data.showName}</h3>
			// 				</article>
			// 			);
			// 		});
			// 		return (
			// 			<div className='row'>
			// 				{listItem}
			// 			</div>
			// 		);
			// 	}
			// });

			// ReactDOM.render(
			// 	<ShowList data={data} />,
			// 	document.getElementById('showList')
			// );
		</script>

	</body>
</html>