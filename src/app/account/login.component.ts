import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AccountService } from '../services/account.service';
import { AlertService } from '../services/alert.service';


@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls : ['login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Login!';
  myFormModel: FormGroup;
  submitted = false;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.myFormModel = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    })
  }


  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.myFormModel.invalid) {
      return;
    }

    this.loading = true;
    this.accountService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe({
        next: () => {
          // get return url from query parameters or default to home page
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          this.router.navigateByUrl(returnUrl);
        },
        error: error => {
          this.alertService.error(error);
          this.loading = false;
        }
      });
  }




  get f() {
    return this.myFormModel.controls
  }
  onReset() {
    this.submitted = false;
    this.myFormModel.reset();
  }

}
