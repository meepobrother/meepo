var app = getApp();
var pageData = {
    data: {"id":"53","cata_id":"20","app_id":"2","title":"\u6211\u7684","html_content":"","header":{"type":"layout-header","name":"\u5934\u90e8","children":[],"styleObj":{"color":"#fff"},"classObj":{"author":false},"containerClass":{"author":false},"containerStyle":{"color":"#fff"},"show":true,"content":"\u6211\u7684"},"body":{"type":"layout-body","name":"\u4e3b\u4f53","children":[],"styleObj":{"color":"#fff"},"classObj":{"author":false},"containerClass":{"author":false},"containerStyle":{"color":"#fff"},"show":true},"menu":{"type":"layout-menu","name":"\u5feb\u6377\u83dc\u5355","children":[],"styleObj":{"color":"#fff"},"classObj":{"author":false},"containerClass":{"author":false},"containerStyle":{"color":"#fff"}},"footer":{"type":"layout-footer","name":"\u5e95\u90e8","children":[{"title":"\u9996\u9875","icon":"fa fa-plus-square","link":"52"},{"title":"\u53d1\u5e03","icon":"fa fa-plus-square","link":"78"},{"title":"\u6211\u7684","icon":"fa fa-plus-square","link":"53"}],"styleObj":{"color":"#fff"},"classObj":{"author":false},"containerClass":{"author":false},"containerStyle":{"color":"#ffffff"},"show":true},"kefu":{"type":"layout-kefu","name":"\u5ba2\u670d","children":[],"styleObj":{"color":"#fff"},"classObj":{"author":false},"containerClass":{"author":false},"containerStyle":{"color":"#fff"}},"desc":"","url":null,"cover":null},
    goLink: function(event) {
        var link = event.currentTarget.dataset.link;
        wx.redirectTo({
            url: '../page' + link + '/page' + link
        });
    }
}
Page(pageData);