import {Injectable} from '@angular/core';
import {Headers} from "@angular/http";
import {HttpClient} from '../_libraries/http.client';

@Injectable()
export class MainMenuService {
    constructor(
        private http: HttpClient
    ) {}

    getLeftMenu() {
        return this.http.get('/master-service/v1/menu/left-menu');
    }

    getFavoriteMenu() {
        return this.http.get('/master-service/v1/menu/favourite-menu');
    }

    addFavorite(menu_id: any, position_order: any) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var data = 'menu_id='+menu_id+'&display_order='+position_order;
        return this.http.post('/master-service/v1/menu/favourite-menu', data, {headers: headers});
    }

    removeItemFavorite(menu_id: any) {
        return this.http.delete('/master-service/v1/menu/favourite-menu/' + menu_id);
    }

}