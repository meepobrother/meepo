import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MeepoUploader } from '../../../../classes';
@Component({
    selector: 'uploader-view',
    templateUrl: './uploader-view.html',
    styleUrls: ['./uploader-view.scss']
})
export class UploaderView implements OnInit, OnChanges {
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

