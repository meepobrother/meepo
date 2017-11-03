// 页面
import { Injectable } from '@angular/core';
import * as store from 'store';
import { WidgetService } from './widget.service';
import { WeuiPage } from '../../design/classes';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PageService {
    // 页面元素列表
    list: Map<string, WeuiPage> = new Map();
    // 列表变化
    onChange: Subject<any> = new Subject();

    currentWidget: any;
    setCurrentWidgetStream: Subject<any> = new Subject();
    // 页面数据
    dates: any[] = [];
    constructor(
        public widgetService: WidgetService
    ) {
        this.onChange.subscribe(() => {
            // 转化成数组
            this.dates = this._mapToArray(this.list);
            this.saveToCache();
        });
    }

    setCurrentWidget(widget: any){
        this.currentWidget = widget;
        this.setCurrentWidgetStream.next(this.currentWidget);
    }

    _mapToArray(map: Map<any, any>) {
        const results = [];
        map.forEach((v, k, m) => {
            results.push(v);
        });
        return results;
    }
    // 初始化
    getList() {
        const list = store.get('design.page.list', []);
        list.map(res => {
            this.list.set(res.code, res);
        });
        this.onChange.next('');
    }
    // 保存到缓存
    saveToCache() {
        store.set('design.page.list', this.dates);
    }
    // 添加
    add(item: WeuiPage) {
        this.list.set(item.code, item);
        this.onChange.next('');
    }
    // 编辑
    edit(item: WeuiPage) {
        this.list.set(item.code, item);
        this.onChange.next('');
    }
    // 删除
    delete(item: WeuiPage) {
        this.list.delete(item.code);
        this.onChange.next('');
    }
}