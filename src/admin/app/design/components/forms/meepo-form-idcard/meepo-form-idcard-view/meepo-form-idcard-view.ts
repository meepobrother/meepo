import { Component, Input } from '@angular/core';
import { MeepoFormIdcardDefault } from '../../../../classes';
@Component({
    selector: "meepo-form-idcard-view",
    templateUrl: "./meepo-form-idcard-view.html",
    styleUrls: ['./meepo-form-idcard-view.scss']
})
export class MeepoFormIdcardView{
    @Input() widget: MeepoFormIdcardDefault = new MeepoFormIdcardDefault();
}