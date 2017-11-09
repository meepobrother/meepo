<?php

class BaseSite extends WeModuleSite{
	/**
	 * [doWeb 后台操作]
	 * @param  array  $params [后台操作参数]
	 * @return [type]         [无]
	 */
	public function doWeb($params = array()){
		global $_W,$_GPC;
		$do = $params['do'] ? $params['do'] : 'index';
		$act = $params['act'] ? $params['act'] : '';
		$model = $params['module'];
	    $_GPC['do'] = $do;

	    if ($_GPC['act'] == 'edit') {
	        $id = intval($_GPC['id']);
	        if($_W['ispost']){
	            $data = array();
	            $data['uniacid'] = $_W['uniacid'];
	            $data['create_time'] = time();
	            if(!empty($id)){
	                $data['id'] = $id;
	                unset($data['create_time']);
	            }
	            M($model)->update($data);
	            message('保存成功',$this->createWebUrl('role'),'success');
	        }
	        $item = M($model)->getInfo($id);
	        include $this->template('role_edit');
	        exit();
	    }
	    if ($_GPC['act'] == 'delete') {
	        $id = intval($_GPC['id']);
	        if(empty($id)){
	            if($_W['ispost']){
	                $data = array();
	                $data['status'] = 1;
	                $data['message'] = '参数错误';
	                die(json_encode($data));
	            }else{
	                message('参数错误',referer(),'error');
	            }
	        }
	        M($model)->delete($id);
	        if($_W['ispost']){
	            $data = array();
	            $data['status'] = 1;
	            $data['message'] = '操作成功';
	            die(json_encode($data));
	        }else{
	            message('删除成功',referer(),'success');
	        }
	    }
	    $page = !empty($_GPC['page'])?intval($_GPC['page']):1;
	    $where = "";
		$list = M($model)->getList($page,$where);
	    include $this->template($do);
	}
}