import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MeepoFormOrderDefault } from '../../../../classes';
@Component({
    selector: 'meepo-form-order-view',
    templateUrl: './meepo-form-order-view.html',
    styleUrls: ['./meepo-form-order-view.scss']
})
export class MeepoFormOrderView implements OnInit {
    @Input() widget: MeepoFormOrderDefault = new MeepoFormOrderDefault();
    form: FormGroup;
    @Input() tip: string = '';
    
    _price: number = 0;
    
    @Input()
    set price(val: number) {
        this._price = val;
        this._price = this._price || 0;
        this.init();
    }

    price1: any = '';
    price2: any = '';

    _isActive: boolean = false;

    @Input()
    set isActive(val: boolean){
      this._isActive = val;
    }
    get isActive(){
      return this._isActive;
    }

    @Output() onPay: EventEmitter<any> = new EventEmitter();
    @Output() onDetail: EventEmitter<any> = new EventEmitter();

    constructor(
        public fb: FormBuilder
    ) {
        this.form = this.fb.group({
            price: ['', Validators.required]
        });
    }

    ngOnInit() { 
        this.init();
    }

    init() {
        let priceArray = this._price.toString().split('.');
        this.price1 = priceArray[0]
        this.price2 = priceArray[1]
        this.price2 = this.price2 || '00'
    }
}

