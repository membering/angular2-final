import { Injectable } from '@angular/core';
import { HttpClient } from '../_libraries/http.client';

@Injectable()
export class MainMenuService {
    constructor(
        private http: HttpClient
    ) {}

    getLeftMenu() {
        return this.http.get('/master-service/v1/menu/left-menu');
    }
}