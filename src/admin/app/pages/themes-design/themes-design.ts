import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThemesMineService } from '../themes/themes-mine.service';
@Component({
    selector: 'themes-design',
    templateUrl: './themes-design.html',
    styleUrls: ['./themes-design.scss']
})
export class ThemesDesign implements OnInit {
    code: string;
    theme: any;
    constructor(
        public route: ActivatedRoute,
        public mine: ThemesMineService
    ) { }

    ngOnInit() { 
        this.route.params.subscribe(res=>{
            this.code = res.uuid;
            this.mine.getList();
            this.theme = this.mine.list.get(this.code);
        });
    }
}
