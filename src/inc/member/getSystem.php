<?php
global $_W;
$input = $this->__input['encrypted'];
// 检查权限
$__meepo_openid = $input['__meepo_openid'];
$__meepo_rcode = $input['__meepo_rcode'];

if(empty($__meepo_rcode) || empty($__meepo_openid)){
	$this->info = array();
	$this->msg = $input;
	$this->code = -1;
	return $this;
}

$list = pdo_getall('imeepos_runner3_member',array('uniacid'=>$_W['uniacid']));

$this->info = $list;
$this->msg = $input;
return $this;