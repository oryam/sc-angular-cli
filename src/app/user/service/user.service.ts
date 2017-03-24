import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { User } from '../model/user.model';

@Injectable()
export class UserService {

    private url = 'https://jsonplaceholder.typicode.com/users';

    constructor( private http: Http ) { }

    list(): Observable<User[]> {
        return this.http
            .get( this.url )
            .map( response => response.json() as User[] );
    }

}
