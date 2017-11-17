
import { Widget } from '../widget';

export class HmMarqueeDefault extends Widget {
    show: boolean = true;
    title: string = '滚动公告';
    icon: string = '';

    behavior: string = 'alertnate';
    bgcolor: string = '';
    direction: string = 'left';

    color: any = {
        bgcolor: '#fff',
        color: '#000'
    };

    items: any[] = [
        {
            title: '滚动公告滚动公告滚动公告滚动公告'
        }
    ];

    constructor() {
        super();
        this.type = 'hm-marquee';
        this.name = '滚动公告';

        this.containerStyle = {
            height: '20px'
        }
    }
}