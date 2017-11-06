import { Component, OnInit } from '@angular/core';
import { SidebarContainerService } from '../../sidebar/sidebar-container.service';
import { DropdownsService } from '../../dropdown/dropdowns.service';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import * as store from 'store';
import { ApiService } from '../api';
import { WidgetService } from '../../share/services/widget.service';
import { CatalogService } from '../../share/services/catalog.service';


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
    myapps: any[] = [];

    openStyle: any = {
        // 没有登陆
        content: {
            margin: '0px',
            padding: '0px'
        }
    };
    closeStyle: any = {};

    avatarStyle: any = {
        'min-width': '2em'
    }

    widget: WidgetService;
    service: CatalogService;

    constructor(
        public sidebar$: SidebarContainerService,
        public dropdowns$: DropdownsService,
        public router: Router,
        public login$: LoginService,
        public api: ApiService,
        public widgetService: WidgetService,
        public catalogService: CatalogService
    ) {
        this.widget = this.widgetService.getWidgetInstance();
        this.service = this.catalogService.getCatalogInstance();
        this.myinfo = store.get('__meepo_myuserinfo', { avatar: 'assets/img/a1.jpg' });

        this.sidebar$.onOpen.subscribe(open => {
            const isLogin = store.get('isLogin');
            if (isLogin) {
                if (open) {
                    this.openStyle.content = {
                        'padding-left': '55px',
                        'padding-right': '0px'
                    };
                    this.avatarStyle = {
                        'max-width': '2em'
                    };
                } else {
                    this.openStyle.content = {
                        'padding-left': '100px',
                        'padding-right': '160px'
                    };
                    this.avatarStyle = {
                        'min-width': '2em'
                    }
                }
            } else {
                this.openStyle.content = {
                    'padding-left': '0px',
                    'padding-rigght': '0px'
                };
                this.avatarStyle = {
                    'min-width': '2em'
                };
            }
        })
    }

    getMyApp() {
        this.api.mpost('app.getListApp', { page: 1, psize: 50 }).subscribe((res: any) => {
            this.myapps = res.info;
        });
    }
    ngOnInit() {
        this.getMyApp();
        this.sidebar$.close();
        const isLogin = store.get('isLogin');
        if (isLogin) {
            this.showMenu = true;
            // 默认关闭
            this.openStyle.content = {
                'padding-left': '100px',
                'padding-right': '160px'
            }
        }
        if (!this.showMenu) {
            this.timer = setInterval(() => {
                const isLogin = store.get('isLogin');
                if (isLogin) {
                    this.showMenu = true;
                    this.openStyle.content = {
                        'padding-left': '100px',
                        'padding-right': '160px'
                    }
                    clearInterval(this.timer);
                }
            }, 1000);
        }
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
        });
    }

    menuRightModelChange(index: any) {
        this.myapps.map((app: any) => {
            app.catalogs.map((catalog: any) => {
                catalog.pages.map((page: any) => {
                    if (page.id == index) {
                        setTimeout(()=>{
                            this.widget.setCurrentWidget(page);
                            this.service.clickCataPage(catalog, page);
                        },300)
                        this.router.navigate(['/themes/design/',app.id]);                        
                    }
                });
            });
        });
    }
}



export class openContentStyle {

}