$(function() {
    var myDomain = T.getApiDomain();
    var actId = getParam('actId');
    var logId = getParam('logId');
    var adzoneId = getParam('adzoneId');
    var mediaId = getParam('mediaId');
    var scratchAreaImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcIAAAEkCAIAAAAzZ6aNAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ3REYzRkUxNjdBMTExRTc4NTAwOTBFQzMwNUQzNkVGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ3REYzRkUyNjdBMTExRTc4NTAwOTBFQzMwNUQzNkVGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDdERjNGREY2N0ExMTFFNzg1MDA5MEVDMzA1RDM2RUYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDdERjNGRTA2N0ExMTFFNzg1MDA5MEVDMzA1RDM2RUYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4+7GAgAAAZbElEQVR42uyd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';
    var lottery;
    var popUpData;

    function getParam(name) {
        var tmp,
            str = window.location.search.replace('?', '');
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
    };

    function cssLoader(url, callback) {
        var doc = document,
            head = doc.getElementsByTagName('head')[0],
            myCss;

        myCss = doc.createElement('link');
        myCss.href = url;
        myCss.rel = 'stylesheet';
        head.appendChild(myCss);
        myCss.onload = function() {
            callback();
        }
    };

    function init(cb) {
        var act_id = window.YHP.act_id,
            adzone_id = window.YHP.adzoneId;
        if (act_id != "undefined" && act_id != "" && act_id != null) {
            $.ajax({
                url: window.location.protocol + myDomain + '/user_lottery_info.htm',
                data: { "act_id": act_id, "adzoneId": adzone_id },
                timeout: 3000,
                dataType: 'json',
                xhrFields: {
                    withCredentials: true
                },
                success: function(data) {
                    if (data.code == 200) {
                        var data = data.data;
                        $('.scratch-times >span').text(data.lottery_left_times);
                        $('.scratch-btn-group-wrapper').show();
                        $('#scratch-img').remove();
                        $('.scratch-area').prepend('<canvas id="scratch-img"></canvas>');
                        scratch();
                        $('.mask').fadeOut();
                        $('.popup-wrapper').hide();
                        cb();


                    }
                },
                error: function() {
                    errorWin('网络拥堵,稍后再试');
                }
            });
        }
    };

    function scratch() {
        lottery = new mask(document.getElementById('scratch-img'), {
            fillStyle: "image",
            fillContent: scratchAreaImg,
            percent: "20",
            radius: '30',
            complete: function() {
                popMess(popUpData);
            }
        });
    }

    function isRequireLogin(actionFn) {
        if (typeof(window.YHP) != "undefined" && window.YHP.login_type != "undefined") {
            if (window.YHP.login_type == 0) {
                actionFn();
            } else {
                getUserStatus() == 0 ? loginFn(actionFn) : actionFn();
            }
        } else {
            alert('登录信息错误，重新访问起始页！');
        }
    }

    function popMess(data) {
        var ad = data.ad;
        //award_type 抽奖类型，5为再来一次，6谢谢参与，7为幸运奖
        if (data) {
            $('.rotateWrap .sysNum').text(data.lottery_left_times);
            if (data.award_type == 6) { //谢谢参与
                $('.mask').fadeIn(function() {
                    $('.thanks-wrapper').show();
                })
            } else if (data.award_type == 5) { //再来一次
                $('.mask').fadeIn(function() {
                    $('.again-wrapper').show();
                })
            } else if (data.award_type == 7) { //幸运奖
                $('.popup-wrapper .box-title').text(data.ad.ad_name);
                $('.popup-wrapper .box-description >p').text(data.ad.ad_brief_introduction);
                if (ad.adtype == 2) {
                    $('.box-img').empty().append('<div class="adQuanWrap" style="display: block;"> <div class="imgbox"> <img class="quanimg" src="' + ad.ad_image_url + '"> </div> <div class="paybox"> <div class="top"> <span class="ico">¥</span> <span class="quanpay1">' + ad.label1_money / 100 + '</span> </div> <div class="btm"> 券后价：¥ <span class="quanpay2">' + ad.m_useq_price / 100 + '</span> <span class="yj">[<span class="quanpay3">' + '&yen' + ad.m_discount_price / 100 + '</span>]</span> </div> </div> </div> <div class="adImgWrap" style="display: none;"><img class="adImg" src=""></div>')
                    $('.mask').fadeIn(function() {
                        $('.box-wrapper').show(function() {
                            $('.box-wrapper').addClass('move');
                            setTimeout(function() {
                                $('.box-wrapper .box-top').addClass('fireworks');
                                setTimeout(function() {
                                    $('.box-wrapper .close-icon').fadeIn();
                                }, 300)
                            }, 700);
                        });
                    });
                } else {
                    $('.box-img').empty().append('<img src="" alt="" />');
                    $('.popup-wrapper .box-img >img').attr('src', data.ad.ad_image_url);
                    $('.mask').fadeIn(function() {
                        $('.box-wrapper').show(function() {
                            $('.box-wrapper').addClass('move');
                            setTimeout(function() {
                                $('.box-wrapper .box-top').addClass('fireworks');
                                setTimeout(function() {
                                    $('.box-wrapper .close-icon').fadeIn();
                                }, 300)
                            }, 700);
                        });
                    });
                }
                if (ad.ad_jumpDirectly == 0) {
                    $('.popup-wrapper .box-btn').data('href', window.location.origin + '/spread/ad-detail.htm?' + 'adzone_click_id=' + data.record_id + '&choosen_tag=' + ad.choosen_tag);
                    $('.popup-wrapper .box-btn').data('type', 0);
                    // $('#lotterWin .useDes').show().attr('href', window.location.origin + '/spread/ad-detail.htm?'+ 'adzone_click_id='+data.record_id+'&choosen_tag='+ad.choosen_tag);
                } else if (ad.ad_jumpDirectly == 1) {
                    $('.popup-wrapper .box-btn').data('href', '');
                    $('.popup-wrapper .box-btn').data('type', 1);
                    $('.popup-wrapper .box-btn').data('clickid', data.record_id);
                    // $('#lotterWin .useDes').hide().attr('href', '');
                }
            } else {
                $('.mask').fadeIn(function() {
                    $('.thanks-wrapper').show();
                })
            }
        } else {
            $('#thanksWin .lotteryName').text('谢谢参与');
            egou.popup.open('#thanksWin', {
                "background": "black",
                "z-index": "90"
            });
        }
    }

    function getGiftsInfo(awards) {
        var temp = '';
        for (var i = 0, j = awards.length; i < j; i++) {
            if (awards[i].actAwardType != 5 && awards[i].actAwardType != 6)
                temp += '<li class="gift-wrapper"> <div class="gift-layer"> <img src="' + awards[i].icon_image_url + '" alt=""> </div> <div class="gift-title">' + awards[i].award_name + '</div> </li>';
        }
        $('.gifts-list').append(temp);
    }
    //app是否是ios
    function isIos() {
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/iPhone\sOS/i) == "iphone os") {
            return true;
        } else {
            return false;
        }
    }
    if (isIos()) {
        var _bodyHeight = $('body').height();
        if ($('.wrap').length) {
            var mainWinH = $('.wrap').height();
            if (mainWinH < _bodyHeight) {
                $('.wrap').append('<div class="notice fixed">*兑换项与活动和设备生产商Apple lnc.公司无关</div>');
            } else {
                $('.wrap').append('<div class="notice">*兑换项与活动和设备生产商Apple lnc.公司无关</div>');
            }
        } else {
            $('body').append('<div class="notice">*兑换项与活动和设备生产商Apple lnc.公司无关</div>');
        }
    }
    var errHtml = '<div class="popWin" id="errWin"><a class="popClose"></a><div class="popBody">' +
        '<div class="signInfo"><div class="thanks"><span class="thanks_icon"><img src="https://egouimg1.qutu.com/discountplus/lotter/icon3.png"/></span></div>' +
        '<div class="errMess"></div></div></div></div>';

    function errorWin(err_msg) {
        if (!$('#errWin').length) {
            $('body').append(errHtml);
        }
        $('#errWin .errMess').text(err_msg);
        egou.popup.open('#errWin', { "background": "black", "z-index": "90" });
    }

    function getDevice() {
        var ua = navigator.userAgent.toLowerCase();
        if (/iphone|ipad|ipod/.test(ua)) {
            return 'IOS';
        } else if (/android/.test(ua)) {
            return 'android';
        }
    }
    $.ajax({
        url: window.location.protocol + myDomain + '/activity/' + actId + '.htm',
        data: {
            'adzoneId': adzoneId,
            'logId': logId
        },
        timeout: 3000,
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        success: function(data) {
            if (data.code == 200) {
                var data = data.data;
                var actRuleInfo = data.act.actRuleInfo;
                $('.rules-content').html(actRuleInfo);
                window.YHP = {};
                var adzone = data.awards;
                YHP.awards = [];
                for (var i = 0; i < adzone.length; i++) {
                    YHP.awards.push({
                        "award_name": adzone[i].award_name,
                        "icon_image_url": adzone[i].icon_image_url,
                        "act_award_id": adzone[i].act_award_id,
                        "actAwardType": adzone[i].actAwardType
                    })
                }
                YHP.act_id = data.act.id;
                YHP.adzone_click_id = data.adzone.adzoneName;
                YHP.login_type = data.login_type;
                YHP.adzoneId = data.adzone.id;
                YHP.css = data.css.indexOf('http:') >= 0 ? data.css.replace('http:', window.location.protocol) : window.location.protocol + data.css;
                cssLoader(YHP.css, function() {
                    $('.wrap').show();
                    getGiftsInfo(YHP.awards);
                    $('.top >.go-to-gifts').data('href', window.location.origin + '/activity/spread/my-gift.html?logId=' + logId);
                    (function init() {
                        var act_id = window.YHP.act_id,
                            adzone_id = window.YHP.adzoneId;
                        if (act_id != "undefined" && act_id != "" && act_id != null) {
                            $.ajax({
                                url: window.location.protocol + myDomain + '/user_lottery_info.htm',
                                data: { "act_id": act_id, "adzoneId": adzone_id },
                                timeout: 3000,
                                dataType: 'json',
                                xhrFields: {
                                    withCredentials: true
                                },
                                success: function(data) {
                                    if (data.code == 200) {
                                        var data = data.data;
                                        $('.scratch-times >span').text(data.lottery_left_times);
                                        T.getCommendAct(actId, adzoneId, logId, data.lottery_left_times);
                                    } else {
                                        errorWin('网络拥堵,稍后再试');
                                    }
                                },
                                error: function() {
                                    errorWin('网络拥堵,稍后再试');
                                }
                            });
                        }
                    })();
                    scratch();
                    $('.main').show();
                    T.getRedBox(data.redPack, actId, adzoneId, mediaId);
                })
            } else {
                errorWin('网络拥堵,稍后再试');
            }
        },
        error: function() {
            errorWin('网络拥堵,稍后再试');
        }
    });
    $('.rules-wrapper .close-icon,.again-wrapper .close-icon, .rules-btn,.again-wrapper .confirm-btn').on('click', function() {
        init();
    });
    $('.box-wrapper .close-icon,.thanks-wrapper .close-icon,.thanks-wrapper .confirm-btn').on('click', function() {
        init(function() {
            T.getCommendAct(actId, adzoneId, logId, parseInt($('.scratch-times >span').text()));
        });
    });


    $('body').on('click', '.popup-wrapper .box-img', function() {
        $('.popup-wrapper .box-btn').trigger('click');
    })
    $('body').on('click', '.popup-wrapper .box-btn', function() {
        var type = $(this).data('type'),
            _href = $(this).data('href'),
            clickId = $(this).data('clickid');
        if (type == 1) {
            $.ajax({
                url: window.location.protocol + myDomain + '/award_use/award_get_id.htm',
                data: { 'adzone_click_id': clickId },
                timeout: 3000,
                dataType: 'json',
                xhrFields: {
                    withCredentials: true
                },
                success: function(data) {
                    if (data.code == 200) { //请求成功
                        var data = data.data;
                        init(function() {
                            window.location.href = data.ad_url;
                        });
                    }
                },
                error: function() {
                    errorWin('网络拥堵,稍后再试');
                }
            })
        } else if (type == 0) {
            window.location.href = _href;
        }
    });
    $('.go-to-rules').on('click', function() {
        $('.rules-wrapper').show(
            function() {
                $('.mask').fadeIn();
            }
        );
    });
    $('.scratch-btn').on('click', function() {
        var leftTimes = parseInt($('.scratch-times > span').text());
        var device = getDevice() || '';
        if (leftTimes) {
            $.ajax({
                url: window.location.protocol + myDomain + '/lottery.htm',
                data: {
                    act_id: window.YHP.act_id,
                    adzone_click_id: logId,
                    device: device
                },
                timeout: 3000,
                dataType: 'json',
                xhrFields: {
                    withCredentials: true
                },
                success: function(data) {
                    if (data.code == 200) {
                        var data = data.data;
                        popUpData = data;
                        var ad = data.ad;
                        $('.scratch-btn-group-wrapper').hide();
                        if (data) {
                            $('.rotateWrap .sysNum').text(data.lottery_left_times);
                            $('.gift-img').empty().append('<img src="" alt="">');
                            if (data.award_type == 6) { //谢谢参与
                                $('.gift-img >img').attr('src', 'https://egouimg1.qutu.com/discountplus/home/thanks.jpg');
                                // $('.gift-img >span').text('谢谢参与');
                            } else if (data.award_type == 5) { //再来一次
                                $('.gift-img >img').attr('src', 'https://egouimg1.qutu.com/discountplus/home/again.jpg');
                                // $('.gift-img >span').text('再来一次');
                            } else if (data.award_type == 7) { //幸运奖
                                if (ad.adtype == 2) {
                                    $('.gift-img').empty().append('<div class="adQuanWrap" style="display: block;"> <div class="imgbox"> <img class="quanimg" src="' + ad.ad_image_url + '"> </div> <div class="paybox"> <div class="top"> <span class="ico">¥</span> <span class="quanpay1">' + ad.label1_money / 100 + '</span> </div> <div class="btm"> 券后价：¥ <span class="quanpay2">' + ad.m_useq_price / 100 + '</span> <span class="yj">[<span class="quanpay3">' + '&yen' + ad.m_discount_price / 100 + '</span>]</span> </div> </div> </div> <div class="adImgWrap" style="display: none;"><img class="adImg" src=""></div>');
                                } else {
                                    $('.gift-img >img').attr('src', ad.ad_image_url);
                                    // $('.gift-img >span').text(ad.ad_name);
                                }
                            } else {

                            }
                        } else {
                            errorWin('网络拥堵,稍后再试');
                        }
                    } else {
                        errorWin('网络拥堵,稍后再试');
                    }
                },
                error: function() {
                    errorWin('网络拥堵,稍后再试');
                }
            })
        } else {
            //errorWin('您的抽奖机会已用完');
            T.getCommendAct(actId, adzoneId, logId, leftTimes);
        }
    });
    $('.go-to-gifts').on('click', function() {
        var mediaId = getParam('mediaId');
        var _href = $(this).data('href');
        _href = _href.indexOf('?') >= 0 ? _href + '&mediaId=' + mediaId : _href + '?mediaId=' + mediaId;
        isRequireLogin(function() {
            window.location.href = _href;
            return false;
        })
    });
    $('body').on('click', '.popWin .popClose,.popWin .closeBtn', function(e) {
        $('.popWin .adImg').attr('src', '');
        egou.popup.close('.popWin', true);
        e.stopPropagation();
        e.preventDefault();
        $.ajax({
            url: window.location.protocol + myDomain + '/user_lottery_info.htm',
            data: { "act_id": act_id, "adzoneId": adzone_id },
            timeout: 3000,
            dataType: 'json',
            xhrFields: {
                withCredentials: true
            },
            success: function(data) {
                if (data.code == 200) {
                    var data = data.data;
                    $('.scratch-times >span').text(data.lottery_left_times);
                } else {
                    errorWin('网络拥堵,稍后再试');
                }
            },
            error: function() {
                errorWin('网络拥堵,稍后再试');
            }
        });
    });
    //返回跳过空白页
    window.addEventListener("popstate", function(e) {
        window.history.go(-1);
    });
});