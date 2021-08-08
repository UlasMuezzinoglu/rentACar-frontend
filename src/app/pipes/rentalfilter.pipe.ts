import { Rental } from './../models/rental';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rentalfilter'
})
export class RentalfilterPipe implements PipeTransform {

  transform(value: Rental[], filterText:string): Rental[] {
    filterText = filterText? filterText.toLocaleLowerCase() : "";
    return filterText?value
    .filter((r:Rental) => r.firstName.toLocaleLowerCase().indexOf(filterText)!==-1) : value
  }

}
