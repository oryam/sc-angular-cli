import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Todo } from '../model/todo.model';

@Injectable()
export class TodoService {

    private url = 'https://jsonplaceholder.typicode.com/todos';

    constructor( private http: Http ) { }

    list(): Observable<Todo[]> {
        return this.http
            .get( this.url )
            .map( response => response.json() as Todo[] );
    }

}
