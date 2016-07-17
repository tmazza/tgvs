<?php

return array(
    'basePath' => dirname(__FILE__) . DIRECTORY_SEPARATOR . '..',
    'name' => "TGVS",
    'defaultController' => 'site',
    'theme' => '2016',
    'preload' => array('log'),
    'import' => array(
        'application.models.*',
        'application.components.*',
    ),
    'language' => 'pt_br',
    'modules' => array(),
    'components' => array(
       'curl' => array(
           'class' => 'ext.curl.Curl',
           'options' => array(),
       ),
       'user' => array(
            'allowAutoLogin' => true,
            'loginUrl' => '/site/login',
        ),
        'cache' => array(
            'class' => 'CFileCache',
        ),
        // uncomment the following to enable URLs in path-format
        'urlManager' => require(dirname(__FILE__) . '/rotas.php'),
        'db' => require(dirname(__FILE__) . '/database.php'),
        'authManager' => array(
            'class' => 'CDbAuthManager',
            'connectionID' => 'db',
            'itemTable' => 'seg_item',
            'itemChildTable' => 'seg_tree',
            'assignmentTable' => 'seg_assign',
        ),
        'errorHandler' => array(
            'errorAction' => 'site/error',
        ),
        'log' => array(
            'class' => 'CLogRouter',
            'routes' => array(
                array(
                    'class' => 'CFileLogRoute',
                    'levels' => 'error',
                    'logFile' => 'error',
                ),
                array(
                    'class' => 'CFileLogRoute',
                    'levels' => 'warning',
                    'logFile' => 'warning',
                ),
                array(
                    'class' => 'CFileLogRoute',
                    'levels' => 'trace',
                    'logFile' => 'trace',
                ),
                array(
                    'class' => 'CEmailLogRoute',
                    'levels' => 'error, warning',
                    'emails' => array(''),
                ),
            ),
        ),
    ),
    'params' => array(
        'nome' => 'Tempo gasto vendo series',
        'tmdb_key' => '',
    ),
);