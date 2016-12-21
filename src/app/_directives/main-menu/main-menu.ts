import {Component, ElementRef, Renderer, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MainMenuService} from '../../services/main-menu.service';

@Component({
    selector: 'main-menu',
    templateUrl: 'main-menu.html'
})

export class MainMenuDirective implements OnInit {
    appendStyle: boolean = true;
    menuData: any = [];

    constructor(
        private router: Router,
        private el: ElementRef,
        private renderer: Renderer,
        private service: MainMenuService,
    ) {}

    ngOnInit() {
        this.loadLeftMenu();
    }

    loadLeftMenu() {
        this.service.getLeftMenu().subscribe(
            res => {
                console.log(res);
            },
            error => {
                console.log(error);
            }
        )
    }

    getWidth() {
        if (this.appendStyle) {
            //this.renderer.setElementStyle(this.el.nativeElement, 'width', '240px');
            this.renderer.setElementClass(this.el.nativeElement, 'side-bar-expand', true);
            this.renderer.setElementClass(this.el.nativeElement, 'side-bar-collapse', false)
        } else {
            //this.renderer.setElementStyle(this.el.nativeElement, 'width', '40px');
            this.renderer.setElementClass(this.el.nativeElement, 'side-bar-expand', false);
            this.renderer.setElementClass(this.el.nativeElement, 'side-bar-collapse', true)
        }
    }
}