<?php
global $_W;
$input = $this->__input['encrypted'];


$group = array();
$group['title'] = trim($input['title']);
$group['desc'] = trim($input['desc']);
$group['status'] = intval($input['status']);
$group['uniacid'] = intval($_W['uniacid']);


pdo_insert('imeepos_runner4_member_group',$group);
$id = pdo_insertid();

$group['id'] = $id;


$this->info = $group;
return $this;