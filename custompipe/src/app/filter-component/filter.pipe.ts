import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'surname'
})
export class FilterSurname implements PipeTransform
{
   transform(value:any,criteria:string) {
    if(value.includes(criteria))
       return value;
   }


}