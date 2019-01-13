import { Component, OnInit } from '@angular/core';

import { User, UserService, Errors } from '../../core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import UIkit from 'uikit';
import { AlertService } from '../../core/services/alert.service';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  authType: String = '';
  title: String = '';
  errors: Errors = {errors: {}};
  isSubmitting = false;
  authForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    private userService: UserService,
    private fb: FormBuilder
  ) {}

  currentUser: User;

  ngOnInit() {
    this.authForm = this.fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });
    this.userService.currentUser.subscribe(
      (userData) => {
        this.currentUser = userData;
      }
    );
  }

  submitForm() {
    this.isSubmitting = true;
    this.errors = {errors: {}};

    const credentials = this.authForm.value;
    this.userService
    .attemptAuth(this.authType, credentials)
    .subscribe(
      data => {
        UIkit.modal(document.getElementById('login-modal')).hide();
        this.alertService.setAlert('success', 'Тавтай морил');
      },
      err => {
        this.errors.errors = err;
        this.isSubmitting = false;
      }
    );
  }

  logout() {
    this.userService.purgeAuth();
  }
}
