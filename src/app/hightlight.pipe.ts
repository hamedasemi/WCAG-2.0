import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'hightlight'
})
export class HightlightPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer){

  }
  transform(value: any, term?: any): any {
    return (JSON.stringify(value.replace(term, `<em>${term}</em>`)))
  }

}
