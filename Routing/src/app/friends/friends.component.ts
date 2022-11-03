import { createInjectableDefinitionMap } from '@angular/compiler/src/render3/partial/injectable';
import { Component, OnInit } from '@angular/core';
import { friends} from './friends';
import { ValidateRouteService } from './route.service';



@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css'],
  providers: [ValidateRouteService]
})


export  class FriendsComponent implements OnInit {

  
  friendslist:friends[]=[];
  constructor(private routeserv: ValidateRouteService)
  {
      this.friendslist=this.routeserv.lstfriends;
  }
  ngOnInit(): void {}

  


}
