import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule, Title} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AUTH_PROVIDERS} from 'angular2-jwt';
import {ToastyModule} from 'ng2-toasty';
import {DndModule} from 'ng2-dnd';

import {ProfileModule} from './profile/index';
import {HomeComponent} from './index';

import {HttpClient} from '../../_libraries/index';
import {AuthGuard} from '../../_guards/index';
import {MenuService} from '../../services/index';
import {BreadcrumbDirective, HeaderDirective, MainMenuDirective, MainBodyDirective} from '../../_directives/index';

import {DashboardComponent} from './dashboard/dashboard.component';
import {OrdersListComponent} from './orders/orders.component';
import {MenuComponent, TreeView} from './menu/index';

@NgModule({
    imports: [
        RouterModule,
        BrowserModule,
        FormsModule, ReactiveFormsModule,
        ToastyModule.forRoot(),
        DndModule.forRoot(),
        ProfileModule
    ],
    declarations: [
        HomeComponent,
        BreadcrumbDirective, HeaderDirective, MainMenuDirective, MainBodyDirective,
        DashboardComponent,
        OrdersListComponent,
        MenuComponent, TreeView
    ],
    providers: [
        Title,
        AUTH_PROVIDERS,
        HttpClient,
        AuthGuard,
        MenuService
    ]
})

export class HomeModule {}