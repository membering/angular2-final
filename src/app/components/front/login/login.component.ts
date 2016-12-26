import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Http, Response} from '@angular/http';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';
declare const $: any;

@Component({
    templateUrl: 'login.html'
})

export class LoginComponent implements OnInit {
    form: FormGroup;
    loading: boolean = false;
    submitted: boolean = false;

    constructor(
        private http: Http,
        private router: Router
    ) {}

    ngOnInit() {
        localStorage.clear();
        this.buildForm();
    }

    buildForm() {
        this.form = new FormGroup({
            email: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required])
        });
    }

    onSubmit() {
        this.submitted = true;
        if (this.form.valid) {
            this.loading = true;
            this.http.post(process.env.apiUrl + '/master-service/v1/login', this.form.value)
                .map((res: Response) => res.json())
                .subscribe(
                    res => {
                        this.loading = false;
                        if (res.data.token) {
                            localStorage.setItem('id_token', res.data.token);
                            this.router.navigate(['']);
                        }
                    },
                    error => {
                        this.loading = false;
                        console.log(error);
                    },
                );
        }
    }
}