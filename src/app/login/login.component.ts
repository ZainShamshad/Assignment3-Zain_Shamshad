import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent{

  
  title:string = "Forgot";
  subtitle:string = " Username/ Password?";
  welcome:string = "";
  username:string ="";

  //setter to notify on value change
  @Input('appsends') set input(value: string) {
    this.welcome = value;
  }

  @Output('logincomp') logincomp:EventEmitter<string> = new EventEmitter();;

  ngusername:string = "";
  ngpassword:string = "";

  users = [
    {
      username: "Zain Shamshad",
      password: "123",
      blocked: false,
      falgs: 0
    },
    {
      username: "M. Hammad",
      password: "abc",
      blocked: false,
      falgs: 0
    }
  ];  

  
  constructor(private toastr: ToastrService) {
  }

  // onChange(data:string){
  //   this.welcome=data;
  // }

  login() {

    if(this.ngusername.length<1 || this.ngpassword.length<1){
      this.showRequired();
      return;
    }

    let userFound = false;

    for(let index=0; index<this.users.length; index++){
      if(this.users[index].username===this.ngusername){

        userFound = true;

        if(this.users[index].password===this.ngpassword){
          this.ngusername = this.ngpassword = "";
          this.users[index].falgs=0;
          this.showSuccess();
          this.welcome =("W E L C O M E "+" \u2022 "+this.users[index].username.toUpperCase());
          this.logincomp.emit(this.users[index].username);
          break;
        }
        else{
          this.users[index] = this.flagFailure(this.users[index]);
          break;
        }
      }
    }

    if(!userFound){
      this.showUnregistered();
    }
  }

  flagFailure(user:any): any{
    if(user.falgs<3){
      user.falgs++;
      this.showFailure();
    }
    else if(user.falgs==3){
      if(!user.blocked){
        user.blocked = true;
      }
      this.showBlocked();
    }
    return user;
  }

  showRequired() {
    this.toastr.info("Please Enter username and password first","Required*");
  }

  showSuccess() {
    this.toastr.success('Login Successfull!', 'Congratulations!');
  }

  showFailure() {
    this.toastr.error('Login Failed!', 'Invalid Credentials!');
  }

  showBlocked() {
    this.toastr.warning('User Not Allowed!', 'Account Blocked!');
  }

  showUnregistered() {
    this.toastr.info('User Not Found!', 'Username is not recognised!');
  }

}
