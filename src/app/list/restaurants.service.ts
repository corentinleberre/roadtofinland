import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Restaurants } from '../interfaces/restaurants';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class RestaurantsService {
  constructor(private httpClient: HttpClient) { }

  getDataRestaurants(): Observable<Restaurants> {
    return this.httpClient
      .get<Restaurants>('https://raw.githubusercontent.com/woltapp/summer2020/master/restaurants.json')
      .pipe(tap(_ => console.log(_)));
  }
}
