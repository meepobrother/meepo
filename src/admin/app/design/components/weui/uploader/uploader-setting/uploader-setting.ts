import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MeepoUploader } from '../../../../classes';
@Component({
    selector: 'uploader-setting',
    templateUrl: './uploader-setting.html',
    styleUrls: ['./uploader-setting.scss']
})
export class UploaderSetting implements OnInit, OnChanges {
    @Input() widget: MeepoUploader = new MeepoUploader();
    innerStyle: any;
    constructor() { }

    ngOnInit() { 
        this.innerStyle = this.widget.style;
    }

    ngOnChanges(changes: SimpleChanges){
        if('widget' in changes){
            this.innerStyle = this.widget.style;
        }
    }
}

