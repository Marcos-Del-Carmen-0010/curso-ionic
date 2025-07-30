import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import {IonicModule} from "@ionic/angular";
import {RouterLink} from "@angular/router";
import {AutenticationService} from "../services/autentication.service";
import {HomeModel} from "../models/Home.models";
import {FirebaseService} from "../services/firebase.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, ReactiveFormsModule]
})
export class RegisterPage implements OnInit {
  public formRegister: FormGroup;
  constructor(
    private fb: FormBuilder,
    private _auth: AutenticationService,
    private _serviceFirebase: FirebaseService,
  ) {
    this.formRegister = this.fb.group({
      name:['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      age: [null, Validators.required],
      photo: ['', Validators.required],
    })
  }

  ngOnInit() {
    console.log('');
  }

  async submit() {
    if(this.formRegister.valid) {
      const data = this.formRegister.value;
      try {
       const res = await this._auth.createUser(data.email, data.password);
       let profile : HomeModel.Auth.UpdateProfile = {
         displayName: data.name,
         photoURL: data.photo
       }

       await this._auth.updateProfile(profile);

        let datosUser: HomeModel.Auth.UserProfile = {
          name: data.name,
          photo: data.photo,
          age: data.ege,
          id: res.user.uid,
          email: data.email
        }
        console.log('datosUser -> ', datosUser);
        let usuario = await this._serviceFirebase.crearDocumento(HomeModel.Auth.PathUsers, datosUser, res.user.uid);
        console.log('usuario creado con éxito', usuario);
      } catch (err){

      }
    } else {
      console.log('¡algo anda mal!');
    }
  }
}
