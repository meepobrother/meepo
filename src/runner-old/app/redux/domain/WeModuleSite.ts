import { WeBase } from './WeBase';

export abstract class WeModuleSite extends WeBase{
    inMobile: boolean;
    __call(name,...args){}
    __get(name){}
    // 发起支付
    pay(params: any,mine: any){

    }
    // 发起退款
    refund(tid: string,fee: number,reason: string){

    }
    // 支付结果
    payResult(ret: any){

    }
    // 支付查询
    payResultQuery(tid: string){}
    // 分享
    share(params: any){

    }
    // 点击
    click(params: any){

    }
}