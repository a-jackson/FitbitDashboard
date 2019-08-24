import { BaseConfig } from "aurelia-authentication";
import Environment from './environment';

export default {
  loginRedirect: '',
  configureEndpoints: ['fitbit'],
  providers: {
    fitbit: {
      name: 'fitbit',
      oauthType: '2.0',
      clientId: '22B6Y5',
      redirectUri: Environment.redirectUri,
      authorizationEndpoint: 'https://www.fitbit.com/oauth2/authorize',
      responseType: 'token',
      scope: ['profile activity heartrate'],
      requiredUrlParams: ['scope',],
      state: function () {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 32; i++) {
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
      },
      popupOptions: { width: 1028, height: 529 },
    }
  }
} as BaseConfig;
