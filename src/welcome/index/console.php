#!/usr/bin/env php
<?php
/**
 * [WeEngine System] Copyright (c) 2013 WE7.CC
 * User: fanyk
 * Date: 2017/8/10
 * Time: 16:24.
 *  创建更新文件 php console make:upgrade name=create_update_wxapp
 *  执行更新     php console upgrade.
 */
error_reporting(0);

if (strtoupper(php_sapi_name()) != 'CLI') {
	We7Command::line('只能在命令行执行');
}

include_once __DIR__.'/framework/bootstrap.inc.php';
set_time_limit(0);
@ini_set('memory_limit', '1356M');
$path = dirname(__FILE__);
chdir($path);
if(!function_exists('pdos')) {
	function pdos() {
		load()->classs('query');
		return new Query();
	}
}
We7Command::execute();

abstract class We7Command {
	protected $name;
	protected $description;

	public static function execute() {
		$command = self::createCommand();
		if ($command) {
			$command->handle();

			return;
		}
		self::line('当前命令不存在');
		self::line('支持的命令如下:');
		self::line('php console make:upgrade name=更新的文件名 => 创建更新文件');
		self::line('php console upgrade => 执行更新 ');
	}

	public static function createCommand() {
		$argv = $_SERVER['argv'];
		$argc = $_SERVER['argc'];

		if ($argc > 1) {
			$commandName = $argv[1];
			if ($commandName == 'make:upgrade') {
				return new We7CreateUpgradeCommand();
			}
			if ($commandName == 'upgrade') {
				return new We7UpgradeCommand();
			}
		}

		return null;
	}

	abstract public function handle();

	/**
	 * @param string|int $name
	 *
	 * @return bool
	 */
	public function hasArgument($name) {
		return !is_null($this->argument($name));
	}

	/**
	 * Get the value of a command argument.
	 *
	 * @param string $key
	 *
	 * @return string|array
	 */
	public function argument($key) {
		$arguments = $this->arguments();
		if (isset($arguments[$key])) {
			return $arguments[$key];
		}

		return null;
	}

	/**
	 * Get all of the arguments passed to the command.
	 *
	 * @return array
	 */
	public function arguments() {
		$argv = $_SERVER['argv'];
		$argc = $_SERVER['argc'];
		$result = array();
		if ($argc >= 2) {
			$args = array_slice($argv, 2);
			array_map(function ($item) use (&$result) {
				list($key, $value) = explode('=', $item);
				$result[$key] = $value;
			}, $args);

			return $result;
		}

		return $result;
	}

	public static function line($string) {
		if (strtoupper(PHP_OS) != 'LINUX') {
			$string = iconv('UTF-8', 'GBK', $string);
		}
		fwrite(STDOUT, $string.PHP_EOL);
	}

	/**
	 *  确定是否更新.
	 *
	 * @param string $question
	 * @param bool   $default
	 *
	 * @return bool
	 */
	public function confirm($question, $yes = 'Y') {
		$this->line($question.'(Y/N)');
		$value = fscanf(STDIN, '%s');
		if (strtoupper($value[0]) == 'Y') {
			return true;
		}

		return false;
	}
}

class We7CreateUpgradeCommand extends We7Command {
	protected $name = 'make:upgrade';

	public function handle() {
		$name = $this->argument('name');
		$path = $this->getPath();
		$prefix = date('Y_m_d_His');
		@mkdir($path, 0777, true);
		$filepath = $path.'/'.$prefix.'_'.$name.'.php';
		echo $filepath;
		file_put_contents($filepath, $this->template($name));
	}

	private function getPath() {
		$dir = $this->getDir();

		return 'upgrade'.DIRECTORY_SEPARATOR.$dir;
	}

	private function getDir() {
		return ''.$this->getVersion();
	}

	private function getVersion() {
		return IMS_VERSION;
	}

	private function toClassName($name) {
		$value = ucwords(str_replace(array('-', '_'), ' ', $name));

		return str_replace(' ', '', $value);
	}

	private function template($name) {
		$time = time();
		$version = $this->getVersion();
		$namespace = 'We7\V'.str_replace('.', '', $version);
		$name = $this->toClassName($name);
		$template = <<<EOT
<?php

defined('IN_IA') or exit('Access Denied');
/**
 * [WeEngine System] Copyright (c) 2013 WE7.CC
 * Time: $time
 * @version $version
 */
namespace $namespace;

class $name {

	/**
	 *  执行更新
	 */
	public function up() {

	}
	
	/**
	 *  回滚更新
	 */
	public function down() {
		

	}
}
		
EOT;

		return $template;
	}
}

class We7UpgradeCommand extends We7Command {
	protected $name = 'upgrade';
	private $project_upgrade_files = array(); // upgrade 目录下的所有文件

	/**
	 *  处理更新脚本.
	 */
	public function handle() {
		$filename = $this->argument('filename');
		$version = $this->argument('version');
		// 强制执行单个文件更新
		if (!empty($filename) && !empty($version)) {
			$this->update_single_file($filename, $version);

			return;
		}
		//执行全部更新
		$this->update();
	}

	private function update_single_file($filename, $version) {
		$filepath = 'upgrade'.DIRECTORY_SEPARATOR.$version.DIRECTORY_SEPARATOR.$filename.'.php';
		$include = include_once $filepath;
		if (!$include) {
			self::line($filepath.'文件未找到');

			return;
		}
		$batch = $this->get_max_batch();
		$this->update_single($filename, $version, $batch);

		return;
	}

	private function update() {
		$this->check_table();
		$files = $this->diff_files();
		if (count($files) == 0) {
			$this->line('没有要更新的文件');

			return;
		}
		if ($this->confirm('确认更新吗?')) {
			$this->doUpgrade($files);
		}
	}

	/**
	 * 执行 更新.
	 */
	private function doUpgrade($files) {
		$batch = $this->get_max_batch();
		foreach ($files as $filename => $version) {
			$this->update_single($filename, $version, $batch);
		}
	}

	private function get_max_batch() {
		$batch = pdo_fetch('SELECT MAX(batch) as batch FROM '.tablename('upgrade'));
		$batch = $batch['batch'] + 1;

		return $batch;
	}

	private function update_single($filename, $version, $batch) {
		$include_path = 'upgrade/'.$version.'/'.$filename.'.php';
		include_once $include_path;
		$class = $this->resolve($filename, $version);
		$ignore = 'ignore';
		if (property_exists($class, $ignore)) {
			return; //如果有ignore属性 直接略过 (云服务更新可能不需要这个更新文件)
		}
		$description = 'description';
		$des_exits = property_exists($class, $description);
		$upinfo = '更新'.$version.':'.$filename.'';
		if ($des_exits) {
			$upinfo .= ':'.$class->{$description};
		}
		$this->line($upinfo);
		if (method_exists($class, 'up')) {
			call_user_func(array($class, 'up'));
		}
		pdo_insert('upgrade', array('file' => $filename, 'batch' => $batch, 'version' => $version, 'createtime' => time()));
	}

	public function resolve($file, $version) {
		$class = $this->studly(implode('_', array_slice(explode('_', $file), 4)));
		$namespace = '\\We7\\V'.str_replace('.', '', $version);
		$class = $namespace.'\\'.$class;

		return new $class();
	}

	/**
	 *  名称转class 名.
	 *
	 * @param $name
	 *
	 * @return string
	 */
	private function studly($name) {
		$value = ucwords(str_replace(array('-', '_'), ' ', $name));

		return str_replace(' ', '', $value);
	}

	/**
	 *  获取diff 文件.
	 *
	 * @return array
	 */
	private function diff_files() {
		$dbfiles = pdos()->from('upgrade')->getall('file'); //获取数据库目录
		$dbfiles = array_keys($dbfiles); //数据库文件
		$this->project_upgrade_files = $this->get_project_upgrade_files();
		$files = array_keys($this->project_upgrade_files);
		$diff_files = array_diff_key($this->project_upgrade_files, array_flip($dbfiles)); // 比对差异文件
		return $diff_files;
	}

	/**
	 *  检查表是否存在.
	 */
	private function check_table() {
		$exits = pdo_tableexists('upgrade');
		if (!$exits) {
			$isCreate = pdo_query("CREATE TABLE IF NOT EXISTS `ims_upgrade` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`file` varchar(255) NOT NULL COMMENT 'upgrade 目录名',
`createtime` int(11) NOT NULL COMMENT '创建时间',
`batch` int(11) NOT NULL COMMENT '批次',
`version` varchar(255) NOT NULL DEFAULT '' COMMENT '版本号',
PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8; ");
		}
	}

	/**
	 *  获取upgrade 下的所有文件
	 * return [filename=>version].
	 *
	 * @return array
	 */
	private function get_project_upgrade_files() {
		$directory = new \RecursiveDirectoryIterator('./upgrade');
		$iterator = new \RecursiveIteratorIterator($directory);
		$files = array();
		foreach ($iterator as $file) {
			if ('php' == $file->getExtension()) {
				$path = $file->getPath();
				$version = pathinfo($path, PATHINFO_BASENAME);
				$basename = $file->getBasename('.php');
				if ($basename != 'upgrade' && $basename != 'upgrade_0.x_to_1.0') {
					$files[$basename] = $version;
				}
			}
		}

		return $files;
	}
}
