import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DndModule} from 'ng2-dnd';

import {HomeComponent} from './index';

import {HttpClient} from '../../_libraries/index';
import {MainMenuDirective} from '../../_directives/index';
import {MainMenuService} from '../../services/index'

import {DashboardComponent} from './dashboard/dashboard.component';

@NgModule({
    imports: [
        RouterModule,
        BrowserModule,
        FormsModule, ReactiveFormsModule,
        DndModule.forRoot()
    ],
    declarations: [
        HomeComponent,
        MainMenuDirective,
        DashboardComponent
    ],
    providers: [
        HttpClient,
        MainMenuService
    ],
    bootstrap: [HomeComponent]
})

export class HomeModule {}