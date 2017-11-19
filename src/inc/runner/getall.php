<?php
global $_W,$_GPC;
$input = $this->__input['encrypted'];

$sql = "SELECT id,openid,avatar,nickname,realname,mobile,lat,lng FROM ".tablename('imeepos_runner3_member')." WHERE uniacid = :uniacid AND isrunner = :isrunner";
$params = array(':uniacid'=>$_W['uniacid'],':isrunner'=>1);
$list = pdo_fetchall($sql,$params);

$this->info = $list;
return $this;