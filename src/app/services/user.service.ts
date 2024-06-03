import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_URL = "https://jsonplaceholder.typicode.com/users";

  users: any[];

  constructor(private http: HttpClient) {
    this.users = [];
  }

  getUsers() {
    return this.http.get<any>(this.API_URL)
  }
}
