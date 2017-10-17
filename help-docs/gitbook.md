# lv ****.js

# wept

## weweb


```sh
yum -y install wget screen curl python #for CentOS/Redhat
# apt-get -y install wget screen curl python #for Debian/Ubuntu
wget http://aliyun-oss.linuxeye.com/oneinstack-full.tar.gz #阿里云经典网络下载
wget http://mirrors.linuxeye.com/oneinstack-full.tar.gz #包含源码，国内外均可下载
wget http://mirrors.linuxeye.com/oneinstack.tar.gz #不包含源码，建议仅国外主机下载
tar xzf oneinstack-full.tar.gz
cd oneinstack #如果需要修改目录(安装、数据存储、Nginx日志)，请修改options.conf文件
screen -S oneinstack #如果网路出现中断，可以执行命令`screen -R oneinstack`重新连接安装窗口
./install.sh #注：请勿sh install.sh或者bash install.sh这样执行
```

```sh
service nginx {start|stop|status|restart|reload|configtest}
```

```sh
service mysqld {start|stop|restart|reload|status}
```

```sh
service php-fpm {start|stop|restart|reload|status}
```

```sh
service supervisord {start|stop|status|restart|reload}
```

```sh
service httpd {start|restart|stop}
```

```sh
service tomcat {start|stop|status|restart}
```

```sh
service pureftpd {start|stop|restart|status}
```

```sh
service redis-server {start|stop|status|restart|reload}
```

```sh
service memcached {start|stop|status|restart|reload}
```