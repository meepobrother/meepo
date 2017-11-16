
import { Widget } from '../widget';

export class HdbChannelDefault extends Widget {
    show: boolean = true;
    items: any[] = [
        {
            title: '亲子',
            icon: 'http://img1.hudongba.com/upload/_oss/usercmsimg/201702/15/31487127042625_cms3.png'
          },
          {
            title: '出游',
            icon: 'http://img1.hudongba.com/upload/_oss/usercmsimg/201702/13/41486984349636_cms4.png'
          },{
            title: '互联网',
            icon: 'http://img1.hudongba.com/upload/_oss/usercmsimg/201702/13/51486984430606_cms5.png'
          },{
            title: '跑步',
            icon: 'http://img1.hudongba.com/upload/_oss/usercmsimg/201702/13/91486984477473_cms9.png'
          }
    ];

    constructor() {
        super();
        this.type = 'hdb-channel';
        this.name = '频道列表';

        this.containerStyle = {
            'margin-top': '0px',
            'padding-top': '0px'
        }
    }
}