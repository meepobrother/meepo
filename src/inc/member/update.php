<?php
// pdo_query("DROP table ".tablename('imeepos_runner4_member_group'));
if(!pdo_tableexists('imeepos_runner4_member_group')){
    $sql = "CREATE TABLE ".tablename('imeepos_runner4_member_group')." (
        `id` int(11) NOT NULL AUTO_INCREMENT,
        `title` varchar(64) NOT NULL,
        `uniacid` int(11) NOT NULL DEFAULT '0',
        `desc` varchar(320) NOT NULL DEFAULT '',
        `status` tinyint(2) NOT NULL DEFAULT '0',
        PRIMARY KEY (`id`)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8";
    pdo_query($sql);
}

return $this;