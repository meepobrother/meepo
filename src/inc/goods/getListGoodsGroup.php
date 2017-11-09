<?php
global $_W;
$input = $this->__input['encrypted'];
$table = "imeepos_runner4_goods_group";

$page = intval($input['page']);
$psize = intval($input['psize']);
$page = $page > 0 ? $page : 1;
$psize = $psize > 0 ? $page : 30;

$list = pdo_getall(
    'imeepos_runner4_goods_group',
    array('uniacid'=>$_W['uniacid']),
    array(),
    'id desc',
    array('id'),
    array(1,30)
);
$this->info = $list;

return $this;