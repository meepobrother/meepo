<?php
// meepo-btn
function badgeTpl($widget = array()){
    $tpl = '';
    if($widget['type'] == 'meepo-badge'){
        $classStr = utilClass($widgegt['classObj']);
        $styleStr = utilStyle($widgegt['styleObj']);
        // 按钮
        $html = <<<EOT
<view style="{$styleStr}" class="{$classStr}">{$widget['content']}</view>
EOT;
    }
    return $tpl;
}