import {Component, OnInit} from '@angular/core';
import {MenuService} from '../../../services/index';
declare const $: any;

@Component({
    templateUrl: 'menu.html'
})
export class MenuComponent implements OnInit {
    listGroups: any = [];
    listMenus: any = [];

    constructor(
        private service: MenuService
    ) {}

    ngOnInit() {
        this.loadGroups();
    }

    loadGroups() {
        this.service.getGroupMenus()
            .subscribe(
                res => {
                    console.log(res);
                    this.listGroups = res.data;
                }
            );
    }

    loadMenus(id: number) {
        this.service.getMenusByGroupId(id)
            .subscribe(
                res => {
                    console.log(res);
                    this.listMenus = res.data;
                }
            );
    }
}