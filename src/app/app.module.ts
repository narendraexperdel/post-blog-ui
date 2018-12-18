import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AuthService } from './shared-service/auth.service';
import { PostformComponent } from './component/postform/postform.component';
import { SignupformComponent } from './component/signupform/signupform.component';
import { HeadersComponent } from './component/headers/headers.component';
import { ToppostComponent } from './component/toppost/toppost.component';
import { PostcommentComponent } from './component/postcomment/postcomment.component';
import { UserpostlistComponent } from './component/userpostlist/userpostlist.component';

const appRoutes : Routes =[
  { path : '' , component : LoginComponent},
  { path : 'postform' , component : PostformComponent},
  { path : 'signup' , component : SignupformComponent},
  { path : 'login' , component : LoginComponent},
  { path : 'postboard', component : ToppostComponent},
  { path : 'postcomment', component : PostcommentComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PostformComponent,
    SignupformComponent,
    HeadersComponent,
    ToppostComponent,
    PostcommentComponent,
    UserpostlistComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
