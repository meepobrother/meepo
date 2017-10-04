import { Injectable } from '@angular/core';
import { ApiService } from '../../../core';
import { Group } from './add-grop-opt';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class MemberGroupServiceService {
    list: Map<number, Group> = new Map();
    item: Group;
    index: number;

    onList: Subject<any> = new Subject();

    get groups() {
        const groups: Group[] = [];
        this.list.forEach((group: Group) => {
            groups.push(group);
        });
        return groups;
    }
    constructor(
        public api: ApiService
    ) { }

    update(item: Group) {
        this.api.mpost('member.updateMemberGroup', item).subscribe((res: ResultItemInterface) => {
            if (res.code == 1) {
                this.list.set(res.info.id, res.info);
            } else {
                console.log('添加失败', res);
            }
        }, error => {
            this.handelError();
        });
    }

    handelError() {
        this.api.mget('member.update').subscribe(res => { })
    }

    edit(item: Group) {
        this.api.mpost('member.updateMemberGroup', item).subscribe((res: ResultItemInterface) => {
            if (res.code == 1) {
                this.list.set(res.info.id, res.info);
            } else {
                console.log('添加失败', res);
            }
        }, error => {
            this.handelError();
        });
    }

    delete(item: Group): Observable<ResultItemInterface> {
        return Observable.create((observer) => {
            this.api.mpost('member.deleteMemberGroup', item).subscribe((res: ResultItemInterface) => {
                this.list.delete(item.id);
            });
        });

    }

    add(item: Group): void {
        this.api.mpost('member.addMemberGroup', item).subscribe((res: ResultItemInterface) => {
            if (res.code == 1) {
                this.list.set(res.info.id, res.info);
            } else {
                console.log('添加失败', res);
            }
        }, error => {
            this.handelError();
        });
    }

    updateStatus(item: Group) {
        this.api.mpost('member.updateMemberGroupStatus', item).subscribe((res: ResultItemInterface) => {
            if (res.code == 1) {
                this.list.set(res.info.id, res.info);
            } else {
                console.log('更新失败', res);
            }
        }, () => {
            this.handelError();
        });
    }

    getList(page: number = 1, psize: number = 30) {
        this.api.mpost('member.getMemberGroup', { page: page, psize: psize })
            .subscribe((res: ResultListInterface) => {
                if (res.code == 1) {
                    res.info.map((res: Group) => {
                        this.list.set(res.id, res);
                    });
                } else {
                    console.log('getList失败', res);
                }
            }, () => {
                this.handelError();
            })
    }
}

export interface ResultListInterface { code: number, msg: string, info: Group[] }
export interface ResultItemInterface { code: number, msg: string, info: Group }
