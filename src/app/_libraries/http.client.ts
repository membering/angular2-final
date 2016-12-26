import {Injectable} from '@angular/core';
import {Response, RequestOptionsArgs} from '@angular/http';
import {AuthHttp} from 'angular2-jwt';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
declare const $: any;

@Injectable()
export class HttpClient {
    apiUrl: string;

    constructor(
        private http: AuthHttp,
        private router: Router
    ) {
        this.apiUrl = process.env.apiUrl;
    }

    private extractData = (res: Response | any) => {
        $('.loader').removeClass('is-active');
        let body = res.json();
        return body || {};
    };

    private handleError = (error: Response | any) => {
        $('.loader').removeClass('is-active');
        if (error.status == 401) this.router.navigate(['/login']);
        let errMsg: string;
        if (error instanceof Response) {
            let body = error.json() || '';
            errMsg = body.error || JSON.stringify(body);
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        return Observable.throw(errMsg);
    };

    get(url: string, options?: RequestOptionsArgs) {
        $('.loader').addClass('is-active');
        return this.http.get(this.apiUrl + url, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    post(url: string, data?: any, options?: RequestOptionsArgs) {
        $('.loader').addClass('is-active');
        return this.http.post(this.apiUrl + url, data, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    put(url: string, data?: any, options?: RequestOptionsArgs) {
        $('.loader').addClass('is-active');
        return this.http.put(this.apiUrl + url, data, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    delete(url: string, options?: RequestOptionsArgs) {
        $('.loader').addClass('is-active');
        return this.http.delete(this.apiUrl + url, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    patch(url: string, data?: any, options?: RequestOptionsArgs) {
        $('.loader').addClass('is-active');
        return this.http.patch(this.apiUrl + url, data, options)
            .map(this.extractData)
            .catch(this.handleError);
    }
}