<?php
/**
 * 小程序生成器模块小程序接口定义
 *
 * @author imeepos
 * @url 
 */
defined('IN_IA') or exit('Access Denied');

class Meepo_wxappModuleWxapp extends WeModuleWxapp {
	public function doPageTest(){
		global $_GPC, $_W;
		$errno = 0;
		$message = '返回消息';
		$data = array();
		return $this->result($errno, $message, $data);
	}
}