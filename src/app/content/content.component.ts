import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  onBack() {
    window.history.back();
  }

}
