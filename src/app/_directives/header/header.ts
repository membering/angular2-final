import {Component, OnInit} from '@angular/core';
import {JwtHelper} from 'angular2-jwt';

@Component({
    selector: 'header',
    templateUrl: 'header.html'
})

export class HeaderDirective implements OnInit {
    jwtHelper: JwtHelper = new JwtHelper();
    profile: any = {};

    constructor() {}

    ngOnInit() {
        this.profile = this.jwtHelper.decodeToken(localStorage.getItem('id_token'));
    }
}