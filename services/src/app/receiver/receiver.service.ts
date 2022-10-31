import { EventEmitter } from "@angular/core";

export class ReceiverService
{
    msg:string;
    receivermsg:EventEmitter<string>= new EventEmitter<string>();
    
    sendMsgFromReceiver()
    {
        return this.receivermsg;
    }
}