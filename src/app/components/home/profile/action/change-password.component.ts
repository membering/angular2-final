import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    templateUrl: 'change-password.html'
})

export class ChangePasswordComponent implements OnInit {
    title: string;

    constructor(
        private route: ActivatedRoute
    ) {
        this.title = route.snapshot.data['name'];
    }

    ngOnInit() {
    }
}