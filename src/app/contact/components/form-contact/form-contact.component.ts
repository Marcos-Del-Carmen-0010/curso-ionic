import { Component, OnInit } from '@angular/core';
import {HomeModel} from "../../../models/Home.models";

@Component({
  selector: 'app-form-contact',
  standalone: false,
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss'],
})
export class FormContactComponent  implements OnInit {
  public error: boolean;
  public form: HomeModel.Contact.IContact = {
    email: '',
    name: '',
    phone: ''
  }
  constructor() {
    this.error = false;
  }

  ngOnInit() {}

  enviar() {
    this.error = !this.form.email;
  }
}
