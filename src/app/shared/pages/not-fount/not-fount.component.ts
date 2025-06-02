import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-not-fount',
  templateUrl: './not-fount.component.html',
  styleUrls: ['./not-fount.component.scss'],
  standalone: true,
  imports: [
    IonContent,
    RouterModule
  ]
})
export class NotFountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.init();
  }

  init() {
    console.log('....:::::NotFountComponent init');
  }
}
