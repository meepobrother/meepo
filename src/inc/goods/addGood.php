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
$data['shop_id'] = floatval($input['shop_id']);


$data['uniacid'] = $_W['uniacid'];

pdo_insert($table,$data);
$data['id'] = pdo_insertid();

$this->info = $data;
return $this;