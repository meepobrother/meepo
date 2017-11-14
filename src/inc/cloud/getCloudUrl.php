<?php
$input = $this->__input['encrypted'];
$url = $input['url'];
load()->func('communication');
$post = $input['data'];
$res = ihttp_post($url,$post);

$content = $res['content'];
$content = json_decode($content,true);
$this->info = $content['info'];
$this->msg = $content['msg'];
$this->code = $content['code'];
return $this;
