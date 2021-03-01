import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NomPremierComponent } from './nom-premier/nom-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import {AppareilService} from './Services/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import {AuthService} from './Services/auth.service'
import { RouterModule, Routes } from '@angular/router';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './Services/auth-guard.service';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './Services/user.service';
import { NewUserComponent } from './new-user/new-user.component';
import { from } from 'rxjs';
const appRout :Routes=[
  {path:'appareils' ,canActivate:[AuthGuard], component: AppareilViewComponent },
  {path:'appareils/:id',canActivate:[AuthGuard],component:SingleAppareilComponent},
  {path:'edit', canActivate:[AuthGuard],component:EditAppareilComponent},
  {path:'users',canActivate:[AuthGuard],component:UserListComponent},
  {path:'new-user',component:NewUserComponent},
  {path:'auth',component:AuthComponent},
  {path:'',component:AppareilViewComponent},
  {path:'not-found',component:FourOhFourComponent},
  {path:'**',redirectTo:'/not-found'}
];
@NgModule({
  declarations: [
    AppComponent,
    NomPremierComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRout)
   ],
  providers: [AppareilService,
  AuthService,
  AuthGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
