<?php

global $_W,$_GPC;
$role = $_W['role'];
$uid = $_W['uid'];
//获取mid


if(!pdo_fieldexists('imeepos_runner3_member','isadmin')){
    pdo_query("ALTER TABLE ".tablename('imeepos_runner3_member')." ADD COLUMN `isadmin` tinyint(2) DEFAULT '0'");
}
if(!pdo_fieldexists('imeepos_runner3_member','ismanager')){
    pdo_query("ALTER TABLE ".tablename('imeepos_runner3_member')." ADD COLUMN `ismanager` tinyint(2) DEFAULT '0'");
}

if($_GPC['def'] == 1){
	pdo_debug();
	pdo_query("DROP table ".tablename('imeepos_runner3_member'));
	$table = 'imeepos_runner3_member';
	if(!pdo_tableexists($table)){
		$sql = "CREATE TABLE ".tablename('imeepos_runner3_member')." (
			`id` int(11) unsigned NOT NULL AUTO_INCREMENT,
			`uid` int(11) unsigned NOT NULL DEFAULT '0',
			`uniacid` int(11) unsigned NOT NULL DEFAULT '0',
			`status` tinyint(2) unsigned NOT NULL DEFAULT '0',
			`groupid` int(11) unsigned NOT NULL DEFAULT '0',
			`time` int(11) DEFAULT NULL DEFAULT 0,
			`openid` varchar(64) DEFAULT NULL DEFAULT '',
			`online` tinyint(2) DEFAULT '0',
			`nickname` varchar(32) DEFAULT '',
			`avatar` varchar(320) DEFAULT NULL,
			`gender` tinyint(2) DEFAULT '0',
			`city` varchar(32) DEFAULT '',
			`provice` varchar(32) DEFAULT '',
			`realname` varchar(32) DEFAULT '',
			`mobile` varchar(32) DEFAULT '',
			`xinyu` int(11) DEFAULT '0',
			`isrunner` tinyint(2) DEFAULT '0',
			`card_image1` varchar(320) DEFAULT '',
			`card_image2` varchar(320) DEFAULT '',
			`cardnum` varchar(64) DEFAULT '',
			`lat` varchar(64) DEFAULT '',
			`lng` varchar(64) DEFAULT '',
			`oauth_code` varchar(64) DEFAULT '',
			`level_id` int(11) DEFAULT '0',
			`hash` varchar(32) DEFAULT '',
			`description` varchar(320) DEFAULT '',
			`desc` varchar(320) DEFAULT '',
			`forbid` int(4) DEFAULT '0',
			`card_image3` varchar(320) DEFAULT '',
			`forbid_time` int(11) DEFAULT '0',
			`isadmin` tinyint(2) NOT NULL DEFAULT '0',
			`ismanager` tinyint(2) NOT NULL DEFAULT '0',
			PRIMARY KEY (`id`)
		) ENGINE=MyISAM DEFAULT CHARSET=utf8";
		pdo_query($sql);
	}

	pdo_insert('imeepos_runner3_member',array('uid'=>2,'uniacid'=>$_W['uniacid']));
	pdo_insert('imeepos_runner3_member',array('uid'=>3,'uniacid'=>$_W['uniacid']));
	pdo_insert('imeepos_runner3_member',array('uid'=>4,'uniacid'=>$_W['uniacid']));
	pdo_insert('imeepos_runner3_member',array('uid'=>5,'uniacid'=>$_W['uniacid']));
	pdo_insert('imeepos_runner3_member',array('uid'=>6,'uniacid'=>$_W['uniacid']));
	pdo_insert('imeepos_runner3_member',array('uid'=>7,'uniacid'=>$_W['uniacid']));

	$id = pdo_insertid();
	print_r('数据插入'.$id);
}
if($_GPC['def'] == 2){
	pdo_query("DROP table ".tablename("imeepos_runner3_member"));
}

if($_W['isajax']){
	$openid = trim($_GPC['openid']);
	$action = trim($_GPC['action']);	
	$data = array();
	$data['code'] = 1;
	$data['info'] = array();
	$data['msg'] = '操作成功';
	if($action == 'isadmin'){
		if($role == 'founder'){
			$member = pdo_get('imeepos_runner3_member',array('openid'=>$openid,'uniacid'=>$_W['uniacid']));
			if(empty($member)){
				$data['code'] = 0;
				$data['msg'] = '会员不保存在或已删除';
				die(json_encode($data));
			}
			if($member['isadmin'] == 1){
				pdo_update('imeepos_runner3_member',array('isadmin'=>0),array('id'=>$member['id']));
				$data['msg'] = '操作成功';
				die(json_encode($data));
			}else{
				pdo_update('imeepos_runner3_member',array('isadmin'=>1),array('id'=>$member['id']));
				$data['msg'] = '操作成功';
				die(json_encode($data));
			}
		}else{
			$data['code'] = 0;
			$data['msg'] = '权限错误';
			die(json_encode($data));
		}
	}

	if($action == 'isrunner'){
		if($_W['uid'] > 0){
			$member = pdo_get('imeepos_runner3_member',array('openid'=>$openid,'uniacid'=>$_W['uniacid']));
			if(empty($member)){
				$data['code'] = 0;
				$data['msg'] = '会员不保存在或已删除';
				die(json_encode($data));
			}
			if($member['isrunner'] == 1){
				pdo_update('imeepos_runner3_member',array('isrunner'=>0),array('id'=>$member['id']));
				$data['msg'] = '操作成功';
				die(json_encode($data));
			}else{
				pdo_update('imeepos_runner3_member',array('isrunner'=>1),array('id'=>$member['id']));
				pdo_update('imeepos_runner3_member',array('status'=>1),array('id'=>$member['id']));
				$data['msg'] = '操作成功';
				die(json_encode($data));
			}
		}else{
			$data['code'] = 0;
			$data['msg'] = '权限错误';
			die(json_encode($data));
		}
	}

	if($action == 'ismanager'){
		if($_W['uid'] > 0){
			$member = pdo_get('imeepos_runner3_member',array('openid'=>$openid,'uniacid'=>$_W['uniacid']));
			if(empty($member)){
				$data['code'] = 0;
				$data['msg'] = '会员不保存在或已删除';
				die(json_encode($data));
			}
			if($member['ismanager'] == 1){
				pdo_update('imeepos_runner3_member',array('ismanager'=>0),array('id'=>$member['id']));
				$data['msg'] = '操作成功';
				die(json_encode($data));
			}else{
				pdo_update('imeepos_runner3_member',array('ismanager'=>1),array('id'=>$member['id']));
				$data['msg'] = '操作成功';
				die(json_encode($data));
			}
		}else{
			$data['code'] = 0;
			$data['msg'] = '权限错误';
			die(json_encode($data));
		}
	}

	if($action == 'delete'){
		pdo_delete('imeepos_runner3_member',array('openid'=>$openid));
		die(json_encode($data));
	}

	if($action == 'xinyu.chong'){
		$member = pdo_get('imeepos_runner3_member',array('openid'=>$openid,'uniacid'=>$_W['uniacid']));
		$value = intval($_GPC['value']);
		$xinyu = $member['xinyu'] + $value;
		pdo_update('imeepos_runner3_member',array('xinyu'=>$xinyu),array('openid'=>$openid,'uniacid'=>$_W['uniacid']));
		die(json_encode($data));
	}
	$data['msg'] = '系统异常';
	die(json_encode($data));
}

$page = intval($_GPC['page']);
$page = $page > 0 ? $page : 1;
$where = "";
$params = array();
if($_GPC['isadmin'] == 'on'){
	$where .= " AND isadmin = 1";
}
if($_GPC['ismanager'] == 'on'){
	$where .= " AND ismanager = 1";
}
if($_GPC['isrunner'] == 'on'){
	$where .= " AND isrunner = 1";
}

$list = M('member')->getList($page,$where,$params);
include $this->template('index');