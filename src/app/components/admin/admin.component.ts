import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeycloakFactory } from '../../services/keycloak/keycloak.factory';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})  
export class AdminComponent implements OnInit {
  accessToken: string | null = null;
  decodedToken: { header: any; payload: any } | null = null;
  currentSection: string = 'overview';

  constructor(private keycloakFactory: KeycloakFactory) {}

  async ngOnInit() {}

  private decodeToken(token: string) {
    const parts = token.split('.');
    if (parts.length !== 3) return null;

    try {
      return {
        header: JSON.parse(atob(parts[0])),
        payload: JSON.parse(atob(parts[1]))
      };
    } catch (e) {
      console.error('Error decoding token:', e);
      return null;
    }
  }

  async setCurrentSection(section: string) {
    this.currentSection = section;
    if (section === 'authentication') {
      try {
        this.accessToken = await this.keycloakFactory.getAccessToken();
        if (this.accessToken) {
          this.decodedToken = this.decodeToken(this.accessToken);
        }
      } catch (error) {
        this.accessToken = 'Error fetching token';
        console.error(error);
      }
    }
  }
}