import { Component, OnInit, Inject, Input, Output, EventEmitter } from '@angular/core';
import * as uuid from 'uuid';
declare const $: any;
import { Observable } from 'rxjs/Observable';
import { DOCUMENT } from '@angular/common';
@Component({
    selector: 'nestable-list',
    templateUrl: './nestable-list.html',
    styleUrls: ['./nestable-list.scss']
})
export class NestableList implements OnInit {
    id: string = new uuid();
    @Input() list: any[] = [];
    @Output() onUpdateDisplayorder: EventEmitter<any> = new EventEmitter();
    @Output() onDelete: EventEmitter<any> = new EventEmitter();
    @Output() onEdit: EventEmitter<any> = new EventEmitter();
    
    constructor(
        @Inject(DOCUMENT) public document: any
    ) { }
    ngOnInit() { 
        console.log(this.id);
        this.loadJScript('https://meepo.com.cn/meepo/libs/plugins/nestable/jquery.nestable.js', '$').subscribe(res => {
            $('#'+this.id).nestable({
                group: 1
            }).on('change', (e: any) => {
                let list = e.length ? e : $(e.target);
                this.updateDisplayorder(list.nestable('serialize'));
            });
        });
    }

    loadJScript(src: string, key: string){
        return Observable.create(obser=>{
            const script = this.document.createElement('script');
            script.type = 'text/javascript';
            script.src = src;
            script.onload = () => {
                obser.next(window[key]);
                obser.complete();
            };
            script.onerror = () => {
                obser.error();
                obser.complete();
            };
            this.document.body.appendChild(script);
        });
    }

    updateDisplayorder(data: any){
        this.onUpdateDisplayorder.emit(data);
    }

    edit(data: any){
        this.onEdit.emit(data);        
    }

    delete(data: any){
        this.onDelete.emit(data);        
    }
    
}
