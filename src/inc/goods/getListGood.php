<?php
global $_W;
$input = $this->__input['encrypted'];
$table = "imeepos_runner4_goods";


$page = intval($input['page']);
$psize = intval($input['psize']);
$page = $page > 0 ? $page : 1;
$psize = $psize > 0 ? $page : 30;

$list = pdo_getall(
    $table,
    array('uniacid'=>$_W['uniacid']),
    array(),
    'id desc',
    array('id'),
    array($page,30)
);

foreach($list as &$li){
    $li['shop'] = pdo_get('imeepos_runner4_shops',array('id'=>$li['shop_id']));
}
$this->info = !empty($list) ? $list : array();

return $this;
