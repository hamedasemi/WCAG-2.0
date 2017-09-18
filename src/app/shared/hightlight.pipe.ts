import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hightlight'
})
export class HightlightPipe implements PipeTransform {

  transform(value: any, term?: any): any {
    return term ? value.replace(new RegExp(term, "ig"), `<em>${term}</em>`) : value
  }
}
