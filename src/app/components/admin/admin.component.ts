import { Component, OnInit } from '@angular/core';
import { KeycloakFactory } from '../../services/keycloak/keycloak.factory';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit {

  public username?: string;

  constructor(private readonly keycloakFactory: KeycloakFactory) {}

  ngOnInit(): void {
    this.username = this.keycloakFactory.getUsername();
  }

}
