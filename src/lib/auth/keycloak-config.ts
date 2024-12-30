// Keycloak initialization options
export const keycloakConfig = {
  initOptions: {
    onLoad: 'check-sso',
    silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
    pkceMethod: 'S256',
    checkLoginIframe: false,
  },
  loginOptions: {
    redirectUri: window.location.origin + '/dashboard',
  },
  logoutOptions: {
    redirectUri: window.location.origin + '/login',
  },
} as const;