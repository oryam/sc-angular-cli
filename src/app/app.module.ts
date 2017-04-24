import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user/list/user-list.component';
import { UserService } from './user/service/user.service';
import { UserPipe } from './user/pipe/user.pipe';
import { TodoListComponent } from './todo/list/todo-list.component';
import { TodoService } from './todo/service/todo.service';

@NgModule( {
    declarations: [
        AppComponent,
        HomeComponent,
        UserListComponent,
        TodoListComponent,
        UserPipe,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot( ROUTES, { useHash: false, preloadingStrategy: PreloadAllModules })
    ],
    providers: [
        UserService,
        TodoService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
