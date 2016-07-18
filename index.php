<?php
date_default_timezone_set('America/Sao_Paulo');

$yii = dirname(__FILE__) . '/src/yii/framework/yiilite.php';
$config = dirname(__FILE__) . '/protected/config/main.php';

defined('YII_DEBUG') or define('YII_DEBUG', in_array($_SERVER['HTTP_HOST'], array('localhost:8080')));
defined('YII_TRACE_LEVEL') or define('YII_TRACE_LEVEL', 3);

if(YII_DEBUG){
  ini_set('display_errors', true);
  error_reporting(E_ALL);
}

require_once($yii);
Yii::createWebApplication($config)->run();