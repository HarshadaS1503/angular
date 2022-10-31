import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-square-component',
  templateUrl: './square-component.component.html',
  styleUrls: ['./square-component.component.css']
})
export class SquareComponentComponent implements OnInit {

  
  inputnumber:number;

  resultarray=[];

  constructor() { 

  }

  ngOnInit(): void {
  }

  receiveData(data)
  {
    this.resultarray=data;
  }

}
