<?php
// meepo-btn
function capsuleTpl($widget = array()){
    $tpl = '';
    if($widget['type'] == 'meepo-capsule'){
        // 按钮
        $html = <<<EOT
<template is="capsule" data="{{ ...{$widget['content']} }}" />
EOT;
    }
    return $tpl;
}