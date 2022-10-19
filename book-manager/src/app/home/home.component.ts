import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public empid:number= 101;
  public empname:string= "Harshada";
  public imgpath:string= "assets\\emp.png";
  public clickCount=0;

   public GetDetails():string
   {
          return this.empid +" , "+ this.empname;
   }

   public ShowAlert():void
   {
            alert("Demo of angular");
  }

  public ChangeEmployee(event:any):void
  {
    this.empid=102;
    this.empname="Janhavi";
    this.imgpath="assets\\emp2.png";
    console.log(event.target);
  }

  public ClickMe():void
  {
    this.clickCount++;
  }
}
