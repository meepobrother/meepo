import {
    Component, OnInit, Input,
    Output, EventEmitter, ElementRef
} from '@angular/core';
declare const jQuery;

@Component({
    selector: 'number',
    templateUrl: './number.html',
    styleUrls: ['./number.scss']
})
export class NumberComponent implements OnInit {
    @Input() model: any;
    @Output() modelChange: EventEmitter<any> = new EventEmitter();
    @Input() width: number = 50;

    input: any;
    constructor(
        private ele: ElementRef
    ) { }

    ngOnInit() { }

    change(){
        this.modelChange.emit(this.getNumber(this.model));
    }

    getNumber(val: any){
        return "number" == typeof val ? val : isNaN(parseInt(val)) ? "" : parseInt(val);
    }
}