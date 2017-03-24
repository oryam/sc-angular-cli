import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user/list/user-list.component';
import { TodoListComponent } from './todo/list/todo-list.component';

export const ROUTES: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'users', component: UserListComponent },
    { path: 'todos', component: TodoListComponent },
];
