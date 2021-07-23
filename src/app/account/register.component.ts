import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { first } from 'rxjs/operators';
import { AlertService } from '../services/alert.service';



@Component({
  selector: 'app-registration',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css']
})

export class RegistrationComponent implements OnInit {
  title = 'Registration';

  myFormModel: FormGroup;
  form: FormGroup;

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
      firstName: ['', Validators.required],
      username :['',Validators.required],
      phonenumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],

      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue],
    })
  }



  onSubmit() {

    this.submitted = true;
    if (this.myFormModel.invalid) {
      return
    }
    this.loading = true;
    this.accountService.register(this.myFormModel.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success('Registration successful', { keepAfterRouteChange: true });
          this.router.navigate(['../login'], { relativeTo: this.route });
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
