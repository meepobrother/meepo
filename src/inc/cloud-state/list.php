<?php

global $_W;
$input = $this->__input['encrypted'];
$table = "imeepos_runner4_cloud_site";


$page = intval($input['page']);
$psize = intval($input['psize']);
$page = $page > 0 ? $page : 1;
$psize = $psize > 0 ? $page : 30;

// $sql = "SELECT * FROM ".tablename('imeepos_runner4_cloud_site')." WHERE ";

$list = pdo_getall(
    $table,
    array(),
    array(),
    'scan_num desc',
    array('id'),
    array($page,30)
);
$this->info = !empty($list) ? $list : array();
$this->msg = $input;
return $this;
