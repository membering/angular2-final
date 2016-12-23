import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {ProfileComponent} from './index';
import {ChangePasswordComponent, DetailComponent, EditComponent} from './action/index';

@NgModule({
    imports: [
        RouterModule,
        BrowserModule,
        FormsModule, ReactiveFormsModule
    ],
    declarations: [
        ProfileComponent,
        ChangePasswordComponent, DetailComponent, EditComponent
    ],
    providers: [

    ]
})

export class ProfileModule {}