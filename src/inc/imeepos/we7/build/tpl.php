<?php

include IA_ROOT."/imeepos/we7/build/template/layout-footer.php";


function tplComplier($widget = array()){
    $body = "";
    // 各种组件
    
    $body .= uuBenefit($widget);
    return $body;
}
