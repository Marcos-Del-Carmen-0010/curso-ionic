import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {IonicModule} from "@ionic/angular";
import {Router, RouterLink} from "@angular/router";
import {AutenticationService} from "../services/autentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],

  standalone: true,
  imports: [IonicModule, RouterLink, ReactiveFormsModule]
})
export class LoginPage implements OnInit {
  public formLogin: FormGroup;
  constructor(
    private fb: FormBuilder,
    private _auth: AutenticationService,
    private _router: Router
  ) {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {
    this._auth.authState.subscribe(auth => {
      console.log('usuario ->', auth);
    })

    let user = this._auth.getCurrentUser();
    console.log('getCurrentUser ->', user);
  }

  submit(){
    if(this.formLogin.valid) {
      let correo = this.formLogin.get('email').value.trim();
      let contrasenia = this.formLogin.get('password').value.trim();
      this._auth.login(correo, contrasenia)
        .then(r => {
          console.log('Login exitoso', r);
        })
        .catch(e => {
          console.error('Error al logear:', e);
        });
      // this._router.navigate(['/home']);
    } else {
      console.log('algo anda mal');
    }
  }

}
