<?php

global $_W;
$input = $this->__input['encrypted'];
$table = "imeepos_runner4_goods_tags";

if(empty($input['id'])){
    return $this;
}
$data = array();
$data['title'] = $input['title'];
pdo_update($table,$data,array('id'=>$input['id']));

$this->info = $data;
$this->msg = '成功';
return $this;
