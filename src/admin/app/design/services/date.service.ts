import { Injectable } from '@angular/core';
import * as classes from '../classes';
@Injectable()
export class DateService {

    private _getWidgetClass(type: string, date: any) { 
        let result: any;
        switch(type){
            case 'button': 
                result = new classes.Button();
                break;
        }
        return result;
    }

    private _setColorTheme(){

    }

    updateColorTheme(){}

    saveDate(){}
}