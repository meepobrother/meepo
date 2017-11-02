import { Component, OnInit } from '@angular/core';
import { SidebarContainerService } from '../../sidebar/sidebar-container.service';
import { DropdownsService } from '../../dropdown/dropdowns.service';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import * as store from 'store';

@Component({
    selector: 'main-layout',
    templateUrl: './main-layout.html',
    styleUrls: ["./main-layout.scss"]
})
export class MainLayoutComponent implements OnInit {
    menus: any[] = [
        {
            title: '门店',
            total: 0,
            icon: 'ui-icon ui-icon-hall',
            link: ['/shops']
        },
        {
            title: '商品',
            total: 0,
            icon: 'fa fa-desktop',
            link: ['/goods']
        },
        {
            title: '会员',
            total: 0,
            icon: 'ui-icon ui-icon-personal',
            link: ['/members']
        },
        {
            title: '工单',
            total: 0,
            icon: 'fa fa-book',
            link: ['/orders']
        },
        {
            title: '预约',
            total: 0,
            icon: 'ui-icon ui-icon-history',
            link: ['/coachs']
        },
        {
            title: '任务',
            total: 0,
            icon: 'fa fa-calendar-o',
            link: ['/tasks']
        },
        {
            title: '技能',
            total: 0,
            icon: 'fa fa-graduation-cap',
            link: ['/skills']
        },
        {
            title: '帖子',
            total: 0,
            icon: 'fa fa-graduation-cap',
            link: ['/topics']
        },
        {
            title: '活动',
            total: 0,
            icon: 'fa fa-graduation-cap',
            link: ['/actives']
        },
        {
            title: '课程',
            total: 0,
            icon: 'fa fa-graduation-cap',
            link: ['/lessons']
        },
        {
            title: '财务',
            total: 0,
            icon: 'fa fa-credit-card',
            link: ['/moneys']
        },
        {
            title: '数据',
            total: 0,
            icon: 'fa fa-signal',
            link: ['/dates']
        },
        {
            title: '应用',
            total: 0,
            icon: 'ui-icon ui-icon-dressup',
            link: ['/themes']
        },
        {
            title: '插件',
            total: 0,
            icon: 'ui-icon ui-icon-collected',
            link: ['/plugins']
        },
        {
            title: '设置',
            total: 0,
            icon: 'fa fa-cogs',
            link: ['/settings']
        },
        {
            title: '演示',
            total: 0,
            icon: 'fa fa-cogs',
            link: ['/tests']
        }
    ];
    showMenu: boolean = false;
    timer: any;

    myinfo: any;
    constructor(
        public sidebar$: SidebarContainerService,
        public dropdowns$: DropdownsService,
        public router: Router,
        public login$: LoginService
    ) {
        this.myinfo = store.get('__meepo_myuserinfo', { avatar: 'assets/img/a1.jpg' })
    }
    ngOnInit() {
        const isLogin = store.get('isLogin');
        if (isLogin) {
            this.showMenu = true;
        }
        if (!this.showMenu) {
            this.timer = setInterval(() => {
                const isLogin = store.get('isLogin');
                if (isLogin) {
                    this.showMenu = true;
                    clearInterval(this.timer);
                }
            }, 1000);
        }
        console.log(this.menus);
    }

    onItem(item: any) {
        if (item.link) {
            this.router.navigate(item.link);
        }
    }

    openSidebar() {
        this.sidebar$.toogle();
    }

    onContentClick() {
        this.dropdowns$.dropdowns.forEach(res => {
            res.close();
        })
    }
}

