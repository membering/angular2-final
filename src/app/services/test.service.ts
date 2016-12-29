import {Injectable} from '@angular/core';
import {HttpClient} from '../_libraries/http.client';

@Injectable()
export class TestService {
    constructor(
        private http: HttpClient
    ) {}

    getReportInventory(params: any) {
        return this.http.get('/warehouse-service/v1/warehouses/inventory-report' + params);
    }
}