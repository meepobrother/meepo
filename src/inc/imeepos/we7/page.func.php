<?php

include IA_ROOT."/imeepos/we7/build/tpl.php";


function buildPage($data = array(), $path = ''){
    $file_dir = IA_ROOT.$path."/pages/page".$data['id'];
    mkdirs($file_dir);
    $wxml_file = $file_dir.'/page'.$data['id'].'.html';
    
    $body = $data['body'];
    $bodyStr = '';
    foreach($body['children'] as $key=>$widget){
        $bodyStr .= tplComplier($widget);
    }

    $footer =layoutFooter($data);
    var_dump($bodyStr);
    $html = <<<EOT
    <html>
    <head>
        <meta charset="utf-8">
        <title>{$data['title']}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <link rel="stylesheet" media="all" href="https://meepo.com.cn/meepo/libs/weui/weui.min.css">
        <link rel="stylesheet" media="all" href="https://meepo.com.cn/meepo/libs/weui/jquery-weui.min.css">
        <link rel="stylesheet" type="text/css" href="https://meepo.com.cn/meepo/libs/layim/dist/css/layui.css">
        <link rel="stylesheet" media="all" href="https://meepo.com.cn/addons/imeepos_runner/template/mobile/design/meepoui.css?t={php echo time()}">
        <link rel="stylesheet" media="all" href="https://meepo.com.cn/meepo/libs/font-awesome/font-awesome.min.css">
        <script>
            document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
            var formsData = {};
            var searchFilter = {};
        </script>
        <style>
            app-root {display: block;height: 100%;width: 100%;overflow: hidden;}
            .mt10 {margin-top: 10px;}
            .weui-cell {color: rgb(34, 34, 34);}
            .weui-input {color: gray;}
            .weui-cell_warn {color: #E64340;}
            .hidden {display: none !important;}
        </style>
        <script type="text/javascript" src="https://meepo.com.cn/meepo/libs/jquery-3.2.1.min.js"></script>
        <script src="https://meepo.com.cn/meepo/libs/fastclick.min.js"></script>
        <script src="https://meepo.com.cn/meepo/libs/base64.min.js"></script>
        <script type="text/javascript" src="https://meepo.com.cn/app/resource/js/app/util.js"></script>
        <script src="https://res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>
        <script src="https://meepo.com.cn/meepo/libs/weui.min.js"></script>
        <script src="https://meepo.com.cn/meepo/libs/weui/jquery-weui.min.js"></script>
        <script src="https://meepo.com.cn/meepo/libs/swiper.min.js"></script>
        <script src="https://meepo.com.cn/meepo/libs/layim/dist/layui.all.js"></script>
    </head>
    <body>
        <app-root>
            <layout-view class="layout">
                <layout-container-view class="layout-container">
                    <layout-body-view id="layoutBody" class="layout-body" style="">
                    {$bodyStr}

                    {$footer}
                    </layout-body-view>
                </layout-container-view>
            </layout-view>
        </app-root>
    <script>
        $(document).ready(function() {
            var attachFastClick = Origami.fastclick;
            attachFastClick(document.body);
        });
    </script>
    </body>
</html>
EOT;
    file_put_contents($wxml_file,$html);
}


