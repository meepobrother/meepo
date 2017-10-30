;

function mask(target, config) {
    if (!target)
        return;
    // 默认配置
    var initConfig = {
        fillStyle: "color",
        //填充的方式 支持两种 color & image
        fillContent: "#cccccc",
        //填充的内容 根据fillStyle 如果fillStyle=color则填颜色 fillStyle=image则填图片地址或base64
        percent: 100,
        //
        radius: 15,
        //涂抹笔触的半径 默认15
        disable: false,
        //是否封锁 默认不封锁
        touchstart: function() {},
        //手指按下的时候执行
        touchmove: function() {},
        //手指移动的时候执行
        touchend: function() {},
        //手指离开的时候执行
        complete: function() {},
        //刮到指定百分比之后执行
        inited: function() {} //初始化之后执行
    };
    config = config || {};
    this.config = this.extend(config, initConfig, false);
    this.target = target;
    this.ctx = this.target.getContext('2d');
    this.w = this.target.clientWidth;
    this.h = this.target.clientHeight;
    this.init();
};
mask.prototype = {
    changeConfig: function(config) {
        var _this = this;
        for (var x in config) {
            _this.config[x] = config[x];
        }
    },
    disable: function() {
        var _this = this;
        _this.changeConfig({
            disable: true
        });
    },
    enable: function() {
        var _this = this;
        _this.changeConfig({
            disable: false
        });
    },
    // 清除画布
    clear: function() {
        var _this = this;
        _this.target.style.webkitTransitionDuration = "500ms";
        _this.target.style.MozTransitionDuration = "500ms";
        _this.target.style.msTransitionDuration = "500ms";
        _this.target.style.OTransitionDuration = "500ms";
        _this.target.style.transitionDuration = "500ms";
        _this.target.style.opacity = 0;
        setTimeout(function() {
            _this.ctx.clearRect(0, 0, _this.w, _this.h);
            _this.target.style.webkitTransitionDuration = "0ms";
            _this.target.style.MozTransitionDuration = "0ms";
            _this.target.style.msTransitionDuration = "0ms";
            _this.target.style.OTransitionDuration = "0ms";
            _this.target.style.transitionDuration = "0ms";
            _this.target.style.opacity = 1;
        }, 500);
    },
    // 初始化
    init: function() {
        var _this = this;

        var config = _this.config;
        var target = _this.target;
        var ctx = _this.ctx;
        var w = _this.w;
        var h = _this.h;

        var mousedown = false;
        target.width = w;
        target.height = h;
        target.style.backgroundColor = "#ffffff";
        ctx.globalCompositeOperation = "source-over";
        if (config.fillStyle == "color") {
            ctx.fillStyle = config.fillContent;
            ctx.fillRect(0, 0, w, h);
            ctx.globalCompositeOperation = "destination-out";
            target.style.backgroundColor = "transparent";
            config.inited && config.inited();
        } else if (config.fillStyle == "image") {
            preImage(config.fillContent, function() {
                ctx.drawImage(this, 0, 0, w, h);
                ctx.globalCompositeOperation = "destination-out";
                target.style.backgroundColor = "transparent";
                config.inited && config.inited();
            });
        } else {
            return false;
        }
        var hastouch = "ontouchstart" in window ? true : false;
        var tapstart = hastouch ? "touchstart" : "mousedown";
        var tapmove = hastouch ? "touchmove" : "mousemove";
        var tapend = hastouch ? "touchend" : "mouseup";

        target.addEventListener(tapstart, eventDown);
        target.addEventListener(tapend, eventUp);
        target.addEventListener(tapmove, eventMove);

        function preImage(url, callback) {
            var img = new Image();
            img.src = url;
            if (img.complete) {
                // 如果图片已经存在于浏览器缓存，直接调用回调函数
                callback.call(img);
                return;
                //直接返回，不用再处理onload事件
            }
            img.onload = function() {
                //图片下载完毕时异步调用callback函数。
                callback.call(img);
                //将回调函数的this替换为Image对象
            };
        }

        function eventDown(e) {
            e.preventDefault();
            // console.log(config);
            if (config.disable)
                return false;
            //如果设置了不可刮 则返回false
            if (e.changedTouches) {
                e = e.changedTouches[e.changedTouches.length - 1];
            }
            mousedown = true;
            config.touchstart && config.touchstart(e);
        }

        var touchCount = 1;
        //刮的次数
        function eventUp(e) {
            e.preventDefault();
            if (config.disable)
                return false;
            //如果设置了不可刮 则返回false
            if (e.changedTouches) {
                e = e.changedTouches[e.changedTouches.length - 1];
            }
            mousedown = false;
            config.touchend && config.touchend(e);
            try {
                // 假如支持getImageData跨域
                var data = ctx.getImageData(0, 0, w, h).data;
                //ctx.getImageData(0, 0, w, h).data是用rgba数值组成的数组
                var area = 0;
                //被刮去的面积
                for (var i = 0; i < data.length; i += 4) {
                    if (data[i + 3] == 0) {
                        area++;
                    }
                }

                // 当刮了config.percent%的时候自动抹去
                var percent = parseInt(config.percent) / 100;
                // percent = parseInt(percent ? percent : 100) / 100;
                if (area >= w * h * percent) {
                    _this.clear();
                    config.complete && config.complete();
                }
            } catch (err) {
                var percent = parseInt(config.percent) / 10;
                // console.log(percent);
                // percent = parseInt(percent ? percent : 100) / 10;
                // console.log("所引用图片地址不属于本域名 canvas中getImageData方法不支持跨域 改为刮了" + percent + "次之后自动抹去");
                touchCount++;
                if (touchCount > percent) {
                    _this.clear();
                    config.complete && config.complete();
                };
            }
        }

        function eventMove(e) {
            e.preventDefault();
            if (config.disable)
                return false;
            //如果设置了不可刮 则返回false
            if (mousedown) {
                if (e.changedTouches) {
                    e = e.changedTouches[e.changedTouches.length - 1];
                }
                // var offsetX = getAbsPoint(target).x;
                // var offsetY = getAbsPoint(target).y;
                // var x = e.pageX - offsetX;
                // var y = e.pageY - offsetY;

                var offsetX = target.getBoundingClientRect().left;
                var offsetY = target.getBoundingClientRect().top;
                var x = e.clientX - offsetX;
                var y = e.clientY - offsetY;

                ctx.beginPath();
                ctx.arc(x, y, parseInt(config.radius), 0, Math.PI * 2);
                ctx.fill();
                config.touchmove && config.touchmove(e);
            }
        }
    },

    // 对 json 对象进行更新扩展，会修改待更新扩展的对象，同时将其返回。
    extend: function(destination, source, override, replacer) {
        if (override === undefined)
            override = true;
        for (var property in source) {
            if (override || !(property in destination)) {
                if (replacer)
                    replacer(property);
                else
                    destination[property] = source[property];
            }
        }
        return destination;
    }
};