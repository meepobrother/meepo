import { Widget } from '../widget';

export class MeepoDanmu extends Widget{
    constructor(){
        super();
        this.type = 'meepo-danmu';
        this.name = '弹幕';
        this.children = [];
        this.styleObj = { margin: '0'}
        this.containerStyle = { margin: '0'}
    }
}