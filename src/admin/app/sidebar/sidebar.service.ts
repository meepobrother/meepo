import { Injectable } from '@angular/core';
import * as uuid from 'uuid';
@Injectable()
export class SidebarService {
    sidebars: Map<string, any> = new Map();
    childSidebars: Map<string, any> = new Map();
    constructor() { }
}