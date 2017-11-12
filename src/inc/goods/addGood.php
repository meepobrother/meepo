<?php
global $_W;
$input = $this->__input['encrypted'];
$table = "imeepos_runner4_goods";

$data = array();
$data['title'] = $input['title'];
$data['desc'] = $input['desc'];
$data['thumbs'] = serialize($input['thumbs']);
$data['setting'] = serialize($input['setting']);
$data['content'] = $input['content'];
$data['create_time'] = time();
$data['count'] = intval($input['count']);
$data['price'] = floatval($input['price']);
$data['shop_id'] = intval($input['shop_id']);

$data['uniacid'] = $_W['uniacid'];
if(!empty($input['title'])){
    if(empty($input['id'])){
        pdo_insert($table,$data);
        $data['id'] = pdo_insertid();
    }else{
        pdo_update($table,$data,array('id'=>$input['id']));
        $data['id'] = $input['id'];
    }
}

$this->info = $data;
return $this;