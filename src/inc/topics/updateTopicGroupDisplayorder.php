<?php
$input = $this->__input['encrypted'];

getList($input);

return $this;


function getList($input = array(),$fid = 0){
    foreach($input as $key=>$item){
        if(!empty($item['children'])){
            getList($item['children'],$item['id']);
        }else{
            pdo_update('imeepos_runner4_topics_group',array('displayorder'=>$key,'fid'=>$fid),array('id'=>$item['id']));
        }
    }
}
