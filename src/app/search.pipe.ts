import { Pipe, PipeTransform } from '@angular/core';
import * as Fuse from 'fuse.js'

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(sections: any, term): any {
    console.log(JSON.stringify(sections))
    var fuse = new Fuse(sections, {
      keys: ['title', 'context']
    });
    return term ? fuse.search(term) : sections;
  }

}
