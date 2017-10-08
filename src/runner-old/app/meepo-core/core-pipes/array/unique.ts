import { PipeTransform, Pipe } from '@angular/core';
import { isUndefined, isObject, extractDeepPropertyByMapKey } from  '../helpers/helpers';

@Pipe({ name: 'unique' })
export class UniquePipe implements PipeTransform {

  transform(input: any, propertyName?: string): any[] {
    const uniques: boolean[] = [];
    return Array.isArray(input) ?
      isUndefined(propertyName) ?
        input.filter((e, i) => input.indexOf(e) === i) :
        input.filter((e, i) => {
          let value = extractDeepPropertyByMapKey(e,propertyName);
          value = isObject(value)? JSON.stringify(value):value;

          if (isUndefined(value) || uniques[value]) {
            return false;
          }

          uniques[value] = true;
          return true;
        }) : input;
  }
}
