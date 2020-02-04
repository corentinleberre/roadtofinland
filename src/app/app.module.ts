import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MobxAngularModule } from 'mobx-angular';
import { CardOnHoverDirective } from './directives/card-on-hover.directive';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ListRestaurantsComponent } from './list/list-restaurants.component';
import { DetailRestaurantComponent } from './list/detail/detail-restaurant.component';
import {RestaurantsService} from './list/restaurants.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatFormFieldModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CardOnHoverDirective,
    NotFoundComponent,
    ListRestaurantsComponent,
    DetailRestaurantComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MobxAngularModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  providers: [
    RestaurantsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
