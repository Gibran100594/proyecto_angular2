
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CatalogueComponent } from '../catalogue/catalogue.component';
import { PagesComponent } from '../pages/pages.component';
import { ProductComponent } from '../product/product.component';

const routes: Routes = [
  //rutas hijas
  {
  path: '',
  component: PagesComponent,
  children: [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'product', component: ProductComponent },
    { path: 'catalogue', component: CatalogueComponent },
    { path:'', redirectTo:'/dashboard', pathMatch:'full'},
],

},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
  })
  export class PagesRoutingModule { }
