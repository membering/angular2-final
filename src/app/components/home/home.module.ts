import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DndModule} from 'ng2-dnd';

import {HomeComponent} from './index';

import {HttpClient} from '../../_libraries/index';
import {HeaderDirective, MainMenuDirective, MainBodyDirective} from '../../_directives/index';
import {MainMenuService} from '../../services/index'

// import {ProfileModule} from './profile/index';
import {DashboardComponent} from './dashboard/dashboard.component';
import {OrdersListComponent} from './orders/orders.component';

@NgModule({
    imports: [
        RouterModule,
        BrowserModule,
        FormsModule, ReactiveFormsModule,
        DndModule.forRoot(),
        // ProfileModule
    ],
    declarations: [
        HomeComponent,
        HeaderDirective, MainMenuDirective, MainBodyDirective,
        DashboardComponent,
        OrdersListComponent
    ],
    providers: [
        HttpClient,
        MainMenuService
    ],
    bootstrap: [HomeComponent]
})

export class HomeModule {}