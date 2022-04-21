import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from'@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username:string="";
  password:string="";
  loginForm:FormGroup=new FormGroup({});
  constructor() { }

  ngOnInit(): void {

 this.loginForm = new FormGroup({
  username:new FormControl(),
  password:new FormControl()
  })

  }

/* 
  get uname(){
    return this.username;
  }

  get pass(){
    return this.password;
  }

set uname(user:string)
{
  this.username=user;
}

set pass(password:string)
{
  this.password=password
} */

  loginFun():void{
    console.log(this.loginForm.value); //all the from data will be displayed
    console.log("Username: "+this.loginForm.get("username")?.value); // only username will be displayed
    console.log("Password: "+this.loginForm.get("password")?.value); //only password will be displayed
  }

}
