import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRouteSnapshot} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
    selector: 'main-body',
    templateUrl: 'main-body.html'
})

export class MainBodyDirective implements OnInit {
    title: string;
    currentTitle: string;

    constructor(
        private router: Router,
        private titleService: Title
    ) {
    }

    ngOnInit() {
        this.currentTitle = this.titleService.getTitle();
        this.router.events.subscribe(() => {
            this.parseRoute(this.router.routerState.snapshot.root);
        });
    }

    parseRoute(node: ActivatedRouteSnapshot) {
        if (node.data['name']) {
            this.title = node.data['name'];
            this.titleService.setTitle(this.currentTitle + ' - ' + node.data['name'].toUpperCase());
        }
        if (node.firstChild) {
            this.parseRoute(node.firstChild);
        }
    }
}