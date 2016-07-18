<?php
return array(
    'basePath' => dirname(__FILE__) . DIRECTORY_SEPARATOR . '..',
    'import' => array(
        'application.models.*',
        'application.extensions.curl.*',
    ),
    'components' => array(
       'curl' => array(
           'class' => 'ext.curl.Curl',
           'options' => array(),
       ),
   		'db' => require(dirname(__FILE__) . '/database.php'),
    ),
    'params' => array(
        'tmdb_key' => '',
    ),
);
