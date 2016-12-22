import {Routes} from '@angular/router';
import {ProfileComponent} from './index';
import {ChangePasswordComponent, DetailComponent, EditComponent} from './action/index';

export const ProfileRoutes: Routes = [
    {
        path: 'profile',
        component: ProfileComponent,
        children: [
            {path: '', component: DetailComponent, data: {name: 'User Profile'}},
            {path: 'edit', component: EditComponent, data: {name: 'Edit Profile'}},
            {path: 'change-password', component: ChangePasswordComponent, data: {name: 'Change Password'}},
        ]
    }
];