<?php

require('../../framework/bootstrap.inc.php');

if (isset($_SERVER['HTTP_ORIGIN'])) {
	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Credentials: true");
	header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
	header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
	header('P3P: CP="CAO PSA OUR"'); // Makes IE to support cookies
	header("Content-Type: application/json; charset=utf-8");
}


$code = '__meepo.app.uniacid';
$setting = pdo_get('imeepos_runner3_setting',array('code'=>$code));
$__uniacidItem = unserialize($setting['value']);
$uniacid = $__uniacidItem['uniacid'];

$info = array();
$info['info'] = $uniacid;
$info['code'] = $code;
$info['setting'] = $__uniacidItem;

die(json_encode($info));

