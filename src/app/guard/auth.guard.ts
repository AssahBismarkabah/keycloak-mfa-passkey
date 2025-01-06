import { inject } from '@angular/core';
import { CanActivateFn} from '@angular/router';
import { KeycloakFactory } from '../services/keycloak/keycloak.factory';

// @ts-ignore
export const authGuard: CanActivateFn = (route, state) => {
  const keycloakFactory = inject(KeycloakFactory);

  if(keycloakFactory.isUserLoggedIn()) {
    return true;
  }
  keycloakFactory.redirectToLoginPage(state.url);
  return false;
};
