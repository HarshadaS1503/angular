import { Component, OnInit,EventEmitter } from '@angular/core';
import {SenderService } from './sender.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent implements OnInit {
  
  msg:string;

  constructor(private sender:SenderService) { }

  ngOnInit(): void {
  }

  sendMsg(msg:string)
  {
    console.log('From sender component: '+msg);
    this.sender.sendMsgFromSender(this.msg);
  }

}