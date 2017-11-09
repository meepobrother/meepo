<?php
// meepo-btn
function btnTpl($widget = array()){
    $tpl = '';
    if($widget['type'] == 'meepo-btn'){
        $classStr = utilClass($widgegt['classObj']);
        $styleStr = utilStyle($widgegt['styleObj']);
        // 按钮
        $html = <<<EOT
<button style="{$styleStr}" class="{$classStr}">{$widget['content']}</button>
EOT;
    }
    return $tpl;
}