import {
    ButtonSetting, ButtonView, ButtonSelect,
    WeuiCellsSetting, WeuiCellsView,
    InputSetting, InputView,
    SliderSetting, SliderView,
    UploaderSetting, UploaderView,
    PageSetting, IconView, 
    TabbarSelect, TabbarSetting, TabbarView
} from './weui';


export const COMPONENTS = [
    ButtonView, ButtonSetting, ButtonSelect,
    WeuiCellsSetting, WeuiCellsView,
    InputSetting, InputView,
    SliderSetting, SliderView,
    UploaderSetting, UploaderView,
    PageSetting, IconView,
    TabbarSelect, TabbarSetting, TabbarView
];

export const COMPONENTS_SELECT = {
    'button': ButtonSelect,
    'tabbar': TabbarSelect
};

export const COMPONENTS_VIEW = {
    'button': ButtonView,
    'tabbar': TabbarView
};

export const COMPONENTS_SETTING = {
    'button': ButtonSetting,
    'page': PageSetting,
    'tabbar': TabbarSetting
};

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { MatDialog } from '@angular/material';
@Injectable()
export class ComponentsService {
    onSelectStream: Subject<any> = new Subject();
    constructor(
        public dialog: MatDialog
    ){}
    // 选择组件样式
    selectComponent(name: string){
        const dialogRef = this.dialog.open(COMPONENTS_SELECT[name]);
        dialogRef.afterClosed().subscribe(res=>{
            this.onSelectStream.next(res);
        });
    }
}

export * from './weui';

