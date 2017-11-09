<?php
global $_W;

include IA_ROOT."/imeepos/wxapp/build/util.func.php";
include IA_ROOT."/imeepos/wxapp/build/app.func.php";
include IA_ROOT."/imeepos/wxapp/build/page.func.php";
include IA_ROOT."/imeepos/wxapp/build/libs/tpl.php";

// app zip
$resultZipFIle = '/imeepos/wxapp/'.time().'-imeepos.zip';
$resultFIle = '/imeepos/wxapp/'.time().'-imeepos';
$resultFIle = '/imeepos/wxapp/src';

load()->func('file');
$table = "imeepos_runner4_app";

$id = intval($_GPC['id']);
$app = pdo_get($table,array('id'=>$id));
$pages = pdo_getall('imeepos_runner4_app_catalog_pages', array('app_id'=>$id));

foreach($pages as &$page){
    $page['header'] = unserialize($page['header']);
    $page['body'] = unserialize($page['body']);
    $page['footer'] = unserialize($page['footer']);
    $page['menu'] = unserialize($page['menu']);
    $page['kefu'] = unserialize($page['kefu']);
}
unset($page);

// 初始化app
initApp($resultFIle, $pages);
// 初始化页面
foreach($pages as $key=>$page){
    buildPageJs($page, $resultFIle);
    buildPageJson($page, $resultFIle);
    buildPageWxml($page, $resultFIle);
	buildPageWxss($page, $resultFIle);
}

// 移动复制we7
mkdirs(IA_ROOT."/imeepos/wxapp/src/we7");
file_copy_dir(IA_ROOT."/imeepos/wxapp/we7",IA_ROOT."/imeepos/wxapp/src/we7");

function file_copy_dir($src, $des) {
	$dir = opendir($src);
	@mkdir($des);
	while (false !== ($file = readdir($dir))) {
		if (($file != '.') && ($file != '..')) {
			if (is_dir($src . '/' . $file)) {
				file_copy_dir($src . '/' . $file, $des . '/' . $file);
			} else {
				copy($src . '/' . $file, $des . '/' . $file);
			}
		}
	}
	closedir($dir);
}

function addFileToZip($path,$zip){
    $handler=opendir($path); //打开当前文件夹由$path指定。
    while(($filename=readdir($handler))!==false){
        if($filename != "." && $filename != ".."){//文件夹文件名字为'.'和‘..’，不要对他们进行操作
            if(is_dir($path."/".$filename)){// 如果读取的某个对象是文件夹，则递归
                addFileToZip($path."/".$filename, $zip);
            }else{ //将文件加入zip对象
                $_path = IA_ROOT."/imeepos/wxapp/src";
                $_file = $path."/".$filename;
                $base = str_replace($_path,'',$_file);
                $zip->addFile($path."/".$filename,$base);
            }
        }
    }
    @closedir($path);
}

$zip = new ZipArchive();
$zipfile = IA_ROOT.$resultZipFIle;
$res = $zip->open($zipfile, ZIPARCHIVE::CREATE | ZIPARCHIVE::OVERWRITE | ZIPARCHIVE::CM_STORE);

if($res){
    $path = IA_ROOT."/imeepos/wxapp/src";
    if(is_dir($path)){  //给出文件夹，打包文件夹
        addFileToZip($path, $zip);
    }else if(is_array($path)){  //以数组形式给出文件路径
        foreach($path as $file){
            $zip->addFile($file);
        }
    }else{      //只给出一个文件
        $zip->addFile($path);
    }
    $zip->close(); //关闭处理的zip文件
}


$file = "https://meepo.com.cn".$resultZipFIle;
die("您的小程序下载地址为： ".$file);

