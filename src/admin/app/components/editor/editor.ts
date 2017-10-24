import { Component, OnInit, forwardRef, Inject } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DOCUMENT } from '@angular/common';
import { Subject } from 'rxjs/Subject';
@Component({
    selector: 'editor',
    templateUrl: './editor.html',
    styleUrls: ['./editor.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => EditorComponent),
            multi: true
        }
    ]
})
export class EditorComponent implements OnInit, ControlValueAccessor {
    onChangeFn: (_: any) => {};
    swiper: any;
    loadSuccess: Subject<any> = new Subject();
    constructor(
        @Inject(DOCUMENT) public document: any
    ) { 
        this.loadSuccess.subscribe(UE=>{
            var ue = UE.getEditor('container');
        });
    }

    ngOnInit() { 
        this.loadJScript();
    }

    writeValue(obj: any): void {
        
    }
    
    registerOnChange(fn: any): void {
        this.onChangeFn = fn;
    }
    registerOnTouched(): void {

    }

    loadJScript() {
        const script = this.document.createElement('script');
        script.type = 'text/javascript';
        script.src = "https://meepo.com.cn/meepo/libs/we7/web/components/ueditor/ueditor.all.min.js";
        script.onload = () => {
            this.swiper = window['UE'];
            this.loadSuccess.next(this.swiper);
        };
        script.onerror = () => {
            console.log('Swiper插件加载失败');
        };
        this.document.body.appendChild(script);
    }
}