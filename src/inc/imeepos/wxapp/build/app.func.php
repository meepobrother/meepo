<?php

function initApp($path = '', $pages = array()){
    // 图片文件夹
    $file_dir = IA_ROOT.$path."/images";
    mkdirs($file_dir);

    buildAppJs($path);
    buildAppWxss($path);
    buildAppRouter($path, $pages);
}


function buildAppJs($path = ''){
    $app_js = IA_ROOT.$path."/app.js";
$app_js_content = <<<EOT
var appData = {
    onLaunch: function () {
        //调用API从本地缓存中获取数据
    },
    util: require('we7/resource/js/util.js'),
    globalData:{
        userInfo : null,
    },
    siteInfo: {
        'uniacid' : '8',
        'acid' : '8',
        'uniacid' : '1108',
        'acid' : '100384',
        'version' : '1.0.0',
        'siteroot' : 'http://172.16.1.100/weengine/pros/app/index.php',
    }
};
App(appData);
EOT;
    file_put_contents($app_js,$app_js_content);
}


function buildAppWxss($path = ''){
    $app_wxss = IA_ROOT.$path."/app.wxss";
$app_wxss_content = <<<EOT
@import 'we7/resource/style/weui.wxss';
@import 'we7/resource/style/we7.wxss';
@import 'we7/resource/style/meepoui.wxss';
@import 'we7/resource/style/meepoui_text-color.wxss';
@import 'we7/resource/style/font-awesome.wxss';
.meepo-swiper-tags-list {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
}
.meepo-swiper-tags-item {
    width: 25%;
    min-height: 44px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: gray;
}
.meepo-swiper-tags-item:hover {
    color: red;
}
.meepo-swiper-tags-item .img {
    flex: 1;
    border-radius: 50%;
    width: 32px;
    height: 32px;
}
EOT;
    file_put_contents($app_wxss,$app_wxss_content);
}


function buildAppRouter($resultFIle = '' ,$pages = array()){
    $pages_str = '';
    foreach($pages as $key=>$page){
$pages_str .= <<<EOT
    "pages/page{$page['id']}/page{$page['id']}"
EOT;
        if($key < count($pages) - 1){
            $pages_str.=",";
        }
    }

    $app_json = IA_ROOT.$resultFIle."/app.json";
$app_json_content = <<<EOT
{
    "pages": [{$pages_str}],
    "window": {
        "navigationBarTextStyle": "white",
        "navigationBarTitleText": "{$app['title']}",
        "navigationBarBackgroundColor": "#000",
        "backgroundColor": "#f5f5f5",
        "enablePullDownRefresh" : true
    }
}
EOT;
    file_put_contents($app_json,$app_json_content);
}