var appData = {
    onLaunch: function () {
        //调用API从本地缓存中获取数据
    },
    util: require('we7/resource/js/util.js'),
    globalData:{
        userInfo : null,
    },
    siteInfo: {
        'uniacid' : '8',
        'acid' : '8',
        'uniacid' : '1108',
        'acid' : '100384',
        'version' : '1.0.0',
        'siteroot' : 'http://172.16.1.100/weengine/pros/app/index.php',
    }
};
App(appData);