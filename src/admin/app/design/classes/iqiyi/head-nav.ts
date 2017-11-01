
import { Widget } from '../widget';
export class IqiyiHeadNavDefault extends Widget {
    logs: any[] = [];
    styleType: string;
    listsStyle: any = {};
    constructor() {
        super();
        this.type = 'iqiyi-head-nav';
        this.name = '顶部导航';
        this.styleType = 'default';
        this.children = [
            {
                title: '母婴',
                __post: {status: 0},
                __do: 'tixian.log',
                active: true
            }, {
                title: '军事',
                __post: {status: 0},
                __do: 'tixian.log',
                active: false
            }, {
                title: '片花',
                __post: {status: 0},
                __do: 'tixian.log',
                active: false
            }, {
                title: '旅游',
                __post: {status: 0},
                __do: 'tixian.log',
                active: false
            }, {
                title: '时尚',
                __post: {status: 0},
                __do: 'tixian.log',
                active: false
            }, {
                title: '教育',
                __post: {status: 0},
                __do: 'tixian.log',
                active: false
            }, {
                title: '财经',
                __post: {status: 0},
                __do: 'tixian.log',
                active: false
            }
        ];

        this.containerStyle = {
            'margin-top': '0px'
        }

        this.styleObj = {
            'margin-top': '0px'
        }
    }
}