<?php


if(!pdo_tableexists('imeepos_runner4_order_tag')){
    $sql = "CREATE TABLE ".tablename('imeepos_runner4_order_tag')." (
        `id` int(11) NOT NULL AUTO_INCREMENT,
        `uniacid` int(11) NOT NULL DEFAULT '0',
        `title` varchar(64) NOT NULL DEFAULT '',
        PRIMARY KEY (`id`)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8";
    pdo_query($sql);
}    

if(!pdo_tableexists('imeepos_runner4_order_class')){
    $sql = "CREATE TABLE ".tablename('imeepos_runner4_order_class')." (
        `id` int(11) NOT NULL AUTO_INCREMENT,
        `uniacid` int(11) NOT NULL DEFAULT '0',
        `title` varchar(64) NOT NULL DEFAULT '',
        `desc` varchar(320) NOT NULL DEFAULT '',
        `status` tinyint(2) NOT NULL DEFAULT '0',
        PRIMARY KEY (`id`)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8";
    pdo_query($sql);
}    
if(!pdo_fieldexists('imeepos_runner4_order_class','tags')){
    $sql = "ALTER TABLE ".tablename('imeepos_runner4_order_class')." ADD COLUMN `tags` text NOT NULL AFTER `status`;";
    pdo_query($sql);
}


if(!pdo_tableexists('imeepos_runner4_order')){
    $sql = "CREATE TABLE ".tablename('imeepos_runner4_order')." (
        `id` int(11) NOT NULL AUTO_INCREMENT,
        `uniacid` int(11) DEFAULT '0',
        `title` varchar(64) DEFAULT '',
        `desc` varchar(320) DEFAULT '',
        `money` decimal(10,2) DEFAULT '0.00',
        `tag` varchar(320) DEFAULT '',
        `class_id` int(11) DEFAULT '0',
        `create_time` int(11) DEFAULT '0',
        PRIMARY KEY (`id`)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8";
      pdo_query($sql);
}
   
return $this;