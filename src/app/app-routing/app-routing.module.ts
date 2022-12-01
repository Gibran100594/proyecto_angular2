import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopagesfoundComponent } from '../nopagesfound/nopagesfound.component';
import { PagesRoutingModule } from '../pages/pages-routing/pages-routing.module';

const routes: Routes = [
{ path: '**', component: NopagesfoundComponent },
];

@NgModule({
declarations: [],
imports: [
RouterModule.forRoot(routes),
PagesRoutingModule,
AppRoutingModule,

],
exports: [RouterModule]
})
export class AppRoutingModule { }