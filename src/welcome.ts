import { autoinject } from 'aurelia-framework';
import { AuthService } from 'aurelia-authentication';

@autoinject()
export class Welcome {

  constructor(private authService: AuthService) { }
}
