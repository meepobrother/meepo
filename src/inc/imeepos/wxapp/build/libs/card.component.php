<?php
// meepo-btn
function capsuleTpl($widget = array()){
    $tpl = '';
    if($widget['type'] == 'meepo-capsule'){
        // 按钮
        $html = <<<EOT
<view class="zan-card">
    <view class="zan-card__thumb">
        <image class="zan-card__img" src="https://img.yzcdn.cn/upload_files/2016/11/25/FpqPXlrMRjKwJs8VdTu3ZDJCj4j5.jpeg?imageView2/2/w/200/h/200/q/90/format/jpeg" mode="aspectFit"></image>
    </view>
    <view class="zan-card__detail">
        <view class="zan-card__detail-row">
            <view class="zan-card__right-col">¥ 999.99</view>
            <view class="zan-card__left-col zan-ellipsis--l2">
                红烧牛肉【虚拟商品】【有库存】【有sku】
            </view>
        </view>
        <view class="zan-card__detail-row zan-c-gray-darker">
            <view class="zan-card__right-col">x2</view>
            <view class="zan-card__left-col">
                3000克 50%
            </view>
        </view>
        <view class="zan-card__detail-row zan-c-gray-darker">
            <view class="zan-card__left-col zan-c-red">已发货</view>
        </view>
    </view>
</view>
EOT;
    }
    return $tpl;
}