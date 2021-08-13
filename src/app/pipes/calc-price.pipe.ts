import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calcPrice'
})
export class CalcPricePipe implements PipeTransform {

  transform(value: number, date: Date): number {
    
   let suan = new Date()
   

    let zamanFark = Math.abs(suan.getTime() - date.getTime());

    let gunFark = Math.ceil(zamanFark / (1000 * 3600 * 24));

     
    
    return gunFark;
  }

}
