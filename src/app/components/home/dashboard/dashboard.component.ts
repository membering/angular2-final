import {Component, OnInit} from '@angular/core';
declare var $: any;

@Component({
    templateUrl: 'dashboard.html'
})
export class DashboardComponent implements OnInit {
    ngOnInit(): void {
        // $("#myModal").modal('show');
    }
    show() {
        $("#myModal").modal('show');
    }
}