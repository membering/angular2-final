import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {ProfileComponent} from './index';
// import {BreadcrumbDirective} from '../../../_directives/breadcrumb/breadcrumb';
import {ChangePasswordComponent, DetailComponent, EditComponent} from './action/index';

@NgModule({
    imports: [
        RouterModule,
        BrowserModule,
        FormsModule, ReactiveFormsModule
    ],
    declarations: [
        ProfileComponent,
        // BreadcrumbDirective,
        ChangePasswordComponent, DetailComponent, EditComponent
    ],
    providers: [

    ],
    bootstrap: [ProfileComponent]
})

export class ProfileModule {}