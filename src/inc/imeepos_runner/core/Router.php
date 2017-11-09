<?php
define('ROUTERPATH',dirname(__FILE__));

class Router extends MeepoBase{

    public $__do = '';
    public $__input = array();

    public function doApi(){
        if($this->code == 0){
            return $this;
        }
        $this->reset();
        $this->webApi();
        return $this;
    }

    public function setDo($do = ''){
        $this->__do = $do;
    }

    public function setInput($input = ''){
        $this->__input = $input;
    }

    public function exec($do = '',$params = array()){
        if($this->code == 0){
            return $this;
        }
        $this->__do = $do;
        $this->__input = $params;
        if(isset($this->__input['encrypted'])){
          $this->__input['encrypted'] = json_decode(base64_decode($this->__input['encrypted']),true);
        }else{
          $this->__input['encrypted'] = array();
        }
        $this->webApi();
        return $this;
    }

    public function doMobileUrl(){}

    public function doWebUrl(){}

    public function webApi(){
        if($this->code == 0){
            return $this;
        }
        $a = explode('.',$this->__do);
        $model = $a[0];
        $do = $a[1];

        $file = ROUTERPATH.'/model/'.$model.'/'.$do.'.php';
        if(file_exists($file)){
            include $file;
            return $this;
        }else{
            $this->code = 0;
            $this->msg = $file . '不存在';
            return $this;
        }
    }
}

class MeepoBase{
    public $info = array();
    public $msg = 'success';
    public $code = 1;

    public function reset(){
        $this->info = array();
        $this->code = 1;
        $this->msg = 'success';

        return $this;
    }

    public function getData(){
        $data = array();
        $data['code'] = $this->code;
        $data['msg'] = $this->msg;
        $data['info'] = $this->info;
        return $data;
    }

    public function getJson(){
        return json_encode($this->getData());
    }
}


class CryptAES {
    protected $cipher = MCRYPT_RIJNDAEL_128;
    protected $mode = MCRYPT_MODE_ECB;
    protected $pad_method = NULL;
    protected $secret_key = '';
    protected $iv = '';

    public function set_cipher($cipher){
        $this->cipher = $cipher;
    }

    public function set_mode($mode){
        $this->mode = $mode;
    }

    public function set_iv($iv){
        $this->iv = $iv;
    }

    public function set_key($key){
        $this->secret_key = $key;
    }

    public function require_pkcs5(){
        $this->pad_method = 'pkcs5';
    }

    protected function pad_or_unpad($str, $ext){
        if ( is_null($this->pad_method) ){
            return $str;
        }else{
            $func_name = __CLASS__ . '::' . $this->pad_method . '_' . $ext . 'pad';
            if ( is_callable($func_name) ){
                $size = mcrypt_get_block_size($this->cipher, $this->mode);
                return call_user_func($func_name, $str, $size);
            }
        }
        return $str;
    }

    protected function pad($str){
        return $this->pad_or_unpad($str, '');
    }

    protected function unpad($str){
        return $this->pad_or_unpad($str, 'un');
    }

    public function encrypt($str){
        $str = $this->pad($str);
        $td = mcrypt_module_open($this->cipher, '', $this->mode, '');

        if ( empty($this->iv) ){
            $iv = @mcrypt_create_iv(mcrypt_enc_get_iv_size($td), MCRYPT_RAND);
        }else{
            $iv = $this->iv;
        }

        mcrypt_generic_init($td, hex2bin($this->secret_key), $iv);
        $cyper_text = mcrypt_generic($td, $str);
        $rt = strtoupper(bin2hex($cyper_text));
        mcrypt_generic_deinit($td);
        mcrypt_module_close($td);

        return $rt;
    }

    public function decrypt($str){
        $td = mcrypt_module_open($this->cipher, '', $this->mode, '');

        if ( empty($this->iv) ){
            $iv = @mcrypt_create_iv(mcrypt_enc_get_iv_size($td), MCRYPT_RAND);
        } else{
            $iv = $this->iv;
        }

        mcrypt_generic_init($td, $this->secret_key, $iv);
        //$decrypted_text = mdecrypt_generic($td, self::hex2bin($str));
        $decrypted_text = mdecrypt_generic($td, base64_decode($str));
        $rt = $decrypted_text;
        mcrypt_generic_deinit($td);
        mcrypt_module_close($td);

        return $this->unpad($rt);
    }

    public static function hex2bin($hexdata) {
        $bindata = '';
        $length = strlen($hexdata);
        for ($i=0; $i< $length; $i += 2){
            $bindata .= chr(hexdec(substr($hexdata, $i, 2)));
        }
        return $bindata;
    }

    public static function pkcs5_pad($text, $blocksize){
        $pad = $blocksize - (strlen($text) % $blocksize);
        return $text . str_repeat(chr($pad), $pad);
    }

    public static function pkcs5_unpad($text){
        $pad = ord($text{strlen($text) - 1});
        if ($pad > strlen($text)) return false;
        if (strspn($text, chr($pad), strlen($text) - $pad) != $pad) return false;
        return substr($text, 0, -1 * $pad);
    }
}
