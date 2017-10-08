import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'union'})
export class UnionPipe implements PipeTransform {

  transform(input: any, args: any[] = []): any[] {
    if (!Array.isArray(input) || !Array.isArray(args)) {
      return input;
    }

    return args.reduce((newArr, currArr) => {
        return newArr.concat(currArr.reduce((noDupArr: any[], curr: any) => {
            return (!~noDupArr.indexOf(curr) && !~newArr.indexOf(curr))
              ? noDupArr.concat([curr])
              : noDupArr;
          }, []));
      }, input);
  }
}
