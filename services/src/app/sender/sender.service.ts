import { EventEmitter, Injectable } from "@angular/core";
@Injectable({
   providedIn: 'root',
 })
export class SenderService
{ 
   sendermsg:EventEmitter<string>=new EventEmitter<string>();


   sendMsgFromSender(msg:string)
   {
      console.log('From sender service: '+msg);
      return this.sendermsg.emit(msg);
   }
}