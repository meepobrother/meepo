<?php
$input = $this->__input['encrypted'];
$url = $input['url'];
load()->func('communication');
$res = ihttp_post($url,$post);
$content = $res['content'];
$content = json_decode($content,true);
$this->info = $content['info'];
return $this;