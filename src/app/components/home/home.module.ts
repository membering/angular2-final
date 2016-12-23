import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule, Title} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AUTH_PROVIDERS} from 'angular2-jwt';
import {DndModule} from 'ng2-dnd';

import {ProfileModule} from './profile/index';
import {HomeComponent} from './index';

import {HttpClient} from '../../_libraries/index';
import {AuthGuard} from '../../_guards/index';
import {MainMenuService} from '../../services/index';
import {BreadcrumbDirective, HeaderDirective, MainMenuDirective, MainBodyDirective} from '../../_directives/index';

import {DashboardComponent} from './dashboard/dashboard.component';
import {OrdersListComponent} from './orders/orders.component';

@NgModule({
    imports: [
        RouterModule,
        BrowserModule,
        FormsModule, ReactiveFormsModule,
        DndModule.forRoot(),
        ProfileModule
    ],
    declarations: [
        HomeComponent,
        BreadcrumbDirective, HeaderDirective, MainMenuDirective, MainBodyDirective,
        DashboardComponent,
        OrdersListComponent
    ],
    providers: [
        Title,
        AUTH_PROVIDERS,
        HttpClient,
        AuthGuard,
        MainMenuService
    ]
})

export class HomeModule {}