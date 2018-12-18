import { Component, OnInit } from '@angular/core';
import { Post } from '../../post';
import { PostService } from '../../shared-service/post.service';
import { AuthService } from '../../shared-service/auth.service';

@Component({
  selector: 'app-postform',
  templateUrl: './postform.component.html',
  styleUrls: ['./postform.component.css']
})
export class PostformComponent implements OnInit {
  
  private post: Post
  postdata : any ={}
  postuserid : any = {}
  id : number

  constructor(private postService : PostService, private authService : AuthService) { }

  ngOnInit() {
  }

  postSubmit(){
    console.log(this.postdata);
    this.postuserid['id'] = this.authService.getSessionStorage("userId");
    this.postdata['postuserid'] = this.postuserid;
    console.log(this.authService.getSessionStorage("userId"));
    console.log(this.postdata)
    this.postService.post(this.postdata).subscribe(
      response =>{
        console.log(response);
      },error =>{
        console.log(error);
      }
    );

  }

}
