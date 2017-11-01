import { Component, OnInit, Input, Inject, ElementRef, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { SelectPageDialog } from '../select-page-dialog';
declare const layui: any;
import { ApiService } from '../../../../core';

@Component({
    selector: 'image-link-title-select',
    templateUrl: './image-link-title-select.html',
    styleUrls: ['./image-link-title-select.scss']
})
export class ImageLinkTitleSelect implements OnInit {
    @Input() widget: ImageLinkTitleDefault = new ImageLinkTitleDefault();
    @ViewChild('imgSelect') imgSelect: ElementRef;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<any>,
        public dialog: MatDialog,
        public api: ApiService
    ) {

        this.dialogRef.afterOpen().subscribe(res => {
            let { image, link, title } = this.data;
            this.widget.image = image;
            this.widget.link = link;
            this.widget.title = title;
        });
    }

    save() {
        this.dialogRef.close(this.widget);
    }

    cancel() {
        this.dialogRef.close();
    }

    ngOnInit() {
        layui.use('upload', () => {
            var upload = layui.upload;
            //执行实例
            var uploadInst = upload.render({
                elem: this.imgSelect.nativeElement //绑定元素
                , url: this.api.doMobileUrl('upload','imeepos_runner')//this.api.murl('utility/file/upload', { type: 'image' }) //上传接口
                , done: (res, index, upload) => {
                    //上传完毕回调
                    console.log(res);
                    console.log(index);
                    console.log(upload);

                    this.widget.image = res.url;
                }
                , error: () => {
                    //请求异常回调
                    console.log('上传失败');
                }
            });
        });
    }

    selectImage() {

    }

    selectLink() {
        let dialogRef = this.dialog.open(SelectPageDialog);
        dialogRef.afterClosed().subscribe(link => {
            this.widget.link = link;
        });
    }
}

export class ImageLinkTitleDefault {
    image: string;
    link: string;
    title: string;
}