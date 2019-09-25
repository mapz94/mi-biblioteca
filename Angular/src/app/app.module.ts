import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2Rut } from 'ng2-rut';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { ForgetComponent } from './components/forget/forget.component';
import { CardMaterialbiblioComponent } from './components/shared/card-materialbiblio/card-materialbiblio.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { PrestamosComponent } from './components/prestamos/prestamos.component';
import { SearchComponent } from './components/search/search.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { MbiblioComponent } from './components/mbiblio/mbiblio.component';
<<<<<<< HEAD:Angular/src/app/app.module.ts
import { HttpClientModule } from '@angular/common/http';
=======
>>>>>>> f4cd18d27b70f8520b05f9030e1f10c728af9f13:src/app/app.module.ts

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ForgetComponent,
    CardMaterialbiblioComponent,
    UserInfoComponent,
    PrestamosComponent,
    SearchComponent,
    FooterComponent,
    MbiblioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2Rut
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
