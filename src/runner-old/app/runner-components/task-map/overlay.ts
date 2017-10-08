
export function CustomOverlay(position, index,dom) {
  this.index = index;
  this.position = position;
  this.domContent = dom;
}
CustomOverlay.prototype = new window['qq'].maps.Overlay();
//定义construct,实现这个接口来初始化自定义的Dom元素
CustomOverlay.prototype.construct = function() {
  //将dom添加到覆盖物层
  var div = this.div = document.createElement("div");
  var divStyle = this.div.style;
  divStyle.position = "absolute";
  divStyle.width = "24px";
  divStyle.height = "24px";
  divStyle.backgroundColor = "#FFFFFF";
  divStyle.border = "1px solid #000000";
  divStyle.textAlign = "center";
  divStyle.lineHeight = "24px";
  divStyle.borderRadius = "15px";
  divStyle.cursor = "pointer";
  this.div.innerHTML = this.domContent;

  var panes = this.getPanes();
  panes.overlayMouseTarget.appendChild(this.div);
  var self = this;
}
//实现draw接口来绘制和更新自定义的dom元素
CustomOverlay.prototype.draw = function() {


  var overlayProjection = this.getProjection();
  //返回覆盖物容器的相对像素坐标
  var pixel = overlayProjection.fromLatLngToDivPixel(this.position);
  var divStyle = this.div.style;
  divStyle.left = pixel.x - 12 + "px";
  divStyle.top = pixel.y - 12 + "px";
}
//实现destroy接口来删除自定义的Dom元素，此方法会在setMap(null)后被调用
CustomOverlay.prototype.destroy = function() {
  this.div.onclick = null;
  this.div.parentNode.removeChild(this.div);
  this.div = null
}

