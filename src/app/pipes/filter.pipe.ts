import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../models/post';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array: Post[], searchedKey: string): Post[] {
    if (searchedKey === '') {
      return array;
    } else {
      return array.filter((element: Post) => element.title.trim().toLowerCase().includes(searchedKey.trim().toLowerCase()));
    }
  }

}
