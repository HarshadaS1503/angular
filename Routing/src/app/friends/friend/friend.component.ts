import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {

  name:string;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.name=this.route.snapshot.params['name'];

  }

}
