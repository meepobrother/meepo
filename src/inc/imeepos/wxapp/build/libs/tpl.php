<?php

include IA_ROOT."/imeepos/wxapp/build/libs/filter.component.php";
include IA_ROOT."/imeepos/wxapp/build/libs/meepo-swiper-tags.php";
include IA_ROOT."/imeepos/wxapp/build/libs/meepo-advs.php";

function tplComplier($widget = array()){
    $body = "";
    $body .= filterTpl($widget);
    $body .= meepoSwiperTagsTpl($widget);
    $body .= meepoAdvsTpl($widget);
    
    return $body;
}
