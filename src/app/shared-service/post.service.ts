import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http'
import { Observable } from 'rxjs/Rx'
 
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private baseurl : string = "http://localhost:8080/api/";
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});

  constructor(private  http:Http) { }

  post(postdata : any){
    return this.http.post(this.baseurl+'post',postdata, this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  topfivePost(){
  return this.http.get(this.baseurl+'topfivepost', this.options).map((response : Response)=>response.json())
  .catch(this.errorHandler);
  }

   postbySearch(search : any){
    return this.http.post(this.baseurl+'searchpost',search,this.options).map((response : Response)=>response.json())
     .catch(this.errorHandler);
  } 

  postbyId(id : any){
    return this.http.get(this.baseurl+'post/'+id,this.options).map((response : Response)=>response.json())
     .catch(this.errorHandler);
  } 
  
  postComment(commentdata : any){
    return this.http.post(this.baseurl+'comment',commentdata, this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  commentsbyPostid(postid : any){
    return this.http.get(this.baseurl+'comment/post/'+postid, this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  errorHandler(error : Response){
    return Observable.throw(error|| "SERVER ERROR");
  }


}
