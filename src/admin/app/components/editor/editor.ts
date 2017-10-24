import { Component, OnInit, forwardRef, Inject, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
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
export class EditorComponent implements OnInit, ControlValueAccessor, AfterViewInit {
    onChangeFn: (_: any) => {};
    swiper: any;
    loadSuccess: Subject<any> = new Subject();
    swiperJs: string = 'https://meepo.com.cn/meepo/libs/wangEditor/release/wangEditor.min.js';
    @ViewChild('divDemo') divDemo: ElementRef;
    
    constructor(
        @Inject(DOCUMENT) public document: any,
        public ele: ElementRef
    ) { 
        this.loadSuccess.subscribe(E=>{
            var editor2 = new E(this.divDemo.nativeElement);
            editor2.create()
        });
    }

    ngOnInit() { 
        
    }

    writeValue(obj: any): void {
        
    }
    
    registerOnChange(fn: any): void {
        this.onChangeFn = fn;
    }
    registerOnTouched(): void {

    }

    ngAfterViewInit(){
        this.loadJScript();
    }

    loadJScript() {
        const script = this.document.createElement('script');
        script.type = 'text/javascript';
        script.src = this.swiperJs;
        script.onload = () => {
            this.swiper = window['wangEditor'];
            this.loadSuccess.next(this.swiper);
        };
        script.onerror = () => {
            console.log('Swiper插件加载失败');
        };
        this.document.body.appendChild(script);
    }
}