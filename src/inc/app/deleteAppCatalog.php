<?php
global $_W;
$input = $this->__input['encrypted'];
pdo_delete('imeepos_runner4_app_catalog',array('id'=>$input['id']));
return $this;