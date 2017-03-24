import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Todo } from '../model/todo.model';
import { TodoService } from '../service/todo.service';

@Component( {
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

    todos: Observable<Todo[]>;

    constructor( private todoService: TodoService ) { }

    ngOnInit() {
        this.todos = this.todoService.list();
    }

}
