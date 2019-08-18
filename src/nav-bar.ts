import { AuthService } from 'aurelia-authentication';
import { autoinject, bindable } from 'aurelia-framework';
import { Router } from 'aurelia-router';

@autoinject()
export class NavBar {
  @bindable()
  public router: Router;

  constructor(private authService: AuthService) { }

  public login() {
    this.authService.authenticate('fitbit');
  }

  public logout() {
    this.authService.logout('#');
  }
}
