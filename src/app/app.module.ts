import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppRoutingModule} from './app.routes';
import {AppComponent} from './app.component';

import {HomeModule} from './components/home/index';

import {Page404Component} from './components/front/pages/index';
import {LoginComponent, RegisterComponent} from './components/front/index';
import {ForgotComponent, ResetComponent} from './components/front/password/index';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule, ReactiveFormsModule,
        HttpModule,
        AppRoutingModule,
        HomeModule
    ],
    declarations: [
        AppComponent,
        Page404Component,
        LoginComponent, RegisterComponent,
        ForgotComponent, ResetComponent
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}