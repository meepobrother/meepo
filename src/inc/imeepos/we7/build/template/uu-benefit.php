<?php

function uuBenefit($widget = array()){
    if($widget['type'] == 'uu-benefit'){
        $str = "";
        foreach($widget['children'] as $item){
            $str .= uuBenefitItem($item);
        }
        $html = <<<EOT
    <div class="benefit bor-b marbot20">
        <ul class="itembox">
            {$str}
        </ul>
    </div>
EOT;
    }else{
        return "";
    }
}

function uuBenefitItem($item = array()){
    return <<<EOT
<li>
    <a href="{$item['link']}">
        <img src="{$item['image']}" alt="">
        <p>{$item['title']}</p>
    </a>
</li>
EOT;
}