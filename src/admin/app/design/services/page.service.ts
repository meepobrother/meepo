import { Injectable } from '@angular/core';
import * as store from 'store';
import { WidgetService } from './widget.service';
import { WeuiPage } from '../components';
@Injectable()
export class PageService {
    // 页面列表
    list: Map<string, WeuiPage> = new Map();

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
        console.log(list);
    }

    saveToCache(){
        const dates = this.dates;
        store.set('design.page.list',dates);
    }

    add(item: WeuiPage) {
        this.list.set(item.code, item);
        this.saveToCache();
    }

    edit(item: WeuiPage) {
        this.list.set(item.code, item);
        this.saveToCache();
    }

    delete(item: WeuiPage) {
        this.list.delete(item.code);
        this.saveToCache();
    }
}