<?php

/**
 * @Author: imeepos
 * @Date:   2016-09-06 08:36:03
 * @Last Modified by:   Administrator
 * @Last Modified time: 2016-09-07 08:27:16
 */

class meepoCore{

	public $basepath = '';

	public function setBasePath($basepath = ''){
		if(empty($basepath)){
			$basepath = IA_ROOT.'/addons/';
		}
		$this->basepath = $basepath;
	}

	public function getBasePath(){
		return $this->basepath;
	}

	/**
	 * [doApi 调用API借口]
	 * @return [type] [description]
	 */
	static function api($name){
		static $coreapi = array();
        if(empty($coreapi[$name])) {
            include IA_ROOT.'/addons/imeepos_print/api/'.$name.'.php';
            $a = $name.'Api';
            $coreapi[$name] = new $a();
        }
        return $coreapi[$name];
	}
	/**
	 * [doModel 调用model]
	 * @return [type] [description]
	 */
	static function model($name){
		static $coremodel = array();
        if(empty($coremodel[$name])) {
            include IA_ROOT.'/addons/imeepos_print/model/'.$name.'.mod.php';
            $coremodel[$name] = new $name();
        }
        return $coremodel[$name];
	}

	static function create($name){
		include IA_ROOT.'/addons/imeepos_print/createDB/'.$name.'.php';
	}
	/**
	 * [json 返回json数据]
	 * @return [type] [description]
	 */
	public function json($status = -1,$message = '',$info = array()){
		$data = array();
		$data['status'] = -1;
		$data['message'] = '欢迎来到米波网络科技有限公司';
		$data['info'] = $info;

		die(json_encode($data));
	}

}