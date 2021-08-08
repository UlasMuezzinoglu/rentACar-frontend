import { Brand } from './../models/brand';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'brandfilter'
})
export class BrandfilterPipe implements PipeTransform {

  transform(value: Brand[], filterText:string): Brand[] {
    filterText = filterText? filterText.toLocaleLowerCase() : "";
    return filterText?value
    .filter((b:Brand) => b.name.toLocaleLowerCase().indexOf(filterText)!==-1) : value
  }

}
