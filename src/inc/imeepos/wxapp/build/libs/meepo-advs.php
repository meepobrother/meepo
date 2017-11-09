<?php
// meepo-btn
function meepoAdvsTpl($widget = array()){
    $styleStr = utilStyle($widget['containerStyle']);
    
    $tpl = <<<EOT
EOT;
    if($widget['type'] == 'meepo-advs'){
// 按钮
$tpl .=<<<EOT
<swiper style="{$styleStr}">
EOT;
        foreach($widget['children'] as $key=>$item){
$tpl.=<<<EOT
    <swiper-item>
        <image style="width: 100%;" src="{$item['image']}"></image>
    </swiper-item>
EOT;
        }
$tpl .= <<<EOT
</swiper>
EOT;
    }
    return $tpl;
}