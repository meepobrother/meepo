<?php

$input = $this->__input['encrypted'];
$start = intval($input['start']);
$len = intval($input['len']);

$sql = "SELECT * FROM ".tablename('imeepos_repair_server_carfiles')." WHERE 1 ORDER BY createt_time limit {$start},{$len}";
$params = array();

$list = pdo_fetchall($sql,$params);

$this->info = $list;

return $this;