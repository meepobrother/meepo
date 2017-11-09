<?php
global $_W,$_GPC;
$input = $this->__input['encrypted'];

$group = array();
$group['uniacid'] = $_W['uniacid'];
$group['title'] = $input['title'];
$group['displayorder'] = $input['displayorder'];
$group['setting'] = serialize($group['setting']);

if(!empty($input['id'])){
    pdo_update('imeepos_runner4_tasks_group',$group,array('id'=>$input['id']));
    $group['id'] = $input['id'];
}else{
    pdo_insert('imeepos_runner4_tasks_group',$group);
    $group['id'] = pdo_insertid();
}
$this->info = $group;
return $this;