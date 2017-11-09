<?php
// 自动登陆
global $_W,$_GPC;
// 扫码登陆
$input = $this->__input['encrypted'];
$rcode = trim($_GPC['r']);
if(empty($rcoce)){
    $rcode = $input['r'];
}
if(empty($rcode)){
    $rcode = random(64);
}

$user = cache_read($rcode);
$site = pdo_get('imeepos_runner4_member_site',array('openid'=>$user['openid']));
$user['siteroot'] = $site['siteroot'];
$user['uniacid'] = $site['uniacid'];
$user['acid'] = $site['acid'];

load()->model('account');
$account = uni_fetch($site['uniacid']);
$user['account'] = $account;

$this->info = $user;
$this->msg = $site;
return $this;