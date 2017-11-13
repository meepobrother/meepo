import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MeepoFormBtnDefault } from '../../../../classes';
import { MatDialog } from '@angular/material';
import { IconTitleDialog } from '../../../../../share/setting';
import { IconSelectDialog } from '../../../../../dialogs';
import { AppService } from '../../../../../share/services';
@Component({
    selector: 'meepo-form-btn-setting',
    templateUrl: './meepo-form-btn-setting.html',
    styleUrls: ['./meepo-form-btn-setting.scss']
})
export class MeepoFormBtnSetting implements OnInit {
    @Input() widget: MeepoFormBtnDefault = new MeepoFormBtnDefault();
    constructor(
        public dialog: MatDialog,
        public app: AppService
    ) { }
    ngOnInit() { 
        this.widget.__post = this.widget.__post || {};
        this.widget.__post['success'] = this.widget.__post['success'] || '提交成功，请点击确认跳转到下一步，重新提交请点击取消！';
    }

    setting() {
        let dialogRef = this.dialog.open(IconTitleDialog, { data: { title: this.widget.content, icon: this.widget.icon } });

        dialogRef.afterClosed().subscribe((data: any) => {
            this.widget.content = data.title;
            this.widget.icon = data.icon;
        });
    }

    selectIcon() {
        let dialogRef = this.dialog.open(IconSelectDialog);
        dialogRef.afterClosed().subscribe(icon => {
            this.widget.icon = icon;
        });
    }

    selectPage(){
        this.app.selectPages().subscribe((res: any)=>{
            this.widget.success = res;
        });
    }

    selectDo(){

    }
}
