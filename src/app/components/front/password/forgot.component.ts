import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Http, Response, Headers} from '@angular/http';
import {Router} from "@angular/router";
declare const $: any;

@Component({
    templateUrl: 'forgot.html'
})

export class ForgotComponent implements OnInit {
    form: FormGroup;
    loading: boolean = false;
    submitted: boolean = false;

    constructor(
        private http: Http,
        private router: Router
    ) {}

    ngOnInit() {
        this.buildForm();
    }

    buildForm() {
        this.form = new FormGroup({
            email: new FormControl('', [Validators.required]),
            reset_password_url: new FormControl(window.location.origin + '/#/reset-password')
        });
    }

    onSubmit() {
        this.submitted = true;
        console.log(this.form);
        // if (this.form.valid) {
        //     this.loading = true;
        //     let data = $.param(this.form.value);
        //     let headers = new Headers();
        //     headers.append('Content-Type', 'application/x-www-form-urlencoded');
        //     this.http.post(process.env.apiUrl + '/master-service/v1/forgot-password', data, {headers: headers})
        //         .map((response: Response) => response.json())
        //         .subscribe(
        //             res => {
        //                 this.loading = false;
        //                 if (res.data.token) {
        //                     localStorage.setItem('id_token', res.data.token);
        //                     this.router.navigate(['']);
        //                 }
        //             },
        //             error => {
        //                 this.loading = false;
        //                 console.log(error);
        //             },
        //         );
        // }
    }
}