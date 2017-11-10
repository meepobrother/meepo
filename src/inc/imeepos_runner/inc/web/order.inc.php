<?php
global $_W,$_GPC;

$page = intval($_GPC['page']);
$page = $page > 0 ? $page : 1;

$psize = 10;
$where = "";
$params = array(':uniacid'=>$_W['uniacid']);


$sql = "SELECT t.type as tasktype,t.id as meepoid,t.status,t.openid,t.create_time,d.* FROM ".tablename('imeepos_runner3_tasks')." as t LEFT JOIN ".
		tablename('imeepos_runner3_detail')." as d ON d.taskid=t.id WHERE t.uniacid=:uniacid ORDER BY t.create_time DESC limit ".($page-1)*$psize.",".$psize;
$params = array(':uniacid'=>$_W['uniacid']);

$list = pdo_fetchall($sql,$params);

$sql = "SELECT COUNT(*) FROM ".tablename('imeepos_runner3_tasks')." WHERE uniacid = :uniacid";
$total = pdo_fetchcolumn($sql,$params);

$pager = pagination($total, $page, $psize);

foreach($list as &$li){
	$recive = pdo_get('imeepos_runner3_recive',array('taskid'=>$li['id']));
	$reciver = pdo_get('imeepos_runner3_member',array('openid'=>$recive['openid'],'uniacid'=>$_W['uniacid']));
	$li['recive_time'] = date('m-d H:i',$recive['create_time']);
	$li['reciver'] = $reciver;

	$sender = pdo_get('imeepos_runner3_member',array('openid'=>$li['openid'],'uniacid'=>$_W['uniacid']));
	$li['sender']= $sender;
	$sql = "SELECT * FROM ".tablename('imeepos_runner3_tasks_paylog')." WHERE uniacid=:uniacid AND tasks_id=:tasks_id AND status>0";
	$params = array(':uniacid'=>$_W['uniacid'],':tasks_id'=>$li['meepoid']);
	$paylogs = pdo_fetchall($sql,$params);
	
	foreach($paylogs as &$pay){
		$pay['create_time'] = date('m-d H:i',$pay['create_time']);
	}
	unset($pay);
	$li['paylogs'] = $paylogs;
	$li['create_time'] = date('m-d H:i',$li['create_time']);
}

unset($li);
include $this->template('order');