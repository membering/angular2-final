import {Component, OnInit} from '@angular/core';
import {ToastyService} from 'ng2-toasty';
declare const $: any;
declare const saveAs: any;

@Component({
    templateUrl: 'dashboard.html'
})
export class DashboardComponent implements OnInit {
    constructor(
        private toastyService: ToastyService
    ) {}

    ngOnInit() {
        this.toastyService.success('test message test message test message test message test message test message test message');
        $('#datepicker').datepicker();
        // var file = new File(["Hello, world!"], "hello world.txt", {type: "text/plain;charset=utf-8"});
        // saveAs.saveAs(file);
    }
}