import { Component, OnInit, Input } from '@angular/core';
import { RunnerRegisterDefault } from '../../../../classes';
import { ApiService } from '../../../../../core';
declare const layui: any;
declare const jQuery: any;

@Component({
    selector: 'runner-register-setting',
    templateUrl: './runner-register-setting.html',
    styleUrls: ['./runner-register-setting.scss']
})
export class RunnerRegisterSetting implements OnInit {
    @Input() widget: RunnerRegisterDefault = new RunnerRegisterDefault();
    item: any;
    index: number;
    constructor(
        public api: ApiService
    ) { }

    ngOnInit() { 
        layui.use('upload', () => {
            var upload = layui.upload;
            //执行实例
            var uploadInst = upload.render({
                elem: jQuery('.uploader') //绑定元素
                , url: this.api.doMobileUrl('upload','imeepos_runner')//this.api.murl('utility/file/upload', { type: 'image' }) //上传接口
                , done: (res, index, upload) => {
                    //上传完毕回调
                    // this.widget.image = res.url;
                    this.item['src'] = res.url;
                    this.widget.images[this.index] = this.item;
                }
                , error: () => {
                    //请求异常回调
                    console.log('上传失败');
                }
            });
        });
    }

    upload(item: any, index: number){
        this.item = item;
        this.index = index;
    }
}
