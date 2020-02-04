import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ListRestaurantsComponent } from './list/list-restaurants.component';
import {DetailRestaurantComponent} from './list/detail/detail-restaurant.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: ListRestaurantsComponent},
  { path: 'detail/:id', component: DetailRestaurantComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { }
