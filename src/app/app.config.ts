import {APP_INITIALIZER, ApplicationConfig, importProvidersFrom, mergeApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import { appKeycloakConfig } from './services/keycloak/keycloak.config';

export const appDefaultConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
  ]
};

export const appConfig = mergeApplicationConfig(appDefaultConfig, appKeycloakConfig);
