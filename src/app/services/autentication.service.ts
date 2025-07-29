import { Injectable } from '@angular/core';
import {Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AutenticationService {

  constructor(private auth: Auth) { }

  async createUser(email: string, password: string) {
    const user = await createUserWithEmailAndPassword(this.auth, email, password);
    return user;
  }

  async login(email: string, password: string) {
    const user = await signInWithEmailAndPassword(this.auth, email, password);
    return user;
  }
}
