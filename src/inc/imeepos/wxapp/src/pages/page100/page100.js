var app = getApp();
var pageData = {
    data: {"id":"100","cata_id":"19","app_id":"2","title":"\u5e2e\u5fd9\u5217\u8868","html_content":"","header":{"type":"layout-header","name":"\u5934\u90e8","children":[],"styleObj":{"color":"#fff"},"classObj":{"author":false},"containerClass":{"author":false},"containerStyle":{"color":"#fff"},"show":true,"content":"\u5e2e\u5fd9"},"body":{"type":"layout-body","name":"\u4e3b\u4f53","children":[{"code":"adb6ad2c-9727-4699-870f-4100fd96ea4a","type":"meepo-list","name":"\u5217\u8868\u7ec4\u4ef6","animations":[],"children":[{"title":"\u6d4b\u8bd5","code":"all","image":".\/assets\/img\/a1.jpg"},{"title":"\u6d4b\u8bd5","code":"all","image":".\/assets\/img\/a2.jpg"},{"title":"\u6d4b\u8bd5","code":"all","image":".\/assets\/img\/a3.jpg"}],"styleObj":{"color":"#fff"},"classObj":[],"containerStyle":{"color":"#fff"},"containerClass":[],"model":"list-model-1"}],"styleObj":{"color":"#fff"},"classObj":{"author":false},"containerClass":{"author":false},"containerStyle":{"color":"#fff"},"show":true},"menu":{"type":"layout-menu","name":"\u5feb\u6377\u83dc\u5355","children":[],"styleObj":{"color":"#fff"},"classObj":{"author":false},"containerClass":{"author":false},"containerStyle":{"color":"#fff"}},"footer":{"type":"layout-footer","name":"\u5e95\u90e8","children":[],"styleObj":{"color":"#fff"},"classObj":{"author":false},"containerClass":{"author":false},"containerStyle":{"color":"#fff"}},"kefu":{"type":"layout-kefu","name":"\u5ba2\u670d","children":[],"styleObj":{"color":"#fff"},"classObj":{"author":false},"containerClass":{"author":false},"containerStyle":{"color":"#fff"}},"desc":"","url":null,"cover":null},
    goLink: function(event) {
        var link = event.currentTarget.dataset.link;
        wx.redirectTo({
            url: '../page' + link + '/page' + link
        });
    }
}
Page(pageData);