import { Injectable } from '@angular/core';
import * as store from 'store';
@Injectable()
export class ThemesMineService {
    list: Map<string, any> = new Map();
    code: string = 'themes.mine';
    constructor() {
        const list = store.get(this.code);
        if (list) {
            list.map(res => {
                this.list.set(res.code, res);
            });
        }
    }

    add(item: any) {
        this.list.set(item.code, item);
        this.saveToCache();
    }

    saveToCache(){
        let results = [];
        this.list.forEach(res=>{
            results.push(res);
        });
        store.save(this.code,results);
    }

    edit(item: any){
        this.list.set(item.code,item);
        this.saveToCache();
    }

    delete(item: any){
        this.list.delete(item.code);
        this.saveToCache();
    }

}