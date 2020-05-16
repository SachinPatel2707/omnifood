import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const _restaurantURL = '../../assets/data.json'
const _userURL = '../../assets/users.json'
const _blogURL = '../../assets/blogs.json'

const _baseURL = 'http://localhost:8000/api/'

@Injectable({
  providedIn: 'root'
})

// USING DUMMY DATA

export class DataService {

  constructor(private http: HttpClient) { }

  getRestaurants() : Observable<any> {
    return this.http.get(_restaurantURL)
  }

  fetchUsers(): Observable<any> {
    return this.http.get(_userURL)
  }

  registerUser(username: string, password: string): Observable<any> {
    let body = {
      username: username,
      password: password
    }

    return this.http.post(_baseURL + 'user/register', body)
  }

  // fetchUsers(): Observable<any> {
  //   return this.http.get(_baseURL + 'user')
  // }

  postOrder(body: Object): Observable<any> {
    return this.http.post(_baseURL + 'order', body)
  }

  postDonation(body: Object): Observable<any> {
    return this.http.post(_baseURL + 'donate', body)
  }

  fetchDonations(): Observable<any> {
    return this.http.get(_baseURL + 'donate')
  }

  postBlog(body: Object): Observable<any> {
    return this.http.post(_baseURL + 'blog', body)
  }

  fetchBlogs(): Observable<any> {
    return this.http.get(_blogURL)
  }
}

/*
// USING API

export class DataService {

  constructor(private http: HttpClient) {}

  // create your services here

  getRestaurants() : Observable<any> {
    return this.http.get(_baseURL + 'restaurant')
  }

  registerUser(username: string, password: string): Observable<any> {
    let body = {
      username: username,
      password: password
    }

    return this.http.post(_baseURL + 'user/register', body)
  }

  fetchUsers(): Observable<any> {
    return this.http.get(_baseURL + 'user')
  }

  postOrder(body: Object): Observable<any> {
    return this.http.post(_baseURL + 'order', body)
  }

  postDonation(body: Object): Observable<any> {
    return this.http.post(_baseURL + 'donate', body)
  }

  fetchDonations(): Observable<any> {
    return this.http.get(_baseURL + 'donate')
  }

  postBlog(body: Object): Observable<any> {
    return this.http.post(_baseURL + 'blog', body)
  }

  fetchBlogs(): Observable<any> {
    return this.http.get(_baseURL + 'blog')
  }
}
*/