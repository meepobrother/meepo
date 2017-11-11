import { Directive, OnInit, ElementRef, Input, Output, EventEmitter } from '@angular/core';
declare const layui: any;
import { ApiService } from '../../../core';

@Directive({
    selector: '[uploader]'
})
export class ImageSelectDirective implements OnInit{
    @Input() uploader: string = '';
    @Output() uploaderChange: EventEmitter<any> = new EventEmitter();

    constructor(
        public imgSelect: ElementRef,
        public api: ApiService
    ){

    }

    ngOnInit(){
        layui.use('upload', () => {
            var upload = layui.upload;
            //执行实例
            var uploadInst = upload.render({
                elem: this.imgSelect.nativeElement //绑定元素
                , url: this.api.doMobileUrl('upload','imeepos_runner')//this.api.murl('utility/file/upload', { type: 'image' }) //上传接口
                , done: (res, index, upload) => {
                    //上传完毕回调
                    this.uploader = res.url;
                    this.uploaderChange.emit(this.uploader);
                }
                , error: () => {
                    //请求异常回调
                    console.log('上传失败');
                }
            });
        });
    }
}