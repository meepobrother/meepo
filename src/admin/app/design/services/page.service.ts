import { Injectable } from '@angular/core';
import * as store from 'store';
import { WidgetService } from './widget.service';
@Injectable()
export class DesignPageService {
    // 页面列表
    list: Map<string, any> = new Map();
    
    get dates() {
        const results = [];
        this.list.forEach(res => {
            results.push(res);
        });
        return results;
    }

    getList() {
        const list = store.get('design.page.list', []);
        list.map(res => {
            this.list.set(res.code, res);
        });
    }
}