<?php

global $_W;
$input = $this->__input['encrypted'];

$page = intval($input['page']);
$psize = intval($input['psize']);
$page = $page > 0 ? $page : 1;
$psize = $psize > 0 ? $page : 30;

$sql = "SELECT * FROM ".tablename('imeepos_runner4_tasks_group');
$list = pdo_fetchall($sql,$params);

return $this;