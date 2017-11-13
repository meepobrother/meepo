<?php

global $_W,$_GPC;
// 扫码绑定
$input = $this->__input['encrypted'];
$rcode = trim($_GPC['r']);

if(empty($rcode)){
    $rcode = random(64);
}

load()->model('mc');
$user = mc_oauth_userinfo();
$uid = mc_openid2uid($user['openid']);

$site = pdo_get('imeepos_runner4_member_site',array('openid'=>$user['openid']));

$info = cache_read($rcode);

$data = array();
$data['openid'] = $user['openid'];
$data['uniacid'] = $info['uniacid'];
$data['acid'] = $_W['acid'];
$data['siteroot'] = $_W['siteroot'];

if(!empty($user['openid'])){
    if(empty($site)){
        pdo_insert('imeepos_runner4_member_site', $data);
        $data['id'] = pdo_insertid();
    }else{
        pdo_update('imeepos_runner4_member_site', $data, array('id'=>$site['id']));
        $data['id'] = $site['id'];
    }
    $this->info = $data;
}else{
    $this->info = 'openid 为空!';
}

itoast($this->info,'','success');
return $this;