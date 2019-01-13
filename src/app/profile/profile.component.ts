import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User, UserService, Profile } from '../core';
import { concatMap ,  tap } from 'rxjs/operators';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private fb: FormBuilder
  ) { }

  profile: Profile;
  currentUser: User;
  isUser: boolean;

  userForm: FormGroup;

  ngOnInit() {
    this.userForm = this.fb.group({
      'username': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email]]
    });
    this.userService.currentUser.subscribe(
      (userData) => {
        this.currentUser = userData;
        this.userForm.controls['username'].setValue(userData.username);
        this.userForm.controls['email'].setValue(userData.email);
      }
    );
  }

  onToggleFollowing(following: boolean) {
    this.profile.following = following;
  }

}
