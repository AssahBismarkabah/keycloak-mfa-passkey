import { Injectable } from "@angular/core";
import { KeycloakService } from "keycloak-angular";

export const REDIRECT_URI: string = 'http://localhost:4200';

@Injectable({
    providedIn: 'root'
})
export class KeycloakFactory {

  constructor(private readonly keycloakService: KeycloakService) {}

  public isUserLoggedIn(): boolean {
    return this.keycloakService.isLoggedIn();
  }

  public logout(): void {
    this.keycloakService.logout(REDIRECT_URI);
  }

  public getUsername(): string {
    return this.keycloakService.getUsername();
  }

  public redirectToLoginPage(path?: string): Promise<void> {
    return this.keycloakService.login({
      redirectUri: `${REDIRECT_URI}${path ?? ''}`
    });
  }
  public getAccessToken(): Promise<string> {
    return this.keycloakService.getToken();
  }

}
