<?php
global $_W;
$input = $this->__input['encrypted'];

$start = isset($input['start']) ? intval($input['start']) : 0;
$len = isset($input['len']) ? intval($input['len']): 10;

$goods = trim($input['goods']);


// type = 1预约取 type = 0 及时取
$where = " AND t.uniacid=:uniacid";
$params = array(':uniacid'=>$_W['uniacid']);


if(!empty($goods)){
	$where .= " AND d.goodsname =:goodsname";
	$params[':goodsname'] = $goods;
}

$where .= " AND ( t.type = 0 OR t.type = 1 )";

$sql2 = "SELECT t.* FROM ".tablename('imeepos_runner3_tasks')." as t LEFT JOIN ".
		tablename('imeepos_runner3_detail')." as d ON d.taskid = t.id WHERE 1 {$where} order by t.create_time desc limit {$start},{$len}";
$list = pdo_fetchall($sql2,$params);

foreach ($list as &$li) {
	$member = pdo_get('imeepos_runner3_member',array('openid'=>$li['openid'],'uniacid'=>$_W['uniacid']));
	$li['nickname'] = $member['nickname'];
	$li['avatar']= $member['avatar'];

	$detail = pdo_get('imeepos_runner3_detail',array('taskid'=>$li['id']));

	$li['tag'] = empty($detail['goodsname']) ? '帮我送' : $detail['goodsname'];

	$li['media_src'] = !empty($li['media_src']) ? $li['media_src'] : false;
	$li['media_id'] = !empty($li['media_id']) ? $li['media_id'] : false;
	//保存三天 三天后刚过期
	if(($li['create_time'] + 3*24*60*60) > time()){
		$li['hasMedia'] = !empty($li['media_id']) ? true : false;
	}else{
		$li['hasMedia'] = false;
	}

	$li['sendaddress'] = $detail['sendaddress'];
	$li['receiveaddress'] = $detail['receiveaddress'];
	$li['duration'] = $detail['duration'];
	$li['float_distance'] = $detail['float_distance'];
	$li['base_fee'] = $detail['base_fee'];

	if($li['status'] == 0){
	    $li['status_title'] = '待接单';
	}
	if($li['status'] == 1){
	    $li['status_title'] = '待接单';
	}
	if($li['status'] == 2){
	    $li['status_title'] = '配送中';
	}
	if($li['status'] == 3){
	    $li['status_title'] = '待确认';
	}
	if($li['status'] == 4){
	    $li['status_title'] = '已确认';
	}
	if($li['status'] == 5){
	    $li['status_title'] = '已结款';
	}
	if($li['status'] == 6){
	    $li['status_title'] = '已退款';
	}

	$li['pickupdate'] = $detail['pickupdate'];
    if($li['pickupdate'] > 0 ){
        $li['pickupdate'] = date('m-d H:i',$li['pickupdate']);
    }else{
        $li['pickupdate'] = '越快越好';
    }

    $li['lat'] = $detail['receivelat'];
    $li['lng'] = $detail['receivelon'];
	$li['goodscost'] = $detail['goodscost'];
	$li['create_time'] = date('m-d H:i',$li['create_time']);

}
unset($li);

$this->info = $list;

return $this;
