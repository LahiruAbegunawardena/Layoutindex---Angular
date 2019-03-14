import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProdAddComponent} from './components/prod-add/prod-add.component';
import {HomepageComponent} from "./components/homepage/homepage.component";

const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'addProd', component: ProdAddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
