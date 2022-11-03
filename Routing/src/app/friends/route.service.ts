import { Injectable } from "@angular/core";
import { friends } from "./friends";

@Injectable()
export class ValidateRouteService
{
    constructor()
    {
    }


    lstfriends:friends[]=
    [
  {name : 'James'},
  {name : 'Mary'},
  {name : 'Robert'},
  {name : 'John'},
  {name : 'Michael'},
  {name : 'David'},
  {name : 'William'},
  {name : 'Richard'},
  {name : 'Joseph'},
  {name : 'Jennifer'},
  ];
  
  
    check()
    {
        if(this.lstfriends.length>=10)
        {
            return true;
        }
        return false;
    }
}
