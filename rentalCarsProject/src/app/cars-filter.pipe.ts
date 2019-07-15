import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carsFilter'
})
export class CarsFilterPipe implements PipeTransform {

  transform(items: any[], searchText: string) {
    if(searchText){
    return items.filter( it => {
      var num:string = it.car_number.toString();
     
           for(var i = 0;i < num.length;i++){
            if(num[i] == searchText[i]){
              return num.includes(searchText);
            }
           }  
    });
  }else return items;
  }
  
}
