import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../model/user.model';

@Injectable()
export class UserService {
  private url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  list(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }
}
