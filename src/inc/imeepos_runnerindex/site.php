<?php
/**
 * 跑腿首页-定制模块微站定义
 *
 * @author imeepos
 * @url 
 */
defined('IN_IA') or exit('Access Denied');
load()->model('setting');
class Imeepos_runnerindexModuleSite extends WeModuleSite {

	public function doMobileIndex() {
		//这个操作被定义用来呈现 功能封面
		global $_W,$_GPC;
		$code = 'imeepos.runner.index.setting';
		$setting = setting_load($code);
		if(empty($setting)){
			$setting = $this->getDefault();
		}
		print_r($setting);
		include $this->template('index');
	}
	public function doWebSetting() {
		//这个操作被定义用来呈现 管理中心导航菜单
		global $_W,$_GPC;
		
		$code = 'imeepos.runner.index.setting';
		$setting = setting_load($code);
		if(empty($setting)){
			$setting = $this->getDefault();
		}
		if($_GPC['act'] == 'save'){
			setting_save($code,$_GPC);
		}
		include $this->template('setting');
	}

	private function getDefault(){
		$setting = array();
		$setting['advs'] = array(
			array(
				'title'=>'广告标题',
				'image'=>'',
				'link'=>''
			),
			array(
				'title'=>'广告标题',
				'image'=>'',
				'link'=>''
			),
		);

		$setting['navs'] = array(
			array(
				'title'=>'导航标题',
				'image'=>'',
				'link'=>''
			),
			array(
				'title'=>'导航标题',
				'image'=>'',
				'link'=>''
			),
		);

		$setting['footers'] = array(
			array(
				'title'=>'首页',
				'image'=>'',
				'link'=>''
			),
			array(
				'title'=>'发布',
				'image'=>'',
				'link'=>''
			),
			array(
				'title'=>'我的',
				'image'=>'',
				'link'=>''
			),
		);
		return $setting;
	}

}