<?php
/**
 * [WeEngine System] Copyright (c) 2014 WE7.CC
 * WeEngine is NOT a free software, it under the license terms, visited http://www.we7.cc/ for more details.
 */
defined('IN_IA') or exit('Access Denied');


// ini_set("display_errors", "On");
// error_reporting(E_ALL | E_STRICT);


$do   = in_array($_GPC['do'], array('upload', 'delete')) ? $_GPC['do'] : 'upload';
$type = in_array($_GPC['type'], array('image','audio')) ? $_GPC['type'] : 'image';

$result = array('error' => 1, 'message' => '');
if ($do == 'delete') {
	if ($type = 'image') {
		$id = intval($_GPC['id']);
		if (!empty($id)) {
			$attachment = pdo_get('core_attachment', array('id' => $id), array('attachment', 'uniacid', 'uid'));
			if (!empty($attachment)) {
				if ($attachment['uniacid'] != $_W['uniacid'] || empty($_W['openid']) || (!empty($_W['fans']) && $attachment['uid'] != $_W['fans']['from_user']) || (!empty($_W['member']) && $attachment['uid'] != $_W['member']['uid'])) {
					return message(error(1, '无权删除！'), '', 'ajax');
				}
				load()->func('file');
				if ($_W['setting']['remote']['type']) {
					$result = file_remote_delete($attachment['attachment']);
				} else {
					$result = file_delete($attachment['attachment']);
				}
				if (!is_error($result)) {
					pdo_delete('core_attachment', array('id' => $id));
				}
				if (!is_error($result)) {
					return message(error('0'), '', 'ajax');
				} else {
					return message(error(1, $result['message']), '', 'ajax');
				}
			} else {
				return message(error(1, '图片不存在或已删除！'), '', 'ajax');
			}

		}
		return message($result, '', 'ajax');
	}
}
if ($do == 'upload') {
	if($type == 'image'){
		
	}
}
