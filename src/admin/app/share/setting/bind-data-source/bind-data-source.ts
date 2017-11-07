import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'bind-data-source',
    templateUrl: './bind-data-source.html',
    styleUrls: ['./bind-data-source.scss']
})
export class BindDataSource implements OnInit {
    @Output() onClose: EventEmitter<any> = new EventEmitter();
    constructor() { }

    ngOnInit() { }
    
    close(){
        this.onClose.emit({
            __do: false,
            __post: false
        });
    }

    setStatus(__do,__post){
        this.onClose.emit({
            __do: __do,
            __post: __post
        });
    }
}

