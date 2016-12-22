import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';

import {HomeRoutes} from './components/home/index';
import {Page404Component} from './components/front/pages/index';
import {LoginComponent, RegisterComponent} from './components/front/index';
import {ForgotComponent, ResetComponent} from './components/front/password/index';

const appRoutes: Routes = [
    {path: 'forgot-password', component: ForgotComponent},
    {path: 'reset-password', component: ResetComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    ...HomeRoutes,

    {path: '**', component: Page404Component}
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true, preloadingStrategy: PreloadAllModules});