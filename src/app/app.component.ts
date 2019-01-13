import { Component, OnInit } from '@angular/core';

import { UserService, LoaderService } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor (
    private userService: UserService,
    private loader: LoaderService
  ) {}

  ngOnInit() {
    this.userService.populate();
  }
}
