import {Component, OnInit} from '@angular/core';
declare const $: any;
declare const saveAs: any;

@Component({
    templateUrl: 'dashboard.html'
})
export class DashboardComponent implements OnInit {
    constructor() {}

    ngOnInit() {
        $('#datepicker').datepicker();
        // var file = new File(["Hello, world!"], "hello world.txt", {type: "text/plain;charset=utf-8"});
        // saveAs.saveAs(file);
    }
}