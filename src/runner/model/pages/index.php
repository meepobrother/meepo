<?php
global $_W;
$input = $this->__input['encrypted'];


$code = 'index.setting';
$setting = M('setting')->getValue($code);

// 首页广告
$code = 'index.advs';
$advs = M('setting')->getValue($code);

$code = 'index.share';
$share = M('setting')->getValue($code);

$code = 'index.search.filter';
$filter = M('setting')->getValue($code);

$data = array();
$data['advs'] = $advs;
$data['filter'] = $filter;
$data['share'] = $filter;
$data['setting'] = $setting;

$this->info = $data;
return $this;