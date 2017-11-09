<?php
// meepo-btn
function filterTpl($widget = array()){
    $tpl = '';
    if($widget['type'] == 'meepo-filter'){
        // 按钮
        $item = "";
        foreach($widget['children'] as $key=>$item){
            $item .= <<<EOT
<view class="meepo-filter-tabs-item">
    {$item['title']}
</view>
EOT;
        }
        $html = <<<EOT
<view class="meepo-filter-tabs">
    {$item}
</view>
EOT;
    }
    return $tpl;
}