var app = getApp();
var pageData = {
    data: {"id":"78","cata_id":"21","app_id":"2","title":"\u53d1\u5e03","html_content":"","header":{"type":"layout-header","name":"\u5934\u90e8","children":[],"styleObj":{"color":"#fff"},"classObj":{"author":false},"containerClass":{"author":false},"containerStyle":{"color":"#fff"},"show":true,"content":"\u53d1\u5e03\u9996\u9875"},"body":{"type":"layout-body","name":"\u4e3b\u4f53","children":[{"code":"0f58e7dd-0733-4a5d-8bd2-dbac0d67e5f5","type":"meepo-advs","name":"\u6ed1\u52a8\u5e7f\u544a","animations":[],"children":[{"title":"\u5e7f\u544a","image":"https:\/\/meepo.com.cn\/addons\/imeepos_runner\/template\/mobile\/design\/assets\/img\/p_big1.jpg"}],"styleObj":{"height":"120"},"classObj":[],"containerStyle":{"margin-top":5,"margin-bottom":0,"margin-left":0,"margin-right":0},"containerClass":[]}],"styleObj":{"color":"#fff"},"classObj":{"author":false},"containerClass":{"author":false},"containerStyle":{"color":"#fff"},"show":true},"menu":{"type":"layout-menu","name":"\u5feb\u6377\u83dc\u5355","children":[],"styleObj":{"color":"#fff"},"classObj":{"author":false},"containerClass":{"author":false},"containerStyle":{"color":"#fff"}},"footer":{"type":"layout-footer","name":"\u5e95\u90e8","children":[{"title":"\u9996\u9875","icon":"fa fa-plus-square","link":"52"},{"title":"\u53d1\u5e03","icon":"fa fa-plus-square","link":"78"},{"title":"\u6211\u7684","icon":"fa fa-plus-square","link":"53"}],"styleObj":{"color":"#fff"},"classObj":{"author":false},"containerClass":{"author":false},"containerStyle":{"color":"#fff"},"show":true},"kefu":{"type":"layout-kefu","name":"\u5ba2\u670d","children":[],"styleObj":{"color":"#fff"},"classObj":{"author":false},"containerClass":{"author":false},"containerStyle":{"color":"#fff"}},"desc":"","url":null,"cover":null},
    goLink: function(event) {
        var link = event.currentTarget.dataset.link;
        wx.redirectTo({
            url: '../page' + link + '/page' + link
        });
    }
}
Page(pageData);