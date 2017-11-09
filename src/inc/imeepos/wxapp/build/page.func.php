<?php

function buildPageJs($page = array(), $path = ''){
    $file_dir = IA_ROOT.$path."/pages/page".$page['id'];
    mkdirs($file_dir);
    $js_file = $file_dir.'/page'.$page['id'].'.js';
    $page_str = json_encode($page);
$js_file_content = <<<EOT
var app = getApp();
var pageData = {
    data: {$page_str},
    goLink: function(event) {
        var link = event.currentTarget.dataset.link;
        wx.redirectTo({
            url: '../page' + link + '/page' + link
        });
    }
}
Page(pageData);
EOT;
    file_put_contents($js_file,$js_file_content);
}

function buildPageJson($page = array(), $path = ''){
    $file_dir = IA_ROOT.$path."/pages/page".$page['id'];
    mkdirs($file_dir);
    $json_file = $file_dir.'/page'.$page['id'].'.json';
$json_file_content = <<<EOT
{
    "navigationBarTitleText": "{$page['title']}"
}
EOT;
    file_put_contents($json_file,$json_file_content);
}


function buildPageWxml($page = array(), $path = ''){
    $file_dir = IA_ROOT.$path."/pages/page".$page['id'];
    mkdirs($file_dir);
    $wxml_file = $file_dir.'/page'.$page['id'].'.wxml';

    $body = $page['body'];
    $bodyStr = '';
    foreach($body['children'] as $key=>$widget){
        $bodyStr .= tplComplier($widget);
    }
$wxml_file_content = <<<EOT
<view class="layout">
    <view class="layout-container">
        <view class="layout-header" wx:if="{{header.show}}">
            <view class="title">{{header.content}}</view>
        </view>
        <view class="layout-body" wx:if="{{body.show}}">
            {$bodyStr}
        </view>
        <view class="layout-footer" style="" wx:if="{{footer.show}}">
            <view class="footer-item" wx:for="{{footer.children}}">
                <view bindtap="goLink" data-link="{{item.link}}" class="{{item.icon}}"></view>
                <view bindtap="goLink" data-link="{{item.link}}">{{item.title}}</view>
            </view>
        </view>
    </view>
</view>
EOT;
    file_put_contents($wxml_file,$wxml_file_content);
}


function buildPageWxss($page = array(), $path = ''){
    $file_dir = IA_ROOT.$path."/pages/page".$page['id'];
    mkdirs($file_dir);
    $wxss_file = $file_dir.'/page'.$page['id'].'.wxss';
    $str = "";
	foreach($page['footer']['containerStyle'] as $key=>$value){
		$str .= $key.":".$value.";";
	}
$wxss_file_content = <<<EOT
page{
    background-color:rgb(246, 246, 246);
    margin-left:auto;
    width: 100%;
    height: 100%;
}
.layout-footer{
	{$str}
}
EOT;
    file_put_contents($wxss_file,$wxss_file_content);    
}
