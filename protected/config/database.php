<?php

$hostName = '';
$database = '';
$userName = '';
$passWord = '';
$port = '';

return array(
    'class' => 'CDbConnection',
    'connectionString' => "mysql:host=$hostName;dbname=$database;port=$port",
    'emulatePrepare' => true,
    'username' => $userName,
    'password' => $passWord,
    'charset' => 'utf8',
    'enableProfiling' => true,
    'enableParamLogging' => true,
);
