<?php
global $_W,$_GPC;

$input = $this->__input['encrypted'];

if(!empty($input['dev'])){
    ini_set("display_errors", "On");
	error_reporting(E_ALL | E_STRICT);
}

$page = intval($input['page']);
$psize = intval($input['psize']);
$page = $page > 0 ? $page : 1;
$psize = $psize > 0 ? $page : 30;


$list = pdo_getall('imeepos_runner4_app_widgets_group',array(),array(),'id desc',array('id'),array(1,30));
foreach($list as &$li){
    // $li['tags'] = unserialize($li['tags']);
    $li['widgets'] = pdo_getall('imeepos_runner4_app_widgets',array('group_id'=>$li['id']));
}
unset($li);

$this->info = $list;
return $this;
