import {Injectable} from '@angular/core';
import {Headers} from "@angular/http";
import {HttpClient} from '../_libraries/http.client';

@Injectable()
export class MenuService {
    constructor(
        private http: HttpClient
    ) {}

    getGroup() {
        return this.http.get('/master-service/v1/menus');
    }

    addGroup(data: any) {
        return this.http.post('/master-service/v1/menus', data);
    }

    editGroup(id: number, data: any) {
        return this.http.post('/master-service/v1/menus' + id, data);
    }

    getMenusByGroupId(id: number) {
        return this.http.get('/master-service/v1/menus/' + id);
    }

    updateMenusByGroupId(id: number, data: any) {
        return this.http.post('/master-service/v1/menus/' + id, data);
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