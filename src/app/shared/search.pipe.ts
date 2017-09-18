import { Pipe, PipeTransform } from '@angular/core';
import * as Fuse from 'fuse.js'

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(sections: any, term: string): any {
    var fuse = new Fuse(sections, {
      keys: ['title', 'context'],
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
    });
    return term ? fuse.search(term) : sections;
  }

}
