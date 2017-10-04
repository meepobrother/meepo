<?php
global $_W;
$sql = "SELECT * FROM ".tablename('imeepos_runner3_member')." WHERE uniacid=:uniacid";
$params = array(':uniacid'=>$_W['uniacid']);
$list = pdo_fetchall($sql,$params);

return $this;