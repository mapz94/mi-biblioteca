import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { MbiblioComponent } from './mbiblio/mbiblio.component';
import { CardMaterialbiblioComponent } from './shared/card-materialbiblio/card-materialbiblio.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../shared/navbar/navbar.component';



@NgModule({
  declarations: [
      SearchComponent,
      MbiblioComponent,
      CardMaterialbiblioComponent
    ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    FormsModule
  ]
})
export class SearchModule { }
