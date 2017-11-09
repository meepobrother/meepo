<?php

global $_W;
$input = $this->__input['encrypted'];
pdo_update('imeepos_runner4_order_tag',$input,array('id'=>$input['id']));
$this->info = $input;
$this->msg = 'success';
return $this;