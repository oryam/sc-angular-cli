import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { AppRoute } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user/list/user-list.component';
import { UserService } from './user/service/user.service';
import { UserPipe } from './user/pipe/user.pipe';
import { TodoListComponent } from './todo/list/todo-list.component';
import { TodoService } from './todo/service/todo.service';
import { SandboxComponent } from './sandbox/sandbox.component';
import { SampleComponent } from './sample/sample.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserListComponent,
    TodoListComponent,
    SandboxComponent,
    SampleComponent,
    UserPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoute, {
      useHash: false,
      preloadingStrategy: PreloadAllModules
    })
  ],
  providers: [UserService, TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
