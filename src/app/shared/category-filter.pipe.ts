import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log('value', value)
    console.log('value', args)
    return args ? value.filter((item: any) => { return item.category === args }) : value;
  }

}
