<?php
// meepo-btn
function meepoSwiperTagsTpl($widget = array()){
    $styleStr = utilStyle($widget['containerStyle']);
    
    $tpl = <<<EOT
EOT;
    if($widget['type'] == 'meepo-swiper-tags'){
// 按钮
$tpl .=<<<EOT
<swiper style="{$styleStr}">
EOT;
        foreach($widget['children'] as $key=>$items){
$tpl.=<<<EOT
    <swiper-item>
EOT;
$tpl .=<<<EOT
        <view class="meepo-swiper-tags-list">
EOT;
            foreach($items as $key=>$item){
                $tpl .= <<<EOT
                <view class="meepo-swiper-tags-item">
                    <image class="img" src="{$item['image']}"></image>
                    <label>{$item['title']}</label>
                </view>
EOT;
            }
$tpl .= <<<EOT
        </view>
    </swiper-item>
EOT;
        }
$tpl .= <<<EOT
</swiper>
EOT;
    }
    return $tpl;
}