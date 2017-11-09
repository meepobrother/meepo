<?php

/**
 * model基类 用于操作数据库
 */
class BaseModel{

	/**
	 * [$table 数据库名称]
	 * @var [string]
	 */
	public $table;
	/**
	 * [getInfo 根据主键获取单条数据]
	 * @param  integer $id [主键值]
	 * @return array      [返回单条数据]
	 */
	public function getInfo($id = 0){
		global $_W;
        $item = pdo_get($this->table,array('id'=>$id));
        return $item;
	}
	/**
	 * 删除单条数据
	 * @param int $id [要删除数据主键值]
	 * @return  bool [删除操作是否成功]
	 */
	public function delete($id){
        if(empty($id)){
            return false;
        }
        pdo_delete($this->table,array('id'=>$id));
        return true;
    }
    /**
     * 获取所有记录
     * @param  array  $params [查询条件]
     * @return array        [返回结果数组]
     */
    public function getall($params = array()){
        global $_W,$_GPC;
        $params['uniacid'] = $_W['uniacid'];
        $list = pdo_getall($this->table,$params);
        return $list;
    }
    public function getList($page,$where ="",$params = array(),$psize = 20,$order = " create_time DESC "){
        global $_W,$_GPC;
        if(empty($page)){
            $page = 1;
        }
        $total = 0;
        $params['uniacid'] = $_W['uniacid'];
        $where .= " AND uniacid = :uniacid";
        $sql = "SELECT * FROM ".tablename($this->table)." WHERE 1 {$where} ORDER BY {$order} limit ".(($page-1)*$psize).",".$psize;
        $result = array();
        $result['list'] = pdo_fetchall($sql,$params);
        $sql = "SELECT COUNT(*) FROM ".tablename($this->table)." WHERE 1 {$where}";
        $total = pdo_fetchcolumn($sql,$params);

        $result['pager'] = pagination($total, $page, $psize);
        if(empty($result)){
            return array();
        }else{
            return $result;
        }
    }
    /**
     * [update 更新单条数据]
     * @param  [type] $data [要更新的数据源]
     * @return [type]       [返回更新后的数据]
     */
    public function update($data){
        global $_W;
        $data['uniacid'] = $_W['uniacid'];
        if(empty($data['id'])){
            pdo_insert($this->table,$data);
            $data['id'] = pdo_insertid();
        }else{
            //更新
            pdo_update($this->table,$data,array('uniacid'=>$_W['uniacid'],'id'=>$data['id']));
        }
        return $data;
    }
    /**
     * [install 数据库安装脚本]
     * @return [type] [是否安装成功]
     */
    public function install(){
    	return true;
    }

}