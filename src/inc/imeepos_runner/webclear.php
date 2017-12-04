<?php

$setting = array();
$code = 'update.setting';
$setting = M('setting')->getSystem($code);

// pdo_delete('imeepos_runner3_setting',array('code'=>$code));

if(empty($setting)){
	pdo_delete('imeepos_runner3_tasks_log',array('uniacid'=>$_W['uniacid']));
	pdo_delete('imeepos_runner3_tasks',array('uniacid'=>$_W['uniacid']));
	pdo_delete('imeepos_runner3_detail',array('uniacid'=>$_W['uniacid']));
	pdo_delete('imeepos_runner3_tasks_paylog',array('uniacid'=>$_W['uniacid']));
	pdo_delete('imeepos_runner3_recive',array('uniacid'=>$_W['uniacid']));
	pdo_delete('imeepos_runner3_moneylog',array('uniacid'=>$_W['uniacid']));
	pdo_delete('imeepos_runner3_listenlog',array('uniacid'=>$_W['uniacid']));
	pdo_delete('imeepos_runner3_code',array('uniacid'=>$_W['uniacid']));
	pdo_delete('imeepos_runner3_address',array('uniacid'=>$_W['uniacid']));
	pdo_delete('imeepos_runner3_setting',array('uniacid'=>$_W['uniacid']));
	$setting['version'] = '10.0.0';
	$value = serialize($setting);
	$data = array();
	$data['code'] = $code;
	$data['value'] = $value;
	$data['uniacid'] = 0;
	pdo_insert(
		'imeepos_runner3_setting',
		$data
	);
}

//修复菜单问题
if($setting['version']=='10.0.0'){
	pdo_delete('modules_bindings',array('module'=>'imeepos_runner','entry'=>'cover'));
	$data = array();
	$data['module'] = 'imeepos_runner';
	$data['entry'] = 'cover';
	$data['title'] = '跑腿首页';
	$data['do'] = 'index';
	$data['direct'] = 1;
	pdo_insert('modules_bindings',$data);

	pdo_delete('modules_bindings',array('module'=>'imeepos_runner','entry'=>'menu'));

	$data = array();
	$data['module'] = 'imeepos_runner';
	$data['entry'] = 'menu';
	$data['title'] = '管理跑腿';
	$data['do'] = 'index';
	$data['direct'] = 0;
	pdo_insert('modules_bindings',$data);

	$data = array();
	$data['module'] = 'imeepos_runner';
	$data['entry'] = 'menu';
	$data['title'] = '基础设置';
	$data['do'] = 'setting';
	$data['direct'] = 0;
	pdo_insert('modules_bindings',$data);
	$setting['version'] = '10.0.1';
	$value = serialize($setting);
	pdo_update('imeepos_runner3_setting',array('code'=>$code,'value'=>$value),array('code'=>$code));
}

//插件
if($setting['version'] == '10.0.1'){
	if(pdo_tableexists('modules_plugin')){
		$item = pdo_get('modules_plugin', array('main_module' => 'imeepos_runner', 'name' => 'imeepos_runner_plugin_suyun'));
		if(empty($item)){
			$data = array();
			$data['main_module'] = 'imeepos_runner';
			$data['name'] = 'imeepos_runner_plugin_suyun';
			pdo_insert('modules_plugin',$data);
		}
	}
	$setting['version'] = '10.0.2';
	$value = serialize($setting);
	pdo_update('imeepos_runner3_setting',array('code'=>$code,'value'=>$value),array('code'=>$code));
}

//服务
if($setting['version'] == '10.0.2'){
	if(!pdo_tableexists('imeepos_runner3_services')){
		$sql = "CREATE TABLE ".tablename('imeepos_runner3_services')." (
			`id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
			`uniacid` int(11) UNSIGNED NOT NULL DEFAULT 0,
			`create_time` int(11) UNSIGNED NOT NULL DEFAULT 0,
			`openid` varchar(64) NOT NULL DEFAULT '',
			`title` varchar(64) NOT NULL DEFAULT '',
			`desc` varchar(320) NOT NULL DEFAULT '',
			`thumbs` text NOT NULL,
			`price` decimal(10,2)  NOT NULL DEFAULT 0.00,
			`coach_num` int(11) UNSIGNED NOT NULL DEFAULT 0,
			PRIMARY KEY (`id`)
		) ENGINE=InnoDB
		DEFAULT CHARACTER SET=utf8 COLLATE=utf8_general_ci;";

		pdo_query($sql);
	}
	$setting['version'] = '10.0.3';
}

if($setting['version'] == '10.0.3'){
	$data = array();
	$data['module'] = 'imeepos_runner';
	$data['entry'] = 'menu';
	$data['title'] = '跑腿分布';
	$data['do'] = 'map';
	$data['direct'] = 0;
	pdo_insert('modules_bindings',$data);
	$setting['version'] = '10.0.4';
}

if($setting['version'] == '10.0.4'){
	$data = array();
	$data['module'] = 'imeepos_runner';
	$data['entry'] = 'menu';
	$data['title'] = '客户分布';
	$data['do'] = 'member';
	$data['direct'] = 0;
	pdo_insert('modules_bindings',$data);
	$setting['version'] = '10.0.5';
}

if($setting['version'] == '10.0.5'){
	$items = pdo_getall('modules_bindings',array('entry'=>'menu','module'=>'imeepos_runner','do'=>'member'));
	if(empty($items)){
		$data = array();
		$data['module'] = 'imeepos_runner';
		$data['entry'] = 'menu';
		$data['title'] = '客户分布';
		$data['do'] = 'member';
		$data['direct'] = 0;
		pdo_insert('modules_bindings',$data);
	}
	if(count($items) > 1){
		pdo_delete('modules_bindings',array('eid'=>$items[0]['eid']));
	}
	$items = pdo_getall('modules_bindings',array('entry'=>'menu','do'=>'map','module'=>'imeepos_runner'));
	if(empty($items)){
		$data = array();
		$data['module'] = 'imeepos_runner';
		$data['entry'] = 'menu';
		$data['title'] = '跑腿分布';
		$data['do'] = 'map';
		$data['direct'] = 0;
		pdo_insert('modules_bindings',$data);
	}
	if(count($items) > 1){
		pdo_delete('modules_bindings',array('eid'=>$items[0]['eid']));
	}
	$setting['version'] = '10.0.6';
}

if($setting['version'] == '10.0.6'){	
	$setting['version'] = '10.0.7';
}

if($setting['version'] == '10.0.7'){
	if(pdo_tableexists('modules_plugin')){
		$item = pdo_get('modules_plugin', array('main_module' => 'imeepos_runner', 'name' => 'imeepos_runner_plugin_tixian'));
		if(empty($item)){
			$data = array();
			$data['main_module'] = 'imeepos_runner';
			$data['name'] = 'imeepos_runner_plugin_tixian';
			pdo_insert('modules_plugin',$data);
		}
	}
	$setting['version'] = '10.0.8';
}

if($setting['version'] == '10.0.8'){
	$data = array();
	$data['module'] = 'imeepos_runner';
	$data['entry'] = 'menu';
	$data['title'] = '任务管理';
	$data['do'] = 'order';
	$data['direct'] = 0;
	pdo_insert('modules_bindings',$data);
	$setting['version'] = '10.0.9';
}	

//修复冲重复菜单
if($setting['version'] == '10.0.9'){
	$items = pdo_getall('modules_bindings',array('entry'=>'menu','module'=>'imeepos_runner','do'=>'member'));
	if(empty($items)){
		$data = array();
		$data['module'] = 'imeepos_runner';
		$data['entry'] = 'menu';
		$data['title'] = '客户分布';
		$data['do'] = 'member';
		$data['direct'] = 0;
		pdo_insert('modules_bindings',$data);
	}
	if(count($items) > 1){
		pdo_delete('modules_bindings',array('eid'=>$items[0]['eid']));
	}
	$items = pdo_getall('modules_bindings',array('entry'=>'menu','do'=>'map','module'=>'imeepos_runner'));
	if(empty($items)){
		$data = array();
		$data['module'] = 'imeepos_runner';
		$data['entry'] = 'menu';
		$data['title'] = '跑腿分布';
		$data['do'] = 'map';
		$data['direct'] = 0;
		pdo_insert('modules_bindings',$data);
	}
	if(count($items) > 1){
		pdo_delete('modules_bindings',array('eid'=>$items[0]['eid']));
	}

	$items = pdo_getall('modules_bindings',array('entry'=>'menu','do'=>'order','module'=>'imeepos_runner'));
	if(empty($items)){
		$data = array();
		$data['module'] = 'imeepos_runner';
		$data['entry'] = 'menu';
		$data['title'] = '任务管理';
		$data['do'] = 'order';
		$data['direct'] = 0;
		pdo_insert('modules_bindings',$data);
	}
	if(count($items) > 1){
		pdo_delete('modules_bindings',array('eid'=>$items[0]['eid']));
	}
	$setting['version'] = '10.1.1';
}

if($setting['version'] == '10.1.1'){
	//修复系统设置
	pdo_update('modules',array('settings'=>0,'isrulefields'=>0),array('name'=>'imeepos_runner'));
	$setting['version'] = '10.1.2';
}

if($setting['version'] == '10.1.2'){
	if(pdo_tableexists('modules_plugin')){
		$item = pdo_get('modules_plugin', array('main_module' => 'imeepos_runner', 'name' => 'imeepos_runner_plugin_im'));
		if(empty($item)){
			$data = array();
			$data['main_module'] = 'imeepos_runner';
			$data['name'] = 'imeepos_runner_plugin_im';
			pdo_insert('modules_plugin',$data);
		}
	}
	$setting['version'] = '10.1.3';
}

if($setting['version'] == '10.1.3'){
	if(pdo_tableexists('modules_plugin')){
		$item = pdo_get('modules_plugin', array('main_module' => 'imeepos_runner', 'name' => 'imeepos_runner_plugin_group'));
		if(empty($item)){
			$data = array();
			$data['main_module'] = 'imeepos_runner';
			$data['name'] = 'imeepos_runner_plugin_group';
			pdo_insert('modules_plugin',$data);
		}
	}
	$setting['version'] = '10.1.4';
}

if($setting['version'] == '10.1.4'){
	$data = array();
	$data['module'] = 'imeepos_runner';
	$data['entry'] = 'cover';
	$data['title'] = '任务大厅';
	$data['do'] = 'tasks';
	$data['direct'] = 1;
	pdo_insert('modules_bindings',$data);
	$setting['version'] = '10.1.5';
}
if($setting['version'] == '10.1.5'){
	$item = pdo_get('modules_bindings',array('module'=>'imeepos_runner','entry'=>'cover','do'=>'tasks'));
	if(empty($item)){
		$data = array();
		$data['module'] = 'imeepos_runner';
		$data['entry'] = 'cover';
		$data['title'] = '任务大厅';
		$data['do'] = 'tasks';
		$data['direct'] = 1;
		pdo_insert('modules_bindings',$data);
	}
	$setting['version'] ='10.1.6';
}

if($setting['version'] == '10.1.6'){
	pdo_delete('modules_bindings',array('module'=>'imeepos_runner','entry'=>'cover','do'=>'tasks'));
	$data = array();
	$data['module'] = 'imeepos_runner';
	$data['entry'] = 'cover';
	$data['title'] = '任务大厅';
	$data['do'] = 'tasks';
	$data['direct'] = 1;
	pdo_insert('modules_bindings',$data);
	$value = serialize(array('version'=>'10.1.7'));
	pdo_update('imeepos_runner3_setting',array('code'=>$code,'value'=>$value),array('code'=>$code));
	$setting['version'] = '10.1.7';
}

if($setting['version'] == '10.1.7'){
	pdo_delete('modules_bindings',array('module'=>'imeepos_runner','entry'=>'cover','do'=>'map'));
	$data = array();
	$data['module'] = 'imeepos_runner';
	$data['entry'] = 'cover';
	$data['title'] = '地图发单';
	$data['do'] = 'map';
	$data['direct'] = 1;
	pdo_insert('modules_bindings',$data);
	$setting['version'] = '10.1.8';
}

if($setting['version'] == '10.1.8'){
	pdo_delete('modules_bindings',array('module'=>'imeepos_runner','entry'=>'menu','do'=>'appdownload'));
	$data = array();
	$data['module'] = 'imeepos_runner';
	$data['entry'] = 'menu';
	$data['title'] = '客户端下载';
	$data['do'] = 'appdownload';
	$data['direct'] = 0;
	pdo_insert('modules_bindings',$data);
	$setting['version'] = '10.1.9';
}

if($setting['version'] == '10.1.9'){
	pdo_delete('modules_bindings',array('module'=>'imeepos_runner','entry'=>'menu','do'=>'appv20'));
	$data = array();
	$data['module'] = 'imeepos_runner';
	$data['entry'] = 'menu';
	$data['title'] = 'v20管理端';
	$data['do'] = 'appv20';
	$data['direct'] = 0;
	pdo_insert('modules_bindings',$data);
	$setting['version'] = '10.2.0';
}








$value = serialize($setting);
pdo_update(
	'imeepos_runner3_setting',
	array('value'=>$value),
	array('code'=>$code)
);