
import { Widget } from '../widget';

export class UuConDefault extends Widget{
    show: boolean = true;
    required: boolean = true;
    dataSource: string = '';

    image: string = 'http://appweb.uupaotui.com/Pages/Template/CouponCommand/images/con_h1.png';
    tip: string = '请输入您的口令';
    btn: string = '兑换';

    rule: string = '兑换规则';

    rule_content: string = `
    <section class="con">
    <ul>
        <li>
            <h1>
                <i>1</i>
                <span>什么是口令兑换码？</span>
            </h1>
            <p>口令兑换码是uu跑腿平台发给uu用户的，作为兑换uu跑腿优惠的凭证，成功兑换后将以优惠券的形式保存至uu跑腿“个人中心账户”，优惠券的使用规则详见优惠券规则页面。</p>
            <img class="line" src="../CouponCommand/images/line.png">
        </li>
        <li>
            <h1>
                <i>2</i>
                <span>口令兑换码是什么样子的？</span>
            </h1>
            <p>口令兑换码是一串中文、数字、或字母组合。</p>
            <img class="line" src="../CouponCommand/images/line.png">
        </li>
        <li>
            <h1>
                <i>3</i>
                <span>怎样获得口令兑换码？</span>
            </h1>
            <p>口令兑换码是uu跑腿平台发出的，它有可能出现这些地方：1.uu跑腿的新浪官方微博、微信公众号；2.其他途径。温馨提示：每种口令兑换码名额有限，大家看到第一时间领取哦</p>
            <img class="line" src="../CouponCommand/images/line.png">
        </li>
        <li>
            <h1>
                <i>4</i>
                <span>一个用户一天内最多能兑换几次口令兑换码？</span>
            </h1>
            <p>一个用户不限优惠劵的兑换次数，每日可用的优惠券上限张数请见优惠券使用规则</p>
            <img class="line" src="../CouponCommand/images/line.png">
        </li>
        <li>
            <h1>
                <i>5</i>
                <span>口令兑换码可以重复兑换么？</span>
            </h1>
            <p>不能哦~一个口令兑换码只能兑换一张优惠券，不能重复兑换。</p>
            <img class="line" src="../CouponCommand/images/line.png">
        </li>
        <li>
            <h1>
                <i>6</i>
                <span>口令兑换码可以找零或兑换么？</span>
            </h1>
            <p>不可以。使用口令兑换码兑换成功的优惠券支付订单时，优惠券金额高于订单金额的，差额部分不找零不兑换；优惠券低于订单金额的，差额部分由用户支付。</p>
            <img class="line" src="../CouponCommand/images/line.png">
        </li>
        <li>
            <h1>
                <i>7</i>
                <span>什么是口令兑换码的“有效期”？</span>
            </h1>
            <p>口令兑换码所兑换的优惠券上会注明“有效期”，该优惠券仅能在注明的有效期内使用。</p>
            <img class="line" src="../CouponCommand/images/line.png">
        </li>
    </ul>
</section>
<footer class="foot">
    <h1>特别提示：</h1>
    <p>如果用户对使用规则或者使用uu跑腿软件或相关服务过程中有任何疑问需要任何帮助，请及时与uu跑腿客服联系，联系电话<span>400-6997-999</span></p>
</footer>

    `;

    constructor(){
        super();
        this.type = 'uu-con';
        this.name = 'UU项目';

        this.containerStyle = {
            'margin-top': '0px'
        }
        this.styleObj = {
            'margin-top': '0px'
        }
        this.dataSource = '';
    }
}