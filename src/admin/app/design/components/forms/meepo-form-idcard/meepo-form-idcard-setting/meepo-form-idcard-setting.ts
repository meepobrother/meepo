import { Component, Input } from '@angular/core';
import { MeepoFormIdcardDefault } from '../../../../classes';

@Component({
    selector: "meepo-form-idcard-setting",
    templateUrl: "./meepo-form-idcard-setting.html",
    styleUrls: ['./meepo-form-idcard-setting.scss']
})
export class MeepoFormIdcardSetting{
    @Input() widget: MeepoFormIdcardDefault = new MeepoFormIdcardDefault();
}