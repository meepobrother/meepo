<?php
/**
 * [WeEngine System] Copyright (c) 2013 WE7.CC
 * $sn$
 */
defined('IN_IA') or exit('Access Denied');
class WeiXinPay extends pay{
	public $wxpay;
	public function __construct() {
		global $_W;
		$setting = uni_setting($_W['uniacid']);
		$wxpay = $setting['payment']['wechat'];
		if (intval($wxpay['switch']) == 3) {
			$oauth_account = uni_setting($wxpay['service'], array('payment'));
			$oauth_acid = pdo_getcolumn('uni_account', array('uniacid' => $wxpay['service']), 'default_acid');
			$oauth_appid = pdo_getcolumn('account_wechats', array('acid' => $oauth_acid), 'key');
			$this->wxpay = array(
				'appid' => $oauth_appid,
				'mch_id' => $oauth_account['payment']['wechat_facilitator']['mchid'],
				'sub_mch_id' => $wxpay['sub_mch_id'],
				'key' => $oauth_account['payment']['wechat_facilitator']['signkey'],
				'notify_url' => $_W['siteroot'] . 'payment/wechat/notify.php',
			);
		} else {
			$this->wxpay = array(
				'appid' => $_W['account']['key'],
				'mch_id' => $wxpay['mchid'],
				'key' => $wxpay['apikey'],
				'notify_url' => $_W['siteroot'] . 'payment/wechat/notify.php',
			);
		}
	}

	public function array2url($params) {
		$str = '';
		$ignore = array('coupon_refund_fee', 'coupon_refund_count');
		foreach($params as $key => $val) {
			if((empty($val) || is_array($val)) && !in_array($key, $ignore)) {
				continue;
			}
			$str .= "{$key}={$val}&";
		}
		$str = trim($str, '&');
		return $str;
	}

	public function bulidSign($params) {
		unset($params['sign']);
		ksort($params);
		$string = $this->array2url($params);
		$string = $string . "&key={$this->wxpay['key']}";
		$string = md5($string);
		$result = strtoupper($string);
		return $result;
	}

	/*
	 * 解析微信返回的xml
	 */
	public function parseResult($result) {
		if(substr($result, 0 , 5) != "<xml>"){
			return $result;
		}
		$result = json_decode(json_encode(isimplexml_load_string($result, 'SimpleXMLElement', LIBXML_NOCDATA)), true);
		if(!is_array($result)) {
			return error(-1, 'xml结构错误');
		}
		if((isset($result['return_code']) && $result['return_code'] != 'SUCCESS') || ($result['err_code'] == 'ERROR' && !empty($result['err_code_des']))) {
			$msg = empty($result['return_msg']) ? $result['err_code_des'] : $result['return_msg'];
			return error(-1, $msg);
		}
		if($this->bulidsign($result) != $result['sign']) {
			return error(-1, '验证签名出错');
		}
		return $result;
	}

	/*
	 * 请求微信接口并解析返回结果
	 */
	public function requestApi($url, $params, $extra = array()) {
		load()->func('communication');
		$xml = array2xml($params);
		$response = ihttp_request($url, $xml, $extra);
		if(is_error($response)) {
			return $response;
		}
		$result = $this->parseResult($response['content']);
		return $result;
	}

	/*
	 * 转换短网址
	 * */
	public function shortUrl($url) {
		$params = array(
			'appid' => $this->wxpay['appid'],
			'mch_id' => $this->wxpay['mch_id'],
			'long_url' => $url,
			'nonce_str' => random(32),
		);
		$params['sign'] = $this->bulidSign($params);
		$result = $this->requestApi('https://api.mch.weixin.qq.com/tools/shorturl', $params);
		if(is_error($result)) {
			return $result;
		}
		return $result['short_url'];
	}

	/*
	 * 扫码模式一生成支付url
	 * */
	public function bulidNativePayurl($product_id, $short_url = true) {
		$params = array(
			'appid' => $this->wxpay['appid'],
			'mch_id' => $this->wxpay['mch_id'],
			'time_stamp' => TIMESTAMP,
			'nonce_str' => random(32),
			'product_id' => $product_id,
		);
		$params['sign'] = $this->bulidSign($params);
		$url = "weixin://wxpay/bizpayurl?" . $this->array2url($params);
		if($short_url) {
			$url = $this->shortUrl($url);
		}
		return $url;
	}

	/*
	 *
	 * */
	public function paylog2NativeUrl($params) {
		$result = $this->buildPayLog($params);
		if(is_error($result)) {
			return $result;
		}
		$url = $this->bulidNativePayurl($result);
		if(is_error($url)) {
			return $url;
		}
		return array('url' => $url, 'product_id' => $result);
	}

	/*
	 * 接口
	 * */
	public function buildUnifiedOrder($params) {
		//检测必填参数
		if(empty($params['out_trade_no'])) {
			return error(-1, '缺少统一支付接口必填参数out_trade_no:商户订单号');
		}
		if(empty($params['body'])) {
			return error(-1, '缺少统一支付接口必填参数body:商品描述');
		}
		if(empty($params['total_fee'])) {
			return error(-1, '缺少统一支付接口必填参数total_fee:总金额');
		}
		if(empty($params['trade_type'])) {
			return error(-1, '缺少统一支付接口必填参数trade_type:交易类型');
		}

		//关联参数
		if($params['trade_type'] == 'JSAPI' && empty($params['openid'])) {
			return error(-1, '统一支付接口中，缺少必填参数openid！交易类型为JSAPI时，openid为必填参数！');
		}
		if($params['trade_type'] == 'NATIVE' && empty($params['product_id'])) {
			return error(-1, '统一支付接口中，缺少必填参数product_id！交易类型为NATIVE时，product_id为必填参数！');
		}

		if(empty($params['notify_url'])) {
			$params['notify_url'] = $this->wxpay['notify_url'];
		}
		$params['appid'] = $this->wxpay['appid'];
		$params['mch_id'] = $this->wxpay['mch_id'];
		$params['spbill_create_ip'] = CLIENT_IP;
		$params['nonce_str'] = random(32);
		$params['sign'] = $this->bulidSign($params);

		$result = $this->requestApi('https://api.mch.weixin.qq.com/pay/unifiedorder', $params);
		if(is_error($result)) {
			return $result;
		}
		return $result;
	}

	/*
	 * 微信刷卡支付下单接口
	 * */
	public function buildMicroOrder($params) {
		//检测必填参数
		if(empty($params['out_trade_no'])) {
			return error(-1, '缺少刷卡支付接口必填参数out_trade_no:商户订单号');
		}
		if(empty($params['body'])) {
			return error(-1, '缺少刷卡支付接口必填参数body:商品描述');
		}
		if(empty($params['total_fee'])) {
			return error(-1, '缺少刷卡支付接口必填参数total_fee:总金额');
		}
		if(empty($params['auth_code'])) {
			return error(-1, '缺少刷卡支付接口必填参数auth_code:授权码');
		}
		$uniontid = $params['uniontid'];
		unset($params['uniontid']);

		$params['appid'] = $this->wxpay['appid'];
		$params['mch_id'] = $this->wxpay['mch_id'];
		$params['spbill_create_ip'] = CLIENT_IP;
		$params['nonce_str'] = random(32);
		if (!empty($this->wxpay['sub_mch_id'])) {
			$params['sub_mch_id'] = $this->wxpay['sub_mch_id'];
		}
		$params['sign'] = $this->bulidSign($params);
		$result = $this->requestApi('https://api.mch.weixin.qq.com/pay/micropay', $params);
		if(is_error($result)) {
			return $result;
		}
		if($result['result_code'] != 'SUCCESS') {
			return array('errno' => -10, 'message' => $result['err_code_des'], 'uniontid' => $uniontid);
		}
		return $result;
	}

	/*
	 * 刷卡支付成功后的操作.
	 * $result 数组是微信刷卡支付成功返回的数据
	 * */
	public function NoticeMicroSuccessOrder($result) {
		if(empty($result['out_trade_no'])) {
			return array('errno' => -1, 'message' => '交易单号错误');
		}
		$pay_log = pdo_get('core_paylog', array('uniontid' => $result['out_trade_no']));
		if(empty($pay_log)) {
			return array('errno' => -1, 'message' => '交易日志不存在');
		}
		$order = pdo_get('paycenter_order', array('uniontid' => $result['out_trade_no']));
		if(empty($order)) {
			return array('errno' => -1, 'message' => '交易订单不存在');
		}
		$data = array(
			//'transaction_id' => $result['transaction_id'],
			'status' => 1,
			'openid' => $result['openid'],
		);
		pdo_update('core_paylog', $data, array('uniontid' => $result['out_trade_no']));
		$data['trade_type'] = strtolower($result['trade_type']);
		$data['paytime'] = strtotime($result['time_end']);
		$data['uniontid'] = $result['out_trade_no'];
		$data['follow'] = $result['is_subscribe'] == 'Y' ? 1 : 0;
		pdo_update('paycenter_order', $data, array('uniontid' => $result['out_trade_no']));
		if(!$order['credit_status'] && $order['uid'] > 0) {
			load()->model('mc');
			$member_credit = mc_credit_fetch($order['uid']);
			$message = '';
			if($member_credit['credit1'] < $order['credit1']) {
				$message = '会员账户积分少于需扣除积分';
			}
			if($member_credit['credit2'] < $order['credit2']) {
				$message = '会员账户余额少于需扣除余额';
			}
			if(!empty($message)) {
				return array('errno' => -10, 'message' => "该订单需要扣除会员积分:{$order['credit1']}, 扣除余额{$order['credit2']}.出错:{$message}.你需要和会员沟通解决该问题.");
			}
			if($order['credit1'] > 0) {
				$status = mc_credit_update($order['uid'], 'credit1', -$order['credit1'], array(0, "会员刷卡消费,使用积分抵现,扣除{$order['credit1']}积分", 'system', $order['clerk_id'], $order['store_id'], $order['clerk_type']));
			}
			if($order['credit2'] > 0) {
				$status = mc_credit_update($order['uid'], 'credit2', -$order['credit2'], array(0, "会员刷卡消费,使用余额支付,扣除{$order['credit2']}余额", 'system', $order['clerk_id'], $order['store_id'], $order['clerk_type']));
			}
		}
		pdo_update('paycenter_order', array('credit_status' => 1), array('id' => $order['id']));
		return true;
	}

	/*
	 * 生成jspai支付与交易id
	 * */
	public function buildJsApiPrepayid($product_id) {
		$order = pdo_get('core_paylog', array('plid' => $product_id));
		if(empty($order)) {
			return error(-1, '订单不存在');
		}
		if($order['status'] == 1) {
			return error(-1, '该订单已经支付,请勿重复支付');
		}

		//公众号支付
		$jspai = array(
			'out_trade_no' => $order['uniontid'],
			'trade_type' => 'JSAPI',
			'openid' => $order['openid'],
			'body' => $order['body'],
			'total_fee' => $order['fee'] * 100,
			'attach' => $order['uniacid'],
		);
		$result = $this->buildUnifiedOrder($jspai);
		if(is_error($result)) {
			return $result;
		}
		$jspai = array(
			'appId' => $this->wxpay['appid'],
			'timeStamp' => TIMESTAMP,
			'nonceStr' => random(32),
			'package' => 'prepay_id=' . $result['prepay_id'],
			'signType' => 'MD5',
		);
		$jspai['paySign'] = $this->bulidSign($jspai);
		
		$jspai = <<<EOF
		<script type="text/javascript">
			document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
				WeixinJSBridge.invoke(
					'getBrandWCPayRequest', {
						appId:'{$jspai['appId']}',
						timeStamp:'{$jspai['timeStamp']}',
						nonceStr:'{$jspai['nonceStr']}',
						package:'{$jspai['package']}',
						signType:'MD5',
						paySign:'{$jspai['paySign']}'
					},
					function(res){
						if(res.err_msg == 'get_brand_wcpay_request：ok' ) {
						 alert('支付成功')
						} else {
						}
					}
				);
			 }, false);
		</script>
EOF;
		return $jspai;
	}

	/*
	 * 扫码支付模式一,接受微信notify,验签,返回预交易id
	 * */
	public function buildNativePrepayid($product_id) {
		$order = pdo_get('core_paylog', array('plid' => $product_id));
		if(empty($order)) {
			return error(-1, '订单不存在');
		}
		if($order['status'] == 1) {
			return error(-1, '该订单已经支付,请勿重复支付');
		}

		$data = array(
			'body' => $order['body'],
			'out_trade_no' => $order['uniontid'],
			'total_fee' => $order['fee'] * 100,
			'trade_type' => 'NATIVE',
			'product_id' => $order['plid'],
			'attach' => $order['uniacid'],
		);
		$result = $this->buildUnifiedOrder($data);
		if(is_error($result)) {
			return $result;
		}
		$params = array(
			'return_code' => 'SUCCESS',
			'appid' => $this->wxpay['appid'],
			'mch_id' => $this->wxpay['mch_id'],
			'prepay_id' => $result['prepay_id'],
			'nonce_str' =>  random(32),
			'result_code' => 'SUCCESS',
			'code_url' => $result['code_url'],
		);
		$params['sign'] = $this->bulidSign($params);
		return $params;
	}

	/*
	 * 相应微信支付的异步请求
	 * */
	public function replyErrorNotify($msg) {
		$result = array(
			'return_code' => 'FAIL',
			'return_msg' => $msg,
		);
		echo array2xml($result);
	}

	/*
	 * 关闭订单
	 *
	 * */
	public function closeOrder($trade_no) {
		$params = array(
			'appid' => $this->wxpay['appid'],
			'mch_id' => $this->wxpay['mch_id'],
			'nonce_str' =>  random(32),
			'out_trade_no' => trim($trade_no),
		);
		$params['sign'] = $this->bulidSign($params);
		$result = $this->requestApi('https://api.mch.weixin.qq.com/pay/closeorder', $params);
		if(is_error($result)) {
			return $result;
		}
		if($result['result_code'] == 'SUCCESS') {
			pdo_update('paycenter_order', array('status' => 'CLOSED'), array('tradeno' => $result['out_trade_no']));
		}
		return true;
	}

	/*
	 * 查询订单
	 * $type 类型 优先使用微信的订单号(transaction_id),如果微信订单号不存在,使用商户系统订单号(out_trade_no)
	 * $type = 1 表示使用:微信的订单号(transaction_id), 2:表示使用:商户系统订单号(out_trade_no)
	 * */
	public function queryOrder($id, $type = 1) {
		$params = array(
			'appid' => $this->wxpay['appid'],
			'mch_id' => $this->wxpay['mch_id'],
			'nonce_str' =>  random(32),
		);
		if($type == 1) {
			$params['transaction_id'] = $id;
		} else {
			$params['out_trade_no'] = $id;
		}
		$params['sign'] = $this->bulidSign($params);
		$result = $this->requestApi('https://api.mch.weixin.qq.com/pay/orderquery', $params);
		if(is_error($result)) {
			return $result;
		}
		if($result['result_code'] != 'SUCCESS') {
			return error(-1, $result['err_code_des']);
		}
		$result['total_fee'] = $result['total_fee'] / 100; //将总金额多少分转换为多少元
		return $result;
	}

	/*
	 * 下载对账单
	 * $date 下载对账单的日期，格式：20140603
	 * $type ALL，返回当日所有订单信息，默认值 | SUCCESS，返回当日成功支付的订单 | REFUND，返回当日退款订单 | REVOKED，已撤销的订单
	 * */
	public function downloadBill($date, $type = 'ALL') {
		$params = array(
			'appid' => $this->wxpay['appid'],
			'mch_id' => $this->wxpay['mch_id'],
			'nonce_str' =>  random(32),
			'bill_date' => $date,
			'bill_type' => $type
		);

		$params['sign'] = $this->bulidSign($params);
		$result = $this->requestApi('https://api.mch.weixin.qq.com/pay/downloadbill', $params);
		return $result;
	}

	/*
	 * 申请退款
	 * $date 下载对账单的日期，格式：20140603
	 * $type ALL，返回当日所有订单信息，默认值 | SUCCESS，返回当日成功支付的订单 | REFUND，返回当日退款订单 | REVOKED，已撤销的订单
	 * */
	public function refundOrder($date, $type = 'ALL') {
		$params = array(
			'appid' => $this->wxpay['appid'],
			'mch_id' => $this->wxpay['mch_id'],
			'nonce_str' =>  random(32),
			'bill_date' => $date,
			'bill_type' => $type
		);
		$params['sign'] = $this->bulidSign($params);
		$result = $this->requestApi('https://api.mch.weixin.qq.com/pay/downloadbill', $params);
		return $result;
	}

	/*
	 * 申请退款
	 * $params 退款参数
	 * */
	public function refund($params) {
		global $_W;
		$params['sign'] = $this->bulidSign($params);
		$result = $this->requestApi('https://api.mch.weixin.qq.com/secapi/pay/refund', $params, array(CURLOPT_SSLCERT => ATTACHMENT_ROOT . $_W['uniacid'] . '_wechat_refund_all.pem'));
		return $result;
	}
}