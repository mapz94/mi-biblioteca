import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Ng2Rut } from 'ng2-rut';
import { LoginRoutingComponent } from './login-routing.module';
import { RegisterComponent } from './register/register.component';
import { ForgetComponent } from './forget/forget.component';



@NgModule({
  declarations: [
      LoginComponent,
      RegisterComponent,
      ForgetComponent
    ],
  imports: [
    CommonModule,
    LoginRoutingComponent,
    Ng2Rut,
    FormsModule,
    MatSlideToggleModule
  ]
})
export class LoginModule { }
