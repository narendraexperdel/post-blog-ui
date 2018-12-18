import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http'
import { Observable } from 'rxjs/Rx'
 
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseurl : string = "http://localhost:8080/api/";
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});

  constructor(private  http:Http) { }

  login(logindata : any){
    return this.http.post(this.baseurl+'login',logindata, this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  saveUser(userdata : any){
    return this.http.post(this.baseurl+'user',userdata, this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  saveSessionStorage(id : any , typeid : string){
    sessionStorage.setItem(typeid, id);
  }

  getSessionStorage(userId : string){
    return sessionStorage.getItem(userId);
  }

  userbyId(id : any){
    return this.http.get(this.baseurl+'user/'+id,this.options).map((response : Response)=>response.json())
     .catch(this.errorHandler);
  } 

  errorHandler(error : Response){
    return Observable.throw(error|| "SERVER ERROR");
  }
}
