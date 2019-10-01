import { SearchComponent } from './search.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MbiblioComponent } from './mbiblio/mbiblio.component';

const routes: Routes = [
    { path: '', component: SearchComponent },
    { path: ':id', component: MbiblioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
