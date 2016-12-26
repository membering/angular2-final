import {Component, OnInit} from '@angular/core';
declare const $: any;

@Component({
    templateUrl: 'dashboard.html'
})
export class DashboardComponent implements OnInit {
    constructor() {}

    ngOnInit() {
        $('#datepicker').datepicker();
    }
}