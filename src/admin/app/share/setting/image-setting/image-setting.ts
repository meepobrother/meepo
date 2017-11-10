import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'image-setting',
    templateUrl: './image-setting.html',
    styleUrls: ['./image-setting.scss']
})
export class ImageSetting implements OnInit {
    @Input() widget: ImageDefault = new ImageDefault();
    constructor() { }

    ngOnInit() { }

    setRound(){
        this.widget.height = this.widget.width;
        this.widget['border-radius'] = '50%';
    }
}

export class ImageDefault{
    // 尺寸
    width: string;
    height: string;
    // 间距
    'margin-left': string;
    'margin-top': string;
    // 圆角
    'border-radius': string;
}
