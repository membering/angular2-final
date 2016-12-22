import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
    templateUrl: 'orders.html'
})
export class OrdersListComponent {
    title: string;

    constructor(
        private route: ActivatedRoute
    ) {
        this.title = route.snapshot.data['name'];
    }
}