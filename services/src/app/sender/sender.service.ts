import { EventEmitter, Injectable } from "@angular/core";
@Injectable({
   providedIn: 'root',
 })
export class SenderService
{ 
   sendermsg:string;


   sendMsgFromService(msg:string)
   {
      
    console.log('sendMsgFromService: '+msg);
    this.sendermsg=msg;
    this.passDataToReceiver();
   }

   passDataToReceiver():string
   {
      
    console.log('pass data : '+ this.sendermsg);
      return this.sendermsg;
   }
}