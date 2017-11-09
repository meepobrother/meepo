<?php
global $_W;
$input = $this->__input['encrypted'];
$table = "imeepos_runner4_goods_tags";

$data = array();
$data['title'] = $input['title'];
$data['uniacid'] = $_W['uniacid'];


pdo_insert($table,$data);
$data['id'] = pdo_insertid();

$this->info = $data;

return $this;