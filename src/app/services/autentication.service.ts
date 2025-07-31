import {inject, Injectable} from '@angular/core';
import {Auth, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,updateEmail, updateProfile} from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AutenticationService {

  constructor() {
    // this.logout();
  }
  private _auth = inject(Auth);
  public authState= authState(this._auth);

  async createUser(email: string, password: string) {
    const user = await createUserWithEmailAndPassword(this._auth, email, password);
    return user;
  }

  getCurrentUser() {
    return this._auth.currentUser;
  }

  updateEmail(email: string) {
    return updateEmail(this._auth.currentUser, email)
  }

  updateProfile(data: {displayName?: string, photoURL?: string}) {
    return updateProfile(this._auth.currentUser, data)
  }

  async login(email: string, password: string) {
    let user = await signInWithEmailAndPassword(this._auth, email, password);
    return user;
  }

  logout() {
    signOut(this._auth);
  }

  // Object { providerId: "firebase", proactiveRefresh: {…}, reloadUserInfo: {…}, reloadListener: null, uid: "xNvY9pAu3aQAFDWUXT49lMS8TLA2", auth: {…}, stsTokenManager: {…}, accessToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijk1MWRkZTkzMmViYWNkODhhZmIwMDM3YmZlZDhmNjJiMDdmMDg2NmIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vY3Vyc28taW9uaWMtYmFjayIsImF1ZCI6ImN1cnNvLWlvbmljLWJhY2siLCJhdXRoX3RpbWUiOjE3NTM4ODc4NDQsInVzZXJfaWQiOiJ4TnZZOXBBdTNhUUFGRFdVWFQ0OWxNUzhUTEEyIiwic3ViIjoieE52WTlwQXUzYVFBRkRXVVhUNDlsTVM4VExBMiIsImlhdCI6MTc1Mzg4Nzg0NCwiZXhwIjoxNzUzODkxNDQ0LCJlbWFpbCI6Im1hcmNvc2RlbGNhcm1lbkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsibWFyY29zZGVsY2FybWVuQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Li2pQgwsLhuK6NMuYstbPab6dP4qkxpfQR3V8iTD0yyiWaWwyBZ-8s4_Ojf4-2IFvyu0M-t4Uo1iC4ryi1s9pJi3ow9af1AMma61o47ThbNFkoFNewbfpIjpxmGUUMGeeadK9KeFTj4CazXSWm4jj_kcAa8H6unVL4sH2eAdMOAZGLr4cp-R44OUm-6SmyTTeZR6usEE0H90qtn3c3vyHAd_6mjXDJD_B4hYx_Jyf8yfNTb_vckPDyywyDXN5uRpzo2TRDZBQd9eYAJK4k0Qbc3d7sXJOECd6ObRrIcTZgJ-C123Oni5vSVH5L6VGxGreuSZtl4kobfiHS-fNWJxZQ", displayName: null, email: "marcosdelcarmen@gmail.com", … }
}
