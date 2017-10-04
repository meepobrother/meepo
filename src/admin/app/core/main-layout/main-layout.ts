import { Component, OnInit } from '@angular/core';
import { SidebarContainerService } from '../../sidebar/sidebar-container.service';
import { DropdownsService } from '../../dropdown/dropdowns.service';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
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
            icon: 'fa fa-home',
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
            icon: 'fa fa-group',
            link: ['/members']
        },
        {
            title: '工单',
            total: 0,
            icon: 'fa fa-book',
            link: ['/orders']
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
            title: '设置',
            total: 0,
            icon: 'fa fa-cogs',
            link: ['/settings']
        }
    ];
    showMenu: boolean = false;
    constructor(
        public sidebar$: SidebarContainerService,
        public dropdowns$: DropdownsService,
        public router: Router,
        public login$: LoginService
    ) { }
    ngOnInit() { 
        this.login$.onLogin.subscribe(res=>{
            if(res){
                this.showMenu = true;
            }else{
                this.showMenu = false;
            }
        })
    }

    onItem(item: any) {
        if(item.link){
            this.router.navigate(item.link);
        }
    }

    openSidebar() {
        this.sidebar$.toogle();
    }

    onContentClick(){
        this.dropdowns$.dropdowns.forEach(res=>{
            res.close();
        })
    }
}

