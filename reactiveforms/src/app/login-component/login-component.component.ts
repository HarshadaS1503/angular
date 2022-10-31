import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  signInForm:FormGroup;
  regExp=  new RegExp('[^.,a-zA-Z0-9]');
  constructor() { }

  ngOnInit(): void {
    this.signInForm = new FormGroup({
       'username': new FormControl('',[Validators.required,Validators.maxLength(10),Validators.pattern(this.regExp)]),
       'password': new FormControl(null,[Validators.required,Validators.maxLength(10),Validators.pattern(this.regExp)])
    });
  }

   log()
   {
    console.log(this.signInForm.get('username').value);
    
    console.log(this.signInForm.get('password').value)
   }

  OnSubmit()
  {
    
  }

  checkValue(control:FormControl):{[s:string]:boolean}
  {
    if(!this.regExp.test(control.value))
    {
      return { result :true};
    }
    return null;
    

  }
}
