<?php
include "../framework/bootstrap.inc.php";

ini_set("display_errors", "On");
error_reporting(E_ALL | E_STRICT);


// 处理加密数据
$input = isset($_GPC['__input']) ? $_GPC['__input'] : array();
if(isset($input['encrypted'])){
    $input['encrypted'] = json_decode(base64_decode($input['encrypted']),true);
}else{
    $input['encrypted'] = array();
}
$_GPC['__input'] = $input;

$c = $_GPC['c'];
$cs = array('android','ios','wxapp','we7');
if(in_array($c,$cs)){
    $do = $_GPC['do'];
    $dos = array('build');
    if(in_array($do,$dos)){
        $file = "./".$c."/".$do.".php";
        include $file;
        die();
    }
}
$data = array();
$data['status'] = 0;
$data['msg'] = 'welcome to use meepo!';
die(json_encode($data));