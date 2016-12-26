import {Component, ElementRef, Renderer, OnInit} from '@angular/core';
import {Router, ActivatedRouteSnapshot} from '@angular/router';
import {MainMenuService} from '../../services/main-menu.service';

@Component({
    selector: 'main-menu',
    templateUrl: 'main-menu.html'
})

export class MainMenuDirective implements OnInit {
    appendStyle: boolean = true;
    showAllMenuFavorite: boolean = false;
    menuData: any = [];
    menuFavorite: any = [];
    activeComponent: string;

    constructor(
        private router: Router,
        private el: ElementRef,
        private renderer: Renderer,
        private service: MainMenuService,
    ) {
        this.router.events.subscribe(() => {
            this.getActiveUrl(this.router.routerState.snapshot.root);
            this.initMenu();
        });
    }

    ngOnInit() {
        this.loadLeftMenu();
        this.loadFavoriteMenu();
    }

    getActiveUrl(node: ActivatedRouteSnapshot) {
        if (node.component.length) {
            this.activeComponent = node.component['name'];
        }
        if (node.firstChild) {
            this.getActiveUrl(node.firstChild);
        }
    }

    getWidth() {
        if (this.appendStyle) {
            this.renderer.setElementClass(this.el.nativeElement, 'side-bar-expand', true);
            this.renderer.setElementClass(this.el.nativeElement, 'side-bar-collapse', false)
        } else {
            this.renderer.setElementClass(this.el.nativeElement, 'side-bar-expand', false);
            this.renderer.setElementClass(this.el.nativeElement, 'side-bar-collapse', true)
        }
    }

    isParrentComponent(menuCpn: string, target: string) {
        let obj = menuCpn.split(',');
        if (obj.indexOf(target) == -1) return false;
        return true;
    }

    initMenu() {
        this.menuData.forEach((menu: any) => {
            menu['active'] = false;
            menu['open'] = false;
            menu['nodes'].forEach((menuChild: any) => {
                menuChild['active'] = false;
                menuChild['open'] = false;
            })
        });
        let menuCpn: any;
        for (let i in this.menuData) {
            let subMenu = this.menuData[i]['nodes'];
            if (subMenu.length) {
                for (let sub in subMenu) {
                    menuCpn = subMenu[sub]['description'];
                    if (this.isParrentComponent(menuCpn, this.activeComponent)) {
                        this.menuData[i]['active'] = true;
                        this.menuData[i]['open'] = true;
                        subMenu[sub]['active'] = true;
                    }
                }
            }
            else {
                menuCpn = this.menuData[i]['description'];
                if (this.isParrentComponent(menuCpn, this.activeComponent)) {
                    this.menuData[i]['active'] = true;
                    this.menuData[i]['open'] = true;
                }
            }
        }
    }

    loadLeftMenu() {
        if (localStorage.getItem('leftmenu')) {
            this.menuData = JSON.parse(localStorage.getItem('leftmenu'));
            this.initMenu();
        }
        else {
            this.service.getLeftMenu()
                .subscribe(
                    res => {
                        localStorage.setItem('leftmenu', JSON.stringify(res.data));
                        this.menuData = res.data;
                        this.initMenu();
                    }
                );
        }
    }

    loadFavoriteMenu(flag: boolean = false) {
        if (localStorage.getItem('favoritemenu') && !flag) {
            this.menuFavorite = JSON.parse(localStorage.getItem('favoritemenu'));
        }
        else {
            this.service.getFavoriteMenu()
                .subscribe(
                    res => {
                        localStorage.setItem('favoritemenu', JSON.stringify(res.data));
                        this.menuFavorite = res.data;
                    }
                );
        }
    }

    updateMenuFavorite(event: any) {
        let item = event.dragData;
        let found = 0;
        let position = this.menuFavorite.length;
        if (this.menuFavorite.length == 0) {
            this.menuFavorite.push(item);
            this.service.addFavorite(item.menu_id, position + 1);
        }
        else {
            for (let i in this.menuFavorite) {
                let idFav = this.menuFavorite[i].menu_id;
                if (item.menu_id == idFav) {
                    found++;
                }
            }
            if (found == 0) {
                this.menuFavorite.push(item);
                this.service.addFavorite(item.menu_id, position + 1);
            }
        }
        this.loadFavoriteMenu(true);
    }

    removeItemFavorite(item: any) {
        let index = this.menuFavorite.indexOf(item);
        this.menuFavorite.splice(index, 1);
        this.service.removeItemFavorite(item.menu_id);
        this.loadFavoriteMenu(true);
    }
}