import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const _baseURL = '../../assets/data.json'

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }

  getRestaurantsByLocation(location: string) : Observable<any> {
    console.log(location)
    return this.http.get(_baseURL)
  }
}
