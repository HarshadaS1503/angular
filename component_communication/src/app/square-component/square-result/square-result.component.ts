import { Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-square-result',
  templateUrl: './square-result.component.html',
  styleUrls: ['./square-result.component.css']
})
export class SquareResultComponent implements OnInit {

  @Input()
  outputnumber:number=0;
  
  

  @Output()
  emitData:EventEmitter<string[]>= new EventEmitter<string[]>();
  
  squarearray=[];


  constructor(
) 
{
}

  ngOnInit(): void {
  }
  

  getSquare(outputnumber:number)
  {
     return this.outputnumber*this.outputnumber;
  }


  pushIntoArray(outputnumber:number)
  {
     return this.squarearray.push(this.getSquare(outputnumber));
  }

  onSaveResult(outputnumber:number)
  {
    this.pushIntoArray(outputnumber);
    this.emitData.emit(this.squarearray);
  }

}
