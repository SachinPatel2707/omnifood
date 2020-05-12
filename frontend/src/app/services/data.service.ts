import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// const _baseURL = '../../assets/data.json'

const _baseURL = 'http://localhost:8000/api/'

@Injectable({
  providedIn: 'root'
})

// USING DUMMY DATA

// export class DataService {

//   constructor(private http: HttpClient) { }

//   getRestaurants() : Observable<any> {
//     console.log(location)
//     return this.http.get(_baseURL)
//   }
// }


// USING API

export class DataService {

  constructor(private http: HttpClient) {}

  // create your services here

  getRestaurants() : Observable<any> {
    return this.http.get(_baseURL + 'restaurant')
  }

}