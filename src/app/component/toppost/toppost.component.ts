import { Component, OnInit } from '@angular/core';
import { PostService } from '../../shared-service/post.service';
import { Post } from '../../post';
import { AuthService } from '../../shared-service/auth.service';

@Component({
  selector: 'app-toppost',
  templateUrl: './toppost.component.html',
  styleUrls: ['./toppost.component.css']
})
export class ToppostComponent implements OnInit {

  private posts : Post[];
  search : string;
  searchpost : boolean;

  constructor(private postService : PostService, private authservice : AuthService) { }

  ngOnInit() {
    this.searchpost = false;
    console.log(this.searchpost);
    this.postService.topfivePost().subscribe((posts)=>{
      console.log(posts);
      this.posts = posts['data'];
    },(error)=>
    {
      console.log(error);
    })
  }

  searchPost(){
    console.log(this.search);
    this.postService.postbySearch(this.search).subscribe((posts)=>
  {
    this.searchpost = true;
    console.log(posts);
    this.posts = posts['data'];
  },(error)=>{
    console.log(error);
  })
  }

  showPost(postId : number){
    sessionStorage.removeItem("postId");
     console.log(postId);
     this.authservice.saveSessionStorage(postId, "postId");
  }

}
