import { Widget } from '../widget';

export class MeepoFormMobile extends Widget {
    data: any;
    constructor() {
        super();
        this.type = 'meepo-form-mobile';
        this.name = '手机及验证码';
        this.children = [];
        this.data = {
            mobile: {
                label: '电话',
                placeholder: '请输入电话',
                tip: '获取验证码'
            },
            code: {
                label: '验证码',
                placeholder: '请输入验证码'
            }
        };
        this.styleObj = { 'background-color': '#fff' };
        this.containerStyle = { 'background-color': '#fff' };
    }
}