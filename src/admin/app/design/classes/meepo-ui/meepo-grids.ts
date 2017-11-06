import { Widget } from '../widget';

export class MeepoGridsDefault extends Widget {
    items: any[] = [];
    colNum: number = 3;

    constructor() {
        super();
        this.type = 'meepo-grids';
        this.name = '9宫格';

        this.containerStyle = {
            'margin-top': '0px'
        }

        this.items = [{
            title: '项目1',
            image: '',
            link: ''
        },{
            title: '项目1',
            image: '',
            link: ''
        },{
            title: '项目1',
            image: '',
            link: ''
        }];
    }
}
