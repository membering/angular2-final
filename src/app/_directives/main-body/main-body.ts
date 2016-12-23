import {Component} from '@angular/core';
import {Router, ActivatedRouteSnapshot} from '@angular/router';

@Component({
    selector: 'main-body',
    templateUrl: 'main-body.html'
})

export class MainBodyDirective {
    title: string;

    constructor(
        private router: Router
    ) {
        this.router.events.subscribe(event => {
            this.parseRoute(this.router.routerState.snapshot.root);
        });
    }

    parseRoute(node: ActivatedRouteSnapshot) {
        if (node.data['name']) {
            this.title = node.data['name'];
        }
        if (node.firstChild) {
            this.parseRoute(node.firstChild);
        }
    }
}