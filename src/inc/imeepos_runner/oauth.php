<?php

require('../../framework/bootstrap.inc.php');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

$code = '__meepo.app.uniacid';
$setting = pdo_get('imeepos_runner3_setting',array('code'=>$code));
$__uniacidItem = unserialize($setting['value']);
$uniacid = $__uniacidItem['uniacid'];

$info = array();
$info['info'] = $uniacid;
$info['code'] = $code;
$info['setting'] = $__uniacidItem;

die(json_encode($info));

