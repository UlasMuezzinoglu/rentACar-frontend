import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getidwithsharp'
})
export class GetidwithsharpPipe implements PipeTransform {

  transform(value: number ): string {
    return "#a"+value;
  }

}
