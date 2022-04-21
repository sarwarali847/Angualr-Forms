import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validator, Validators } from '@angular/forms';
@Component({
  selector: 'app-resistration',
  templateUrl: './resistration.component.html',
  styleUrls: ['./resistration.component.css']
})
export class ResistrationComponent implements OnInit {
  name:string="";
  age:number=0;
  mobile:number=0;
  emailId:string="";
  username:string="";
  password:string="";
  confirmpassword:string="";
  registrationForm:FormGroup=new FormGroup({});
  constructor() { }

  ngOnInit(): void {

    this.registrationForm=new FormGroup({
      name:new FormControl("",[Validators.required, Validators.pattern("^[A-Za-z]+$")]),
      age:new FormControl("",[Validators.required,Validators.min(1), Validators.max(120)]),
      mobile:new FormControl("",[Validators.required, Validators.pattern("^[0-9]{10,11}$")]), // Validators.minLength(10), Validators.maxLength(11), 
      emailId:new FormControl("",[Validators.required, Validators.email]),
      username:new FormControl("",[Validators.required, Validators.pattern("^[a-zA-Z0-9]{4,20}$")]),
      password:new FormControl("",[Validators.required, Validators.pattern("^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,15}$")]),
      confirmpassword:new FormControl("",[Validators.required])

    },
    
    
    );
  }


get uname(){
  return this.registrationForm.get("name");
}
get uage(){
  return this.registrationForm.get("age");
}
get umobile(){
  return this.registrationForm.get("mobile");
}
get uemail(){
  return this.registrationForm.get("emailId");
}
get uusername(){
  return this.registrationForm.get("username");
}
get upassword(){
  return this.registrationForm.get("password");
}
get uconfirmpassword(){
  return this.registrationForm.get("confirmpassword");
}



  registerFun(){
    console.log(this.registrationForm.value);

  }


  private matchPassword(regForm:FormGroup)
  {
    let passControl=regForm.get("password");
    let confirmpassControl=regForm.get("confirmpassword");
    if(passControl.value==confirmpassControl)
    return null;
    else
    return {passMismatch:true};

  }

}
