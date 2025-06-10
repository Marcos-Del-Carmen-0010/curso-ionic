import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { notifications } from 'ionicons/icons';
@Component({
  selector: 'app-icon-notification',
  standalone: false,
  templateUrl: './icon-notification.component.html',
  styleUrls: ['./icon-notification.component.scss'],
})
export class IconNotificationComponent  implements OnInit {

  constructor() { 
    addIcons({ notifications});
  }

  ngOnInit() {}

}
