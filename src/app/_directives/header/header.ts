import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {JwtHelper} from 'angular2-jwt';

@Component({
    selector: 'header',
    templateUrl: 'header.html'
})

export class HeaderDirective implements OnInit {
    jwtHelper: JwtHelper = new JwtHelper();
    profile: any = {};

    constructor(
        private router: Router
    ) {
        this.profile = this.jwtHelper.decodeToken(localStorage.getItem('id_token'));
    }

    ngOnInit() {}

    logout() {
        localStorage.clear();
        this.router.navigate(['/login']);
    }
}