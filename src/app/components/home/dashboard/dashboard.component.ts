import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
declare const $: any;

@Component({
    templateUrl: 'dashboard.html'
})
export class DashboardComponent implements OnInit {
    title: string;

    constructor(
        private route: ActivatedRoute
    ) {
        this.title = route.snapshot.data['name'];
    }

    ngOnInit() {
        $('#datepicker').datepicker();
    }
}