import {Injectable} from '@angular/core';
import {Headers} from "@angular/http";
import {HttpClient} from '../_libraries/http.client';

@Injectable()
export class MenuService {
    constructor(
        private http: HttpClient
    ) {}

    getGroupMenus() {
        return this.http.get('/master-service/v1/menus');
    }

    getMenusByGroupId(id: any) {
        return this.http.get('/master-service/v1/menus/' + id);
    }

    getLeftMenu() {
        return this.http.get('/master-service/v1/menu/left-menu');
    }

    getFavoriteMenu() {
        return this.http.get('/master-service/v1/menu/favourite-menu');
    }

    addFavorite(id: number, position: number) {
        let data = {
            menu_id: id,
            display_order: position
        };
        return this.http.post('/master-service/v1/menu/favourite-menu', data);
    }

    removeItemFavorite(id: number) {
        return this.http.delete('/master-service/v1/menu/favourite-menu/' + id);
    }

}