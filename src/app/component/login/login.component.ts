import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared-service/auth.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logindata : any ={};
  userid : number

  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit() {
    sessionStorage.removeItem("postId");
    sessionStorage.removeItem("userId");
  }

  onSubmit(){
    debugger
    console.log(this.logindata);
    this.authService.login(this.logindata).subscribe(
      response =>{
        debugger
        // sessionStorage.setItem('userId',response['data']['id']);
        this.userid = response['data']['id'];
        this.authService.saveSessionStorage(this.userid, "userId");
        this.router.navigate(['postboard']);
      },error =>{
        console.log(error);
      }
    );
  }

}
