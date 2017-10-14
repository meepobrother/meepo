import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core';
import { Router } from '@angular/router';
@Component({
    selector: 'themes-shops',
    templateUrl: './themes-shops.html',
    styleUrls: ['./themes-shops.scss']
})
export class ThemesShops implements OnInit {
    list: any[] = [];
    constructor(
        public api: ApiService,
        public router: Router
    ) { }

    ngOnInit() { 
        this.getList();
    }
    add() { }

    getList(){
        this.api.mpost('app.getListApp',{page: 1, psize: 30}).subscribe((res: any)=>{
            this.list = res.info;
        });
    }

    useTheme(item: any){
        this.router.navigate(['/themes/design/',item.id]);
    }
}
