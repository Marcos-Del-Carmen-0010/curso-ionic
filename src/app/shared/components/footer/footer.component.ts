import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { home, storefront, call, search } from 'ionicons/icons';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent  implements OnInit {

  constructor() { 
    addIcons({ home, storefront, call, search });
  }

  ngOnInit() {}

}
