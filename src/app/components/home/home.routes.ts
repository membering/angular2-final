import {Routes} from '@angular/router';

import {AuthGuard} from '../../_guards/index';
import {HomeComponent} from './index';
import {DashboardComponent} from './dashboard/dashboard.component';
import {OrdersListComponent} from './orders/orders.component';
import {ProfileRoutes} from './profile/index'

export const HomeRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
            {path: 'dashboard', component: DashboardComponent, data: {name: 'Dashboard'}},
            {path: 'orders', component: OrdersListComponent, data: {name: 'Orders List'}},
            ...ProfileRoutes
        ],
        canActivate: [AuthGuard]
    }
];