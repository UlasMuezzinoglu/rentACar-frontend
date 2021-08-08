import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../models/color';

@Pipe({
  name: 'colorfilter'
})
export class ColorfilterPipe implements PipeTransform {

  transform(value: Color[], filterText:string): Color[] {
    filterText = filterText? filterText.toLocaleLowerCase() : "";
    return filterText?value
    .filter((co:Color) => co.name.toLocaleLowerCase().indexOf(filterText)!==-1) : value
  }

}
