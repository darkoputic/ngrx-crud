import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authState = undefined;

  constructor(private fireAuth: AngularFireAuth,) {
  }

  anonymousLogin(): Promise<any> {
    return this.fireAuth.signInAnonymously()
      .then(user => {
        console.log('User', user);
      })
      .catch(error => console.log(error));
  }
}
