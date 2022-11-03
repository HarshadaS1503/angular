import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { ValidateRouteService } from "./friends/route.service";
import { friends } from './friends/friends'

@Injectable({
  providedIn: 'root',

})
export class RouteGuard implements CanActivate
{
  guardResult:boolean;
    constructor(private routesrv:ValidateRouteService,private router:Router) {}
    
    canActivate()
     {
      if(!this.routesrv.check())
      {
        this.router.navigate(['/']);
      }
       return this.routesrv.check();
     }

}