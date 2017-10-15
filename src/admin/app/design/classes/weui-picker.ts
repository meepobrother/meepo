import { WeuiWidget } from './weui-widget';

export class Picker extends WeuiWidget {
    colomn: number = 1;
    constructor() {
        super();
        this.type = 'picker';
        this.name = '选择器';
        this.content = [];
        this.setContainerClass();
    }

    setContainerClass() {
        const containerClass: Map<string, boolean> = new Map();
        containerClass.set('meepo_picker-container', true);
        this.containerClass = containerClass;
    }

}