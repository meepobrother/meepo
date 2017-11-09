<?php

$sql = "CREATE TABLE ".tablename('imeepos_runner4_tasks_group')." (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `uniacid` int(11) DEFAULT '0',
    `title` varchar(64) DEFAULT '',
    `setting` text,
    `displayorder` int(11) DEFAULT '0',
    PRIMARY KEY (`id`)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8";

pdo_query($sql);

return $this;