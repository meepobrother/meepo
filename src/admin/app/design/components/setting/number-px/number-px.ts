import {
    Component, OnInit, Input,
    Output, EventEmitter, ElementRef,
    Renderer2
} from '@angular/core';
declare const jQuery;

@Component({
    selector: 'number-px',
    templateUrl: './number-px.html',
    styleUrls: ['./number-px.scss']
})
export class NumberPx implements OnInit {

    _model: number;
    @Input()
    get model() {
        return this._model + 'px';
    }
    set model(val: any) {
        this._model = this.getNumber(val);
    }

    // @Input() model: any;
    @Output() modelChange: EventEmitter<any> = new EventEmitter();
    @Input() width: number = 30;

    input: any;
    constructor(
        public ele: ElementRef,
        public render: Renderer2
    ) { }

    ngOnInit() { 
        this.render.setStyle(this.ele.nativeElement,'position','relative');
        this._model = this._model || 0;
        
        console.log(this._model);
    }

    change(e) {
        this.modelChange.emit(e + 'px')
    }

    getNumber(val: any): number {
        return "number" === typeof val ? val : isNaN(parseInt(val)) ? 0 : parseInt(val);
    }
}