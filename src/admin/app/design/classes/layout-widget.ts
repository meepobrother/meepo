import { Widget } from './widget';
import * as uuid from 'uuid';

export class LayoutWidget extends Widget {
    isContainer: boolean = true;
    title: string;
    constructor(){
        super();
        this.code = uuid();
    }
}