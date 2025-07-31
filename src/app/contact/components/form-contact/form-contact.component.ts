import { Component, OnInit } from '@angular/core';
import {HomeModel} from "../../../models/Home.models";
import {FormBuilder, FormControl, Validators} from "@angular/forms";

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

  public datosForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    name: ['', [Validators.required]],
    phone: ['', this.isValidPhone]
  });


  constructor(private fb: FormBuilder) {
    this.error = false;
  }

  ngOnInit() {}

  enviar() {
    this.error = !this.form.email;
  }

  enviarFormulario() {
    console.log('datos del formulario reactivo: ',this.datosForm);
    if (this.datosForm.valid) {
      console.log('valido');

    }
  }

  isValidPhone(input: FormControl) {
    if (input.value.length != 0) {
      return {mal: true};
    }
    return {}
  }
}
