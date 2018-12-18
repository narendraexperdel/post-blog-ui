import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared-service/auth.service';
import { PostService } from '../../shared-service/post.service';
import { Post } from '../../post';
import { Router } from '@angular/router'

@Component({
  selector: 'app-postcomment',
  templateUrl: './postcomment.component.html',
  styleUrls: ['./postcomment.component.css']
})
export class PostcommentComponent implements OnInit {

  private postId :string;
  private userId : string;
  private post : Post[];
  private comment : string;
  private commentdata : any={};
  private commentuserid : any ={};
  private postid : any = {};
  private postcomment : string;
  private comments : any ={};

  constructor(private authsservice : AuthService, private postservice : PostService, private router: Router) { }

  ngOnInit() {
    this.loadpostwithcomment();
  }

  loadpostwithcomment(){
    this.postId = this.authsservice.getSessionStorage("postId");
    this.postservice.postbyId(this.postId).subscribe((response)=>
  {
    console.log(response);
    this.post = response['data'];
  },(error)=>{
    console.log(error)
  });

  this.postservice.commentsbyPostid(this.postId).subscribe((response)=>
  {
    console.log(response);
    this.comments = response['data'];
  },(error)=>{
    console.log(error)
  });

  }

  postComment(){
    this.commentuserid['id'] = this.authsservice.getSessionStorage("userId");
    this.postid['id'] = this.authsservice.getSessionStorage("postId");
    this.commentdata.postid = this.postid;
    this.commentdata.commentuserid = this.commentuserid;
    this.postservice.postComment(this.commentdata).subscribe((response)=>
  {
    console.log(response);
    this.router.navigate(['postcomment']);
    this.loadpostwithcomment();
  },(error)=>
  {
     console.log(error);
  })
  }

}
