<?php

global $_W;
$input = $this->__input['encrypted'];

if(empty($input['title'])){
    return $this;
}

$data = array();
$data['uniacid'] = $_W['uniacid'];
$data['title'] = $input['title'];
$data['desc'] = $input['desc'];
$data['money'] = $input['money'];
$data['tag'] = serialize($input['tag']);
$data['class_id'] = $input['class_id'];

$id = intval($input['id']);

if(!empty($id)){
    pdo_update('imeepos_runner4_order',$data,array('id'=>$input['id']));
}else{
    pdo_insert('imeepos_runner4_order',$data);
    $data['id'] = pdo_insertid();
}

$this->info = $data;
$this->msg = $input;
return $this;