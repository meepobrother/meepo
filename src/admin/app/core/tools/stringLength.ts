//字符长度
//获得字符串实际长度，中文2，英文1

export function stringLength(str) {
    var realLength = 0,
        len = str.length,
        charCode = -1;
    for (var i = 0; i < len; i++) {
        charCode = str.charCodeAt(i);
        if (charCode > 128) {
            realLength += 2;
        } else {
            realLength += 1;
        }
    }
    return realLength;
};