import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { DropdownService } from './dropdown.service';
@Injectable()
export class DropdownsService {
    // 所有的dropdown
    dropdowns: Map<string, DropdownService> = new Map();

    addDropdown(key: string, dropdown: DropdownService) {
        this.dropdowns.set(key, dropdown);
    }
    // 打开一个dropdown
    toggle(key: string){
        const dropdownNow = this.dropdowns.get(key);
        this.dropdowns.forEach(dropdown=>{
            if(dropdownNow !== dropdown){
                dropdown.close();
            }
        });
        if(dropdownNow._open){
            dropdownNow.close();
        }else{
            dropdownNow.open();
        }
    }
}