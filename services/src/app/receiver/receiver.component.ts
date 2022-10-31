import { Component, OnInit } from '@angular/core';
import { SenderService } from '../sender/sender.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css'],
  providers:[SenderService]
})
export class ReceiverComponent implements OnInit {

  msg_sender:string;

  constructor(private senderservice:SenderService) { }

  ngOnInit(): void {

    this.senderservice.sendermsg.subscribe(
        (msg_received:string)=>{
          this.msg_sender=msg_received;
        }
    );

    
    console.log('From receiver component: '+this.msg_sender);
  }

}
