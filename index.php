<?php
date_default_timezone_set('America/Sao_Paulo');

$yii = dirname(__FILE__) . '/src/yii/framework/yiilite.php';
$config = dirname(__FILE__) . '/protected/config/main.php';

// remove the following lines when in production mode
defined('YII_DEBUG') or define('YII_DEBUG', in_array($_SERVER['HTTP_HOST'], array('localhost:9090')));
// specify how many levels of call stack should be shown in each log message
defined('YII_TRACE_LEVEL') or define('YII_TRACE_LEVEL', 3);

if(YII_DEBUG){
  ini_set('display_errors', true);
  error_reporting(E_ALL);
  // ini_set('display_errors', 'On');
}
require_once($yii);
Yii::createWebApplication($config)->run();