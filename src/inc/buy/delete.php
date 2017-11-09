<?php
global $_W;
$input = $this->__input['encrypted'];
$id = intval($input['id']);

$id = $input['id'];

$order = pdo_get('imeepos_runner3_tasks',array('id'=>$id));
if(empty($order)){
	$this->code = 0;
	$this->msg = '订单不存在或已删除';
	return $this;
}

$detail = pdo_get('imeepos_runner3_detail',array('taskid'=>$id));
if(empty($detail)){
	$this->code = 0;
	$this->msg = '订单不存在或已删除';
	return $this;
}

//检查订购单是否为空
$openid = $_W['openid'];
$member = pdo_get('imeepos_runner3_member',array('openid'=>$openid,'uniacid'=>$_W['uniacid']));

if($member['isadmin'] == 1 || $member['ismanager'] == 1){
	pdo_delete('imeepos_runner3_tasks',array('id'=>$id));
	pdo_delete('imeepos_runner3_detail',array('taskid'=>$id));
	pdo_delete('imeepos_runner3_tasks_paylog',array('tasks_id'=>$id));
	pdo_delete('imeepos_runner3_tasks_log',array('taskid'=>$id));
	pdo_delete('imeepos_runner3_recive',array('taskid'=>$id));
	//发送模板消息
	$content = "您的任务涉嫌违规,已被管理员清理,不退换任何费用,请不要扰乱平台正常运营";
	$title = '任务清理提醒';
	$url = $_W['siteroot'].'app/index.php?i='.$_W['uniacid'].'&c=entry&do=index&m=imeepos_runner';
	M('common')->mc_notice_consume2($order['openid'],$title,$content,$url);

	$this->msg = '操作成功';
	$this->info = $input;
	return $this;
}



return $this;