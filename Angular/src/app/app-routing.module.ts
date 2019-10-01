import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/home/about/about.component';
import { UserInfoComponent } from './components/home/user-info/user-info.component';
import { UserlogService } from './services/userlog.service';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { PrestamosComponent } from './components/prestamos/prestamos.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home/about', component: AboutComponent},
  { path: 'home/user/:id', component: UserInfoComponent},
  { path: 'prestamos', component: PrestamosComponent },
  { path: 'search', loadChildren: () => import('./components/search/search.module').then(m => m.SearchModule) },
  { path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) },
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [UserlogService]
})
export class AppRoutingModule { }
