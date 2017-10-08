export interface CoreInput{
    title?: string,
    placeholder?: string
}

export interface CoreAddressProps{
    show?: boolean,
    title?: string,
    placeholder?: string,
    detail?: CoreInput,
    mobile?:CoreInput
}

export interface CoreTitleProps{
    title?: string,
    show?: boolean,
    placeholder?: string
}

export interface CorePriceSettingJietiProps{
    show: boolean,
    juli_jieti: boolean,
    weight_jieti: boolean,
    qujian_jifei: boolean
}

export interface CorePriceSettingProps{
    start: number, //起步价
    len: number, //起步距离
    duration: number, //配送时间
    jieti: CorePriceSettingJietiProps, //阶梯计费
    tianqiItems: any[],
    juliItems: any[],
    weightItems: any[],
    timeItems: any[]
}

export interface CoreFormsProps{
    adv?: CoreTitleProps,
    gonggao?: CoreTitleProps,
    btnTitle?: string,
    priceStr?: string,
    start?: CoreAddressProps,
    end?: CoreAddressProps,
    msg?: CoreTitleProps,
    voice?: CoreTitleProps,
    image?: CoreTitleProps,
    baojia?: CoreTitleProps,
    weight?: CoreTitleProps,
    price?: CoreTitleProps,
    rule?: CoreTitleProps,
    time?: CoreTitleProps,
    money?: CoreTitleProps,
    setting: CorePriceSettingProps
}

export const CoreFormsDefaultProps = {
    btnTitle: '下一步',
    priceStr: '计价规则[请选择目的地]',
    start: {
        show: true,
        title: '发货地',
        placeholder: '请选择发货地',
        detail: {
            title: '详细地址',
            placeholder: '如:楼层门牌号等'
        },
        mobile: {
            title: '联系电话',
            placeholder: '请输入联系电话'
        }
    },
    end: {
        show: true,
        title: '发货地',
        placeholder: '请选择发货地',
        detail: {
            title: '详细地址',
            placeholder: '如:楼层门牌号等'
        },
        mobile: {
            title: '联系电话',
            placeholder: '请输入联系电话'
        }
    },
    msg: {
        show: true,
        title: '留言信息',
        placeholder: '请输入留言信息'
    },
    adv: {
        show: true
    },
    gonggao: {
        show: true
    },
    voice: {
        show: true,
        title: '语音留言',
        placeholder: '点击录音'
    },
    image: {
        show: true,
        title: '任务附件',
        placeholder: ''
    },
    baojia: {
        show: true,
        title: '物品保价'
    },
    weight: {
        show: true,
        title: '物品重量',
        placeholder: '请输入物品重量'
    },
    price: {
        show: true,
        title: '物品价格',
        placeholder: '请输入物品价格'
    },
    rule: {
        show: true,
        title: '发布条例,免责声明',
        placeholder: '阅读并同意'
    },
    time: {
        show: true,
        title: '预约时间',
        placeholder: '请选择预约时间'
    },
    money: {
        show: true,
        title: '赏金',
        placeholder: '请输入赏金'
    },
    setting: {
        start: 10, //起步价
        len: 5, //起步距离
        duration: 30, //配送时间
        jieti: {
            show: false,
            juli_jieti: false,
            weight_jieti: false,
            qujian_jifei: false
        }, //阶梯计费
        tianqiItems: [],
        juliItems: [],
        weightItems: [],
        timeItems: []
    }
}