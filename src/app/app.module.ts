import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AUTH_PROVIDERS} from 'angular2-jwt';

import {AppRoutes} from './app.routes';
import {AppComponent} from './app.component';

import {AuthGuard} from './_guards/index';

import {HomeModule} from './components/home/index';
import {ProfileModule} from './components/home/profile/index';

import {BreadcrumbDirective} from './_directives/breadcrumb/breadcrumb';
import {Page404Component} from './components/front/pages/index';
import {LoginComponent, RegisterComponent} from './components/front/index';
import {ForgotComponent, ResetComponent} from './components/front/password/index';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule, ReactiveFormsModule,
        HttpModule,
        AppRoutes,
        HomeModule,
        ProfileModule
    ],
    declarations: [
        AppComponent,
        BreadcrumbDirective,
        Page404Component,
        LoginComponent, RegisterComponent,
        ForgotComponent, ResetComponent
    ],
    providers: [
        AUTH_PROVIDERS,
        AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}