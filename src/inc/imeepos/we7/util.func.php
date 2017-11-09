<?php

function utilStyle($widget = array()){
    $tpl = "";
    foreach($widget as $key=>$value){
        $tpl .= $key.":".$value.";";
    }
    return $tpl;
}

function utilClass($widget = array()){
    $tpl = "";
    foreach($widget as $key=>$value){
        if($value){
            $tpl .= $key." ";
        }
    }
    return $tpl;
}
