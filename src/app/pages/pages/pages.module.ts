import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogueComponent } from '../catalogue/catalogue.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ProductComponent } from '../product/product.component';
import { PagesComponent } from './pages.component';
import { AppRoutingModule } from 'src/app/app-routing/app-routing.module';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { RouterModule } from '@angular/router';
import { AuthModule } from 'src/app/auth/auth/auth.module';



@NgModule({
  declarations: [
    DashboardComponent, //sale error porque se los debe importar
    ProductComponent,
    CatalogueComponent,
    PagesComponent,
  ],
  exports: [ //para que se usen fuera de este modulo
    DashboardComponent,
    ProductComponent,
    CatalogueComponent,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    AuthModule,
  ]
})
export class PagesModule { }
