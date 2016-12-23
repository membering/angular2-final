import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    templateUrl: 'detail.html'
})

export class DetailComponent implements OnInit {
    title: string;

    constructor(
        private route: ActivatedRoute
    ) {
        this.title = route.snapshot.data['name'];
    }

    ngOnInit() {
    }
}