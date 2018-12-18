import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared-service/auth.service';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {
  
  private userId : string;
  private userdata : any ={};

  constructor(private authservice : AuthService) { }

  ngOnInit() {
    this.userId = this.authservice.getSessionStorage("userId");
    this.authservice.userbyId(this.userId).subscribe((response)=>
  {
    console.log(response);
    this.userdata = response['data'];
  },(error)=>{
     console.log(error);
  })
  }

}
