import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-layout-loader',
  templateUrl: './loader.component.html'
})

export class LoaderComponent {
  today: number = Date.now();

  @Input() loading = false;

  constructor() {

  }

}
