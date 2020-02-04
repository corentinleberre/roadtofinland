import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { Restaurants } from '../interfaces/restaurants';
import { RestaurantsService } from './restaurants.service';
import {MatDialog, MatDialogConfig} from '@angular/material';
import { DetailRestaurantComponent } from './detail/detail-restaurant.component';
import {Restaurant} from '../interfaces/restaurant';

@Component({
  selector: 'app-list',
  templateUrl: './list-restaurants.component.html',
  styleUrls: ['./list-restaurants.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListRestaurantsComponent implements OnInit {
  dataRestaurants: Restaurants;
  tempRestaurants: Restaurants;
  tempRestaurantsSWAP: Restaurants;
  isSortAZ = false;
  tagsList = new Set();

  constructor(private dialog: MatDialog, private restaurantsService: RestaurantsService) { }

  ngOnInit() {
    this.getRestaurants();
  }

  getRestaurants(): void {
    this.restaurantsService
      .getDataRestaurants()
      .subscribe( restaurants => {
        this.dataRestaurants = restaurants;
        this.tempRestaurants = restaurants;
        this.tempRestaurantsSWAP = restaurants;
        this.createTagsSet();
      });
  }

  createTagsSet(): void {
    this.dataRestaurants.restaurants.forEach((restaurant) => {
      restaurant.tags.forEach((tag) => {
        this.tagsList.add(tag);
      });
    });
  }

  sortAlphabetically(): void {
    if (this.isSortAZ) {
      this.isSortAZ = false;
      this.dataRestaurants.restaurants.sort((a, b) => b.name.localeCompare(a.name));
    } else {
      this.isSortAZ = true;
      this.dataRestaurants.restaurants.sort((a, b) => a.name.localeCompare(b.name));
    }
  }

  filterbyTag(tag: string): void {
      this.tempRestaurants = this.tempRestaurantsSWAP;
      this.dataRestaurants.restaurants = this.tempRestaurants.restaurants
        .filter(value => value.tags.find(valeur => valeur === tag));
    }

  openDialog(restaurant: Restaurant) {
    if (restaurant) {
      const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.data = {
        data: restaurant
      };

      this.dialog.open(DetailRestaurantComponent, dialogConfig);
    }
  }
}
