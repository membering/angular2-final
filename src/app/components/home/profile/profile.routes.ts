import {Routes} from '@angular/router';
import {ProfileComponent} from './index';
import {ChangePasswordComponent, DetailComponent, EditComponent} from './action/index';

export const profileRoutes: Routes = [
    {
        path: 'profile',
        component: ProfileComponent,
        data: {name: 'Profile'},
        children: [
            {path: '', component: DetailComponent, data: {name: 'Detail'}},
            {path: 'edit', component: EditComponent, data: {name: 'Edit'}},
            {path: 'change-password', component: ChangePasswordComponent, data: {name: 'Change Password'}},
        ]
    }
];