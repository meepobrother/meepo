<?php

global $_W;
$input = $this->__input['encrypted'];

$page = intval($input['page']);
$psize = intval($input['psize']);
$page = $page > 0 ? $page : 1;
$psize = $psize > 0 ? $psize : 30;

if(isset($input['status']) && $input['status'] != 'all'){
    $status = intval($input['status']);
    $sql = "SELECT * FROM ".tablename('imeepos_runner3_tasks')." WHERE uniacid={$_W['uniacid']} AND status={$status} ORDER BY id DESC limit ".($page - 1)*$psize.",".$psize;
    $params = array();
    $list = pdo_fetchall($sql,$params);
} else {
    $sql = "SELECT * FROM ".tablename('imeepos_runner3_tasks')." WHERE uniacid={$_W['uniacid']} ORDER BY id DESC limit ".($page - 1)*$psize.",".$psize;
    $params = array();
    $list = pdo_fetchall($sql,$params);
}

foreach($list as &$li){ 
    $member = mc_fetch($li['openid'],array('uid','avatar','nickname'));
    $li['member'] = $member;
    // 任务详情
    $detail = pdo_get('imeepos_runner3_detail',array('taskid'=>$li['id']));
    unset($detail['steps']);
    $li['detail'] = $detail;
    $li['create_time'] = date('m-d H:i',$li['create_time']);
    $li['tag'] = $detail['goodsname'];
    $li['avatar'] = $member['avatar'];
    $li['nickname'] = $member['nickname'];

    //recive
    $pai = pdo_get('imeepos_runner3_recive',array('taskid'=>$li['id']));
    $reciver = pdo_get('imeepos_runner3_member',array('uniacid'=>$_W['uniacid'],'openid'=>$pai['openid']));
    $li['reciver'] = $reciver;
}
unset($li);

if(empty($list)){
    $list = array();
}
$this->info = $list;
return $this;