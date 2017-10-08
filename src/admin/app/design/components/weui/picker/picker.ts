import { WeuiWidget } from '../widget';

export class Picker extends WeuiWidget {
    colomn: number = 1;
    constructor() {
        super();
        this.type = 'picker';
        this.name = '选择器';

        this.setContainerClass();

        console.log(this);
    }

    setContainerClass() {
        const containerClass: Map<string, boolean> = new Map();
        containerClass.set('meepo_picker-container', true);
        this.containerClass = containerClass;
    }

}