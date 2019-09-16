import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgetComponent } from './components/forget/forget.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { PrestamosComponent } from './components/prestamos/prestamos.component';
import { SearchComponent } from './components/search/search.component';
import { UserlogService } from './services/userlog.service';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'forget', component: ForgetComponent},
  { path: 'user-info', component: UserInfoComponent},
  { path: 'prestamos', component: PrestamosComponent},
  { path: 'search', component: SearchComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [UserlogService]
})
export class AppRoutingModule { }
