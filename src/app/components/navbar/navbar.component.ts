import { Component, OnInit, ViewEncapsulation, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbCollapseModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { KeycloakFactory } from '../../services/keycloak/keycloak.factory';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, NgbCollapseModule, NgbTooltipModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {
  isCollapsed = true;
  showLogoutButton: boolean = false;

  constructor(private readonly keycloakFactory: KeycloakFactory) {}

  ngOnInit(): void {
    this.showLogoutButton = this.keycloakFactory.isUserLoggedIn();
  }

  public logoutUser(): void {
    this.keycloakFactory.logout();
  }

}
