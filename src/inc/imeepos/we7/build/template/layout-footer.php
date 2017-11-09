<?php

function layoutFooter($data = array()){
    if($data['footer']['show']){
        $style = utilStyle($data['footer']['containerStyle']);
        $item = "";
        foreach($data['footer']['children'] as $item){
            $item .= layoutFooterItem($item);        
        }
$html = <<<EOT
    <layout-footer-view class="layout-footer" style="{$style}">
        {$item}
    </layout-footer-view>
    <script>
        $('.footer-item').click(function() {
            var link = $(this).data('link');
            window.location.href = "./index.php?i=41&c=entry&do=design&m=imeepos_runner&id=" + link;
        })
    </script>
EOT;
    }else{
        return "";
    }
}


function layoutFooterItem($footer){
    $html = <<<EOT
<div class="footer-item" data-link="{$footer['link']}">
    <i class="{$footer['icon']}"></i> {$footer['title']} 
</div>
EOT;
}