import { AuthService } from 'aurelia-authentication';
import { autoinject } from 'aurelia-framework';

@autoinject()
export class NavBar {
  constructor(private authService: AuthService) { }

  public login() {
    this.authService.authenticate('fitbit');
  }

  public logout() {
    this.authService.logout('#');
  }
}
