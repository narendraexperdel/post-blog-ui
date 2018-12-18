import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared-service/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})
export class SignupformComponent implements OnInit {
   userdata : any ={}

  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit() {
  }

  submitUser(){
    console.log(this.userdata)
     this.authService.saveUser(this.userdata).subscribe(
       response =>{
         debugger
        console.log(response);
         if(response['code'] == 'CREATED'){
            this.router.navigate[('login')];
         }
        
       },error =>{
         console.log(error)
       }
     )
  }

}
