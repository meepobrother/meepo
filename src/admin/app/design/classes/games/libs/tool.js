/* 互动推活动公共方法 */
(function() {
    window.T = {
        data: {
            falseInfo: {}
        },
        getParam: function(name) {
            var tmp, str = window.location.search.replace('?', '');
            var arr = str.split("&");
            if (arr.length > 0) {
                for (var i = 0, l = arr.length; i < l; i++) {
                    try {
                        if (/(.*?)=(.*)/.test(arr[i])) {
                            if (RegExp.$1 == name) {
                                tmp = RegExp.$2;
                            }
                        }
                    } catch (e) {}
                }
            }
            return tmp;
        },
        // 代理proxy_getJSON请求，容错1次，支持jsonp
        // url         请求的地址
        // callback    回调函数
        // condition   查询参数（可选）
        // num         失败重查次数（可选，默认为1）
        // jsonpCallback    存在时使用jsonp
        // async       是否为异步，默认异步，传false为同步
        // code      传true表示不判断code200，否则判断code为200
        proxy_getJSON: function(url, callback, condition, num, jsonpCallback, async, code) {
            var t = this;
            var count = 0;
            var _task = null;
            condition = condition || {};
            num = num || 1;
            _task = function() {
                var done = false;
                var opts = {
                    url: url,
                    data: condition,
                    dataType: "json",
                    xhrFields: {
                        withCredentials: true
                    },
                    success: function(ret) {
                        if (ret.code === 200 || code === true) {
                            callback(ret);
                            clearTimeout(_task);
                        } else {
                            if (count < num) {
                                setTimeout(_task, 100);
                                count++;
                            } else {
                                callback(ret);
                                clearTimeout(_task);
                                t.saveErrorAjax(url, ret);
                            }
                        }
                    },
                    complete: function(XMLHttpRequest, textStatus) {
                        if (textStatus !== "success") {
                            if (count < num) {
                                setTimeout(_task, 100);
                                count++;
                            } else {
                                if (textStatus === "timeout") {
                                    callback({
                                        code: 101,
                                        message: "请求超时"
                                    });
                                } else if (textStatus === "error") {
                                    callback({
                                        code: 101,
                                        message: "请求异常"
                                    });
                                }
                                clearTimeout(_task);
                                if (url.indexOf('save_errlog') === -1) {
                                    var timing;
                                    try {
                                        timing = JSON.stringify(window.performance.getEntriesByName(url)[0].toJSON())
                                    } catch (e) {
                                        timing = e.message
                                    }
                                    t.saveErrorAjax(url, {
                                        status: XMLHttpRequest.status,
                                        statusText: XMLHttpRequest.statusText,
                                        timing: timing
                                    });
                                }
                            }
                        }
                    }
                };
                if (jsonpCallback) {
                    opts.dataType = "jsonp";
                    opts.jsonpCallback = jsonpCallback || "sucess";
                }
                if (async === false) {
                    opts.async = false;
                }
                $.ajax(opts);
            };
            _task();
        },
        // 错误上报接口
        saveErrorAjax: function(ajaxUrl, ajaxData) {
            var t = this;
            t.proxy_getJSON(window.location.protocol + t.getApiDomain() + '/error/save_errlog.htm', function(ret) {}, {
                url: ajaxUrl,
                msg: JSON.stringify(ajaxData)
            });
        },
        // 加载css文件
        cssLoader: function(url, callback) {
            var t = this;
            var doc = document;
            var myCss = doc.createElement('link');
            myCss.href = t.correctUrl(url);
            myCss.rel = 'stylesheet';
            doc.getElementsByTagName('head')[0].appendChild(myCss);
            myCss.onload = function() {
                callback && callback();
            }
        },
        getApiDomain: function() {
            var arr = window.location.host.split('.');
            arr[0] = 'apidisplay';
            return '//' + arr.join('.');
        },
        getDevice: function() {
            var ua = navigator.userAgent.toLowerCase();
            if (/iphone|ipad|ipod/.test(ua)) {
                return 'IOS';
            } else if (/android/.test(ua)) {
                return 'android';
            } else {
                return '';
            }
        },
        errorWin: function(msg) {
            msg = msg || '网络拥堵,稍后再试';
            var ht = ('<div class="common-error-pop-mask common-mask">' + '    <div class="common-error-pop">' + '        <div class="close-btn"></div>' + '        <div class="first">' + '            <img src="//egouimg1.qutu.com/discountplus/common/icon_err.png">' + '        </div>' + '        <div class="second">' + msg + '</div>' + '    </div>' + '</div>');
            var p = $(ht).appendTo($('body'));
            p.find('.close-btn').on('click', function() {
                p.remove();
            });
        },
        getActInfo: function(params, cb) {
            var t = this;
            params = params || {};
            params.adzoneId = params.adzoneId || t.getParam('adzoneId');
            params.logId = params.logId || t.getParam('logId');
            params.actId = params.actId || t.getParam('actId');
            var con = {
                adzoneId: params.adzoneId,
                logId: params.logId
            };
            t.proxy_getJSON(window.location.protocol + t.getApiDomain() + '/activity/' + params.actId + '.htm', function(ret) {
                if (ret.code === 200) {
                    cb(ret);
                    var data = ret.data;
                    t.getRedBox(data.redPack, t.getParam('actId'), t.getParam('adzoneId'), t.getParam('mediaId'));
                } else {
                    t.errorWin(ret.message || ret.data);
                    cb(ret);
                }
            }, con);
        },
        getUserLeftTimes: function(params, cb) {
            var t = this;
            params = params || {};
            params.act_id = params.act_id || t.getParam('actId');
            params.adzoneId = params.adzoneId || t.getParam('adzoneId');
            params.timeSign = Date.now();
            t.proxy_getJSON(window.location.protocol + t.getApiDomain() + '/user_lottery_info.htm', function(ret) {
                if (ret.code === 200) {
                    cb(ret);
                } else {
                    t.errorWin(ret.message || ret.data);
                    cb(ret);
                }
            }, params);
        },
        doLottery: function(params, cb) {
            var t = this;
            params = params || {};
            params.act_id = params.act_id || t.getParam('actId');
            params.adzone_click_id = params.adzone_click_id || t.getParam('logId');
            params.device = t.getDevice();
            t.proxy_getJSON(window.location.protocol + t.getApiDomain() + '/lottery.htm', function(ret) {
                if (ret.code === 200) {
                    cb(ret);
                } else {
                    t.errorWin(ret.message || ret.data);
                    cb(ret);
                }
            }, params);
        },
        getAwardById: function(params, cb) {
            var t = this;
            t.proxy_getJSON(window.location.protocol + t.getApiDomain() + '/award_use/award_get_id.htm', function(ret) {
                if (ret.code === 200) {
                    cb(ret);
                } else {
                    t.errorWin(ret.message || ret.data);
                    cb(ret);
                }
            }, params);
        },
        // 获取聚合页，活动页详情
        getGatherActInfo: function(params, cb) {
            var t = this;
            params = params || {};
            params.adzoneId = params.adzoneId || t.getParam('adzoneId');
            params.logId = params.logId || t.getParam('logId');
            params.actId = params.actId || t.getParam('actId');
            var con = {
                adzoneId: params.adzoneId,
                logId: params.logId
            };
            // return cb({"code":200,"data":{"goldcoin_num":0,"css":"http://baidu.com","hours":14,"act":{"id":167,"actType":3,"actName":"海岛夺宝","bannerImageUrl":"https://img0.adhudong.com/award/201710/11/3581db00b4d1232a5824fd77883e751f.png","status":1,"templateId":113,"operator":"test","locationAddress":"www.baidu.com"},"floors":{"floor1":{"floorPriority":4,"data":[{"id":163,"actType":1,"actName":"刮刮卡活动","bannerImageUrl":"https://img3.adhudong.com/award/201709/27/9867c921ca0178820b8a37c677876223.jpg","freeNum":8,"actRuleInfo":"<p>山东省第三代是 </p>","status":1,"templateId":109,"floor_title":"现金红包免费抽","floor_icon":"https://egouimg1.qutu.com/discountplus/treasure_island/gift-1.png",locationAddress:"https://display.adhudong.com/spread/lottery_machine.htm"},{"id":164,"actType":1,"actName":"翻牌徐利测试","bannerImageUrl":"https://img1.adhudong.com/award/201709/28/4b69b1734d769ae4e8a967149f086076.png","freeNum":2,"actRuleInfo":"<p>爱上发大水发放啊实打实大的法师打发</p><p>爱上发大水发放啊实打实大的法师打发</p><p>爱上发大水发放啊实打实大的法师打发</p><p>爱上发大水发放啊实打实大的法师打发</p><p>爱上发大水发放啊实打实大的法师打发爱上发大水发放啊实打实大的法师打发爱上发大水发放啊实打实大的法师打发爱上发大水发放啊实打实大的法师打发爱上发大水发放啊实打实大的法师打发爱上发大水发放啊实打实大的法师打发爱上发大水发放啊实打实大的法师打发</p>","status":1,"templateId":110,"operator":"test","floor_title":"现金红包免费抽","floor_icon":"https://egouimg1.qutu.com/discountplus/treasure_island/gift-2.png",locationAddress:"https://display.adhudong.com/spread/lottery_machine.htm"},{"id":165,"actType":1,"actName":"新轮盘抽奖","bannerImageUrl":"https://img3.adhudong.com/award/201709/28/9867c921ca0178820b8a37c677876223.jpg","freeNum":8,"actRuleInfo":"<p>最新版本的抽奖活动</p>","status":1,"templateId":112,"floor_title":"现金红包免费抽","floor_icon":"https://egouimg1.qutu.com/discountplus/treasure_island/gift-3.png",locationAddress:"https://display.adhudong.com/spread/lottery_machine.htm"},{"id":166,"actType":1,"actName":"老虎机活动kqf","bannerImageUrl":"https://img0.adhudong.com/award/201709/28/3581db00b4d1232a5824fd77883e751f.png","freeNum":80,"actRuleInfo":"<p>天猫红包领取时间</p><p>2017年1月6日0点-2017年1月7日24点；</p><p>易购红包为易币（可兑换集分宝，直接购物使用 哦），直接发到易购账户中；</p><p>红包数量有限，先到先得哦，更多精彩，请关注易购app；</p><p>相同淘宝账号、手机号、支付宝账号均视为同一用户，一旦发现作弊易购网有权取消用户所得；</p><p>在易购下单使用淘宝红包无返利哦；</p><p>本活动最终解释权归易购网所有。</p><p>天猫红包领取时间</p><p>111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111</p><p>111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111</p><p>2相同淘宝账号、手机号、支付宝账号均视为同一用户，一旦发现作弊易购网有权取消用户所得；相同淘宝账号、手机号、支付宝账号均视为同一用户，一旦发现作弊易购网有权取消用户所得；相同淘宝账号、手机号、支付宝账号均视为同一用户，一旦发现作弊易购网有权取消用户所得；相同淘宝账号、手机号、支付宝账号均视为同一用户，一旦发现作弊易购网有权取消用户所得；</p>","status":1,"templateId":111,"operator":"test","floor_title":"现金红包免费抽","floor_icon":"https://egouimg1.qutu.com/discountplus/treasure_island/gift-4.png",locationAddress:"https://display.adhudong.com/spread/lottery_machine.htm"}],"floorType":2}},"phone":"","logId":"B3W1C1HFYXXHUM9"}});
            t.proxy_getJSON(window.location.protocol + t.getApiDomain() + '/gatherActivity/' + params.actId + '.htm', function(ret) {
                if (ret.code === 200) {
                    cb(ret);
                } else {
                    t.errorWin(ret.message || ret.data);
                    cb(ret);
                }
            }, con);
        },
        // 设置页面标题
        setTit: function(title) {
            document.title = title = (title ? decodeURI(title) : document.title);
            var $iframe = $('<iframe src="/favicon.ico"></iframe>').on('load', function() {
                setTimeout(function() {
                    $iframe.off('load').remove();
                }, 0);
            }).appendTo($('body'));
        },
        toMyGift: function(logId, mediaId) {
            var t = this;
            logId = logId || t.getParam('logId');
            mediaId = mediaId || t.getParam('mediaId');
            window.location.href = window.location.origin + '/spread/my-gift.htm?logId=' + logId + '&mediaId=' + mediaId;
        },
        commonPopupAgain: function(opts) {
            var ht = ('<div class="common-mask">' + '    <div class="common-again-wrapper">' + '        <div class="close-icon">×</div>' + '        <div class="intro">恭喜您抽中</div>' + '        <div class="main-title">再来一次</div>' + '        <div class="description">可以再抽一次，加油额！</div>' + '        <div class="confirm-btn">立即抽奖</div>' + '    </div>' + '</div>');
            var p = $(ht).appendTo($('body'));
            p.find('.close-icon,.confirm-btn').off().on('click', function() {
                p.remove();
            });
        },
        commonPopupThanks: function(opts) {
            var t = this;
            var data = opts.data;
            var ht = ('<div class="common-mask">' + '    <div class="common-thanks-wrapper">' + '        <div class="close-icon">×</div>' + '        <div class="main-title">谢谢参与</div>' + '        <div class="confirm-btn">继续抽奖</div>' + '    </div>' + '</div>');
            var p = $(ht).appendTo($('body'));
            p.find('.close-icon,.confirm-btn').off().on('click', function() {
                p.remove();
                t.getCommendAct(t.getParam('actId'), t.getParam('adzoneId'), t.getParam('logId'), data.lottery_left_times);
            });
        },
        commonPopupGift: function(ret, opts) {
            var t = this;
            if (ret) {
                _after(ret);
            } else {
                T.doLottery({}, _after);
                // _after({"code":200,"data":{"record_id":16958185,"ad":{"adtype":1,"ad_brief_introduction":"恭喜您获得：英雄麻将三重好礼，活动时间有限不容错过","ad_id":1031,"ad_jumpDirectly":1,"choosen_tag":"15015516_1-1290-1031_1504682660802:3","ad_url":"http://bid.adhudong.com/bridge.do?&ip=101.254.243.10&agent=Mozilla%2F5.0+%28iPhone%3B+CPU+iPhone+OS+9_1+like+Mac+OS+X%29+AppleWebKit%2F601.1.46+%28KHTML%2C+like+Gecko%29+Version%2F9.0+Mobile%2F13B143+Safari%2F601.1+wechatdevtools%2F6.5.6+MicroMessenger%2F6.5.12+Language%2Fzh_CN+webview%2F0&refer=https%3A%2F%2Fdisplay.adhudong.com%2Fspread%2Fscratch-card.htm%3FlogId%3D15015516%26adzoneId%3D173%26actId%3D2%26ref%3D%26mediaId%3D92&mediaId=92&adZoneId=173&actId=2&adPlanId=278&adOrderId=1290&adCreativeId=1031&userCookie=Mi8vMTI2Ly8yLy8yLy81MjkzLy8xNTA0NTgzMzUzNDU3Ly9iMGE5ZjEzNDE4NTY3MzNkYmVkYTEwNmI4YzcyNmYzYi8vMWRiYjAxZDRmOTk=&adLinkUrl=https%3A%2F%2Fitunes.apple.com%2Fcn%2Fapp%2Fid1251311457&chargeType=2&advertiserId=170&adChoosenTag=15015516_1-1290-1031_1504682660802:3&adzoneClickId=15015516&isCharge=1&logType=2&status=1&positionId=1&occurrence=0","ad_name":"幸运用户","ad_image_url":"https://img0.adhudong.com/creative/201709/01/29303893a8afd7543ed00f5e78c5784a.jpg"},"lottery_left_times":6,"act_award_id":49,"award_type":7}});
                // _after({"code":200,"data":{"record_id":"C0H3C1HDJ3MKIIU","ad":{"adtype":2,"ad_brief_introduction":"满2元减1元","ad_id":158,"ad_jumpDirectly":1,"choosen_tag":"D0H3A1HDJ3MKIIR","m_useq_price":2500,"ad_url":"http://bid.adhudong.com/bridge.do?&ip=101.254.243.10&agent=Mozilla%2F5.0+%28iPhone%3B+CPU+iPhone+OS+9_1+like+Mac+OS+X%29+AppleWebKit%2F601.1.46+%28KHTML%2C+like+Gecko%29+Version%2F9.0+Mobile%2F13B143+Safari%2F601.1+wechatdevtools%2F1.01.170907+MicroMessenger%2F6.5.7+Language%2Fzh_CN+webview%2F%7B%7BwebviewID%7D%7D+webdebugger+port%2F9974&refer=https%3A%2F%2Fdisplay.adhudong.com%2Fspread%2Fscratch-card.htm%3FlogId%3DB0H3C1HDJ3M7NK2%26adzoneId%3D212%26actId%3D2%26ref%3D%26mediaId%3D2&mediaId=2&adZoneId=212&actId=2&adPlanId=132&adOrderId=418&adCreativeId=158&userCookie=Mi8vMjEwLy8yLy8yLy8zMTM2MS8vMTUwNTc4ODI5NDE1OS8vODhiNWZiYzJhNTI1NDExOThmM2E4ZWM0ZTZiMjFlZjYvLzM1NzUxMDMzMTVmNA==&adLinkUrl=http%3A%2F%2Funion.egou.com%2Fto%3Fsite%3D23%26term%3D2%26page%3Dhudongtui_egoutb%26url%3Dhttps%253A%252F%252Fuland.taobao.com%252Fcoupon%252Fedetail%253Fe%253DEH0eNsMgYpoGQASttHIRqQbpzLm1eeWxo9P%25252Bq0XI4envxu5AHaApHL6qLlGyUYZxUy8gjgNFjc4I4%25252Bf2onFY9IeHlHv87T7grMG85q5MT7Aah5ITF6%25252Bc95Bh%25252BsFgnewCakNDL1exQI8tu%25252Bk1tU%25252B0Cg%25253D%25253D&chargeType=2&advertiserId=153&adChoosenTag=D0H3A1HDJ3MKIIR&adzoneClickId=B0H3C1HDJ3M7NK2&isCharge=1&logType=2&status=1&positionId=1&occurrence=0","ad_name":"五香卤鸭蛋五香蛋40g*30枚","m_discount_price":2600,"label1_money":100,"ad_image_url":"https://img3.egou.com/taobao/201709/15/031f71dd2cdd50cf0c3fbb563e93b413.jpg"},"lottery_left_times":6,"act_award_id":49,"award_type":7}});
            }

            function _after(ret) {
                var data = ret.data;
                var ad = data.ad;
                // award_type 抽奖类型，5为再来一次，6谢谢参与，7为幸运奖
                switch (data.award_type) {
                    case 5:
                        t.commonPopupAgain(ret);
                        opts.afterLottery && opts.afterLottery(ret);
                        break;
                    case 6:
                        t.commonPopupThanks(ret);
                        opts.afterLottery && opts.afterLottery(ret);
                        break;
                    case 7:
                        var ht = ('<div class="common-mask common-popup-gift-wrapper-mask show">' + '    <div class="common-popup-gift-wrapper">' + '        <div class="close-icon">×</div>' + '        <div class="box-line"></div>' + '        <div class="box-top"></div>' + '        <div class="box-bottom">' + '            <div class="box-title">' + ad.ad_name + '</div>' + '            <div class="box-img">' + '                <img class="ad-img" src="" alt="">' + '                <div class="coupon-div">' + '                    <div class="imgbox"> <img class="quanimg" src="https://img4.egou.com/taobao/201706/30/c1b5c2af145de9b6c29818750bcd83a9.jpg"> </div>' + '                    <div class="paybox">' + '                        <div class="top"> <span class="ico">¥</span> <span class="quanpay1">5</span> </div>' + '                        <div class="btm"> 券后价：¥ <span class="quanpay2">93</span> <span class="yj">[<span class="quanpay3">¥98</span>]</span>' + '                        </div>' + '                    </div>' + '                </div>' + '            </div>' + '            <div class="box-btn">立即领取</div>' + // '            <div class="box-link"></div>' +
                            '        </div>' + '    </div>' + '</div>');
                        var p = $(ht).appendTo('body');
                        var $mask = $('.common-popup-gift-wrapper-mask');
                        var $adimg = $('.common-popup-gift-wrapper .box-bottom .box-img .ad-img');
                        var $coupon = $('.common-popup-gift-wrapper .box-bottom .box-img .coupon-div');
                        var $top = $('.common-popup-gift-wrapper .box-top');
                        if (ad.adtype === 2) {
                            // 优惠券
                            $adimg.remove();
                            $coupon.find('.quanimg').attr('src', ad.ad_image_url);
                            //广告图片
                            $coupon.find('#quanpay1').text(ad.label1_money / 100);
                            //券额度
                            $coupon.find('#quanpay2').text(ad.m_useq_price / 100);
                            //券后价格
                            $coupon.find('#quanpay3').html('&yen' + ad.m_discount_price / 100);
                            //券前价格
                        } else {
                            $coupon.remove();
                            $adimg.attr('src', ad.ad_image_url);
                        }
                        setTimeout(function() {
                            $top.addClass('fireworks');
                        }, 700);
                        p.find('.close-icon').on('click', function() {
                            p.remove();
                            t.getCommendAct(t.getParam('actId'), t.getParam('adzoneId'), t.getParam('logId'), data.lottery_left_times);
                        });
                        p.find('.coupon-div, .box-btn, .ad-img').on('click', function() {
                            p.remove();
                            if (ad.ad_jumpDirectly === 0) {
                                window.location.href = window.location.origin + '/spread/ad-detail.htm?adzone_click_id=' + data.record_id + '&choosen_tag=' + ad.choosen_tag;
                            } else {
                                t.proxy_getJSON(window.location.protocol + t.getApiDomain() + '/award_use/award_get_id.htm', function(ret) {
                                    if (ret.code === 200) {
                                        window.location.href = ret.data.ad_url;
                                    } else {
                                        t.errorWin(ret.message || ret.data);
                                    }
                                }, {
                                    adzone_click_id: data.record_id
                                })
                            }
                        });
                        opts.afterLottery && opts.afterLottery(ret);
                }
            }
        },
        iosNotice: function(container) {
            var t = this;
            container = container || $('.main') || $('body');
            if (t.getDevice() === 'IOS') {
                var _bodyHeight = $('body').height();
                var mainWinH = $('.main').height();
                if (mainWinH < _bodyHeight) {
                    container.append('<div class="ios-notice fixed">*兑换项与活动和设备生产商Apple lnc.公司无关</div>');
                } else {
                    container.append('<div class="ios-notice">*兑换项与活动和设备生产商Apple lnc.公司无关</div>');
                }
            }
        },
        // generateMobile: function () {
        //     var numArray = new Array("139", "138", "137", "136", "135", "134", "159", "158", "157", "150", "151", "152", "188", "187", "182", "183", "184", "178", "130", "131", "132", "156", "155", "186", "185", "176", "133", "153", "189", "180", "181", "177"); // 这是目前找到的除了数据卡外的手机卡前三位，类型是字符串数组
        //     var arraryLength = numArray.length; // 获取数组长度，这样如果手机号前三位取值单位发生变化，在下一步求i的地方就不用修改随机数取值范围了
        //     var i = parseInt(Math.random() * arraryLength); // 注意乘以的是上面numArray数组的长度，这样就可以取出数组中的随机一个数。random的取值范围是大于等于0.0，小于1.0，相乘后得到的就是0到（数组长度-1）的值。
        //     var num = numArray[i]; // 取出随机的手机号前三位并赋值给num，手机号前三位是字符串类型的
        //     for (var j = 0; j < 8; j++) {
        //         if (j < 4) {
        //             num = num + '*';
        //         } else {
        //             num = num + Math.floor(Math.random() * 10); // num是字符串，后面的数字被当做字符串。所以变成两个字符串拼接了
        //         }
        //     }
        //     return num;
        // },
        // 最新中奖信息
        newest: function(container) {
            var t = this;
            var adzoneId = t.getParam('adzoneId');
            var actId = t.getParam('actId');
            var data = t.data.falseInfo[adzoneId];
            if (data) {
                _after();
            } else {
                T.proxy_getJSON(window.location.protocol + t.getApiDomain() + '/notice/list.htm', function(ret) {
                    if (ret.code === 200 && ret.data) {
                        var arr = [];
                        $.each(ret.data, function(ind, item) {
                            arr.push(item.replace(/获得了(.*)$/g, '获得了<span class="aw">$1</span>'));
                        });
                        data = t.data.falseInfo[adzoneId] = arr;
                        _after();
                    }
                }, {
                    adzoneId: adzoneId,
                    act_id: actId
                });
            }

            function _after() {
                if (data.length === 0) {
                    return;
                }
                var current = 0;
                container = container || $('.newinfo');
                if (container.length === 0) {
                    container = $('<div class="newinfo"><div class="bg"></div></div>').appendTo('body');
                }
                var $newinfo = container;
                var _task = null;

                function _fun() {
                    $newinfo.css('left', '-100%');
                    setTimeout(function() {
                        var awardht = data[current++];
                        $newinfo.find('.bg').html(awardht);
                        $newinfo.css('left', '0.25rem');
                        current = current % data.length;
                    }, 1000);
                    _task = setTimeout(_fun, 3000);
                }
                _task = setTimeout(_fun, 0);
            }
        },
        correctUrl: function(url) {
            // 如果是http资源，当前是https，则做替换
            url = url.replace(/^https?:\/\//g, window.location.protocol + "//");
            // 如果资源是后台配置的display.adhudong.com资源，自动替换为当前域名
            url = url.replace(/^https?:\/\/display\.adhudong\.com/g, window.location.origin);
            return url;
        },
        getCommendAct: function(actId, adzoneId, logId, times) {
            //抽奖次数为0的时候的推荐活动弹窗
            if (times > 0)
                return false;
            var t = this;
            var commendHtml = '<div class="recommendMask">' + '    <div class="recommendWin">' + '   	<div class="close"></div>' + '       <div class="box">' + '       		<div class="top"></div>' + '       		<div class="admain">' + '       		</div>' + '        </div>' + '    </div>' + '</div>';
            $('body').append(commendHtml);
            var params = {
                "act_id": actId,
                "adzone_id": adzoneId
            };
            var myDomain = t.getApiDomain();
            var ajaxUrl = window.location.protocol + myDomain + '/activity/recommended.htm';
            t.proxy_getJSON(ajaxUrl, function(ret) {
                if (ret.code == 200) {
                    var _html = '';
                    var data = ret.data;
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].type == 'act') {
                            _html += '<div class="adbox checktuijian" data-actname=' + data[i].act_name + ' data-actid=' + data[i].act_id + '>' + '<div class="ad">' + '	<img src=' + data[i].banner_image_url + ' />' + '</div>' + '<div class="btn">立即参与</div>' + '<a class="link" href="javascript:;"></a>' + '</div>'
                        } else {
                            _html += '<div class="adbox checklottery">' + '	<div class="ad">' + '		<img src="https://egouimg1.qutu.com/discountplus/common/lotteryend4.png" />' + '	</div>' + '	<div class="btn" id="checklottery">查看奖励</div>' + '	<a class="link" href="javascript:;"></a>' + '</div>'
                        }
                    }
                    if (data.length == 1) {
                        $('.recommendWin .box .admain').css("padding-bottom", "1.2rem")
                    }
                    $(".recommendWin .admain").html(_html);
                    $(".recommendMask").fadeIn(function() {
                        $(".recommendWin").show();
                    })
                }
            }, params)
            var pageTitle = document.title;
            var WinTjAction = '抽奖活动页|' + pageTitle + '|defalt|活动ID_' + actId + '|媒体ID_' + t.getParam('mediaId');
            _czc.push(["_trackEvent", '展示推荐弹窗', WinTjAction, '']);
            var paramsAct = {
                'adzoneId': adzoneId,
                'logId': logId
            }
            $('body').on('click', '.recommendWin .checktuijian', function(e) {
                //点击推荐活动弹窗我的奖励
                var actid = $(this).data('actid') || '';
                var actName = $(this).data('actname') || '';
                var ajaxUrlAct = window.location.protocol + myDomain + '/preload/activity/' + actid + '.htm';
                t.proxy_getJSON(ajaxUrlAct, function(ret) {
                    if (ret.code == 200) {
                        var data = ret.data;
                        var nextUrl = data.locationAdress;
                        var referrer = encodeURIComponent(document.referrer);
                        var acturl = nextUrl + '?logId=' + data.logId + '&adzoneId=' + data.adzoneId + '&actId=' + data.actId + '&ref=' + referrer + '&mediaId=' + data.mediaId;
                        var actionData = actName + '|活动ID_' + data.actId;
                        _czc.push(["_trackEvent", '点击推荐弹窗', WinTjAction, actionData]);
                        setTimeout(function() {
                                window.location.href = acturl;
                            }, 500)
                            //window.open(acturl)
                    } else {
                        t.errorWin(ret.message || ret.data);
                    }
                }, paramsAct)
            })
            $('body').on('click', '.checklottery .link', function(e) {
                //点击推荐活动弹窗我的奖励
                _czc.push(["_trackEvent", '点击推荐弹窗', WinTjAction, '我的奖品页']);
                window.open(window.location.origin + '/spread/my-gift.htm' + window.location.search)
            })
            $('body').on('click', '.recommendWin .close', function(e) {
                e.stopPropagation()
                $(".recommendMask").remove();
            });

        },
        getRedBox: function(redPack, actId, adzoneId, mediaId) {
            //右下角添加红包app的下载入口
            var t = this;
            if (redPack == 1 && t.getDevice() == 'android') {
                pageTitle = document.title
                var staIndexAction = '抽奖活动页|广告位ID_' + adzoneId + '|' + pageTitle + '|活动ID_' + actId + '|defalt|媒体ID_' + mediaId;
                var _url = 'http://m.bigou.cn/download/hongbao-1.0.0.apk';
                $('body').append("<a href=" + _url + " class='common-getred'><span></span></a>");
                _czc.push(['_trackEvent', '红包天天抢入口展示', staIndexAction, '']);
                $('html').on('click', '.common-getred', function() {
                    _czc.push(['_trackEvent', '点击红包天天抢入口', staIndexAction, '']);
                })
            }

        },
    };
})();