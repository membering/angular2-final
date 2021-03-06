import {Routes} from '@angular/router';

import {AuthGuard} from '../../_guards/index';
import {HomeComponent} from './index';
import {DashboardComponent} from './dashboard/dashboard.component';
import {OrdersListComponent} from './orders/orders.component';
import {MenuComponent} from './menu/menu.component';
import {profileRoutes} from './profile/index';

export const homeRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
            {path: 'dashboard', component: DashboardComponent, data: {name: 'Dashboard'}},
            {path: 'orders', component: OrdersListComponent, data: {name: 'Orders List'}},
            {path: 'menu', component: MenuComponent, data: {name: 'Menu Settings'}},
            ...profileRoutes
        ],
        canActivate: [AuthGuard]
    }
];