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

  constructor(private senderservice:SenderService) {

   }

  ngOnInit(): void {

    
  }

  show()
  {
    
    console.log("from receiver's constructor: "+this.senderservice.passDataToReceiver())
    this.msg_sender=this.senderservice.passDataToReceiver();
  }
}
