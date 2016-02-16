<!DOCTYPE HTML>

<html>

    <head>

        <title><?=$this->pageTitle;?></title>

        <meta charset="utf-8" />
        <meta name="viewport"    content="width=device-width, initial-scale=1" />
        <meta name="description" content="<?=$this->description;?>" />
        <meta name="keywords"    content="<?=$this->keywords;?>" />
        <meta property="og:url"         content="http://tempogastovendoseries.com" />
        <meta property="og:type"        content="website" />
        <meta property="og:title"       content="<?=$this->pageTitle?>" />
        <meta property="og:description" content="<?=$this->description?>" />

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="<?=Yii::app()->baseUrl . '/themes/2016/assets/css/main.css';?>" />
        <link rel="stylesheet" href="<?=Yii::app()->baseUrl . '/themes/2016/assets/css/tooltipster.css';?>" />

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

    <body>

        <div id="fb-root"></div>

        <script>(function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = "//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.5&appId=522006247922558";
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));</script>

        <!-- main -->
        <main>
            
            <!-- left-side -->
            <div id="left-side">

                <div id="header">
                    <a href="#!" id="fac-share" target="_blank" title="Compartilhar no Facebook" class="tooltip"><i class="icon fa fa-facebook fa-2x"></i></a>
                    <a href="#!" id="twt-share" target="_blank" title="Compartilhar no Twitter" class="tooltip"><i class="icon fa fa-twitter fa-2x"></i></a>
                    <a href="#!" id="contact-btn" title="Sobre" class="tooltip"><i class="icon fa fa-question-circle fa-2x"></i></a>
                </div>

                <div id="contact-box">
                    Desenvolvido por <a href="mailto:tiagomdepaula@gmail.com">Tiago Mazzarollo</a> e <a href="#!">Oliver Hung Buo Tso</a>.
                    <br/>
                    Dados de <a href="https://www.themoviedb.org">The Movie Database (TMDb)</a>.
                </div>

                <div id='tempo'></div>

                <div id='reset-btn-div'>
                    <a href="#!" title="Remover todos" onclick="return reset();" class='tooltip' id="reset-btn"><i class="icon fa fa-trash fa-2x"></i></a>
                </div>

                <div id="added-show-list"></div>

            </div>

            <!-- right-side -->
            <div id="right-side">

                <div id="switch-btn-div">
                    <a href="#!" id="switch-btn" class="tooltip" title="Listar/Buscar"><i class="icon fa fa-th-large fa-3x"></i></a>
                </div>

                <div id="search-area">
                    <form>
                        <input id="search-input" type="text" placeholder="Digite o nome do seriado." autocomplete="off">
                    </form>

                    <div id='search-results'></div>
                </div>

                <!-- list-area -->
                <?=$content;?>

            </div>

        </main>

        <!-- Scripts -->
        <script src="http://code.jquery.com/jquery-1.12.0.min.js"></script>
        <script src="<?=Yii::app()->baseUrl . '/themes/2016/assets/js/app.js';?>"></script>
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