import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: Product[], terms?: string): any {
    if(!items) return [];
  if(!terms) return items;
  terms = terms.toLowerCase();
  return items.filter( it => {
    return it.productname.toLowerCase().includes(terms); // only filter product name
  });
}
}
