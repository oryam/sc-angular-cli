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

@NgModule( {
    declarations: [
        AppComponent,
        UserListComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot( ROUTES, { useHash: false, preloadingStrategy: PreloadAllModules })
    ],
    providers: [
        UserService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
