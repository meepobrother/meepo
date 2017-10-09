import { Widget } from '../widget';
import uuid from 'uuid';
export class LayoutWidget extends Widget {
    isContainer: boolean = true;
    constructor(){
        super();
        this.code = uuid();
    }
}