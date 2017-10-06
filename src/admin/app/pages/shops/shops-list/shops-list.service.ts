import { Injectable } from '@angular/core';

@Injectable()
export class ShopsListService {
    list: Map<number, any> = new Map();
}