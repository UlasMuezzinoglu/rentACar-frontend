import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getidwithchar'
})
export class GetidwithcharPipe implements PipeTransform {

  transform(value: number ): string {
    return "a"+value;
  }

}
