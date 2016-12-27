import {Component, Input} from '@angular/core';
import {MenuComponent} from './menu.component';

@Component({
    selector: 'tree-view',
    templateUrl: 'tree-view.html'
})
export class TreeView {
    @Input() listMenus: Array<MenuComponent>;

    removeItem(item: any) {
        var index = this.listMenus.indexOf(item);
        this.listMenus.splice(index, 1);
    }
}