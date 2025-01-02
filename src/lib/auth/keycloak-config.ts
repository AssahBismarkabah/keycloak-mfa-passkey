export const keycloakConfig = {
  initOptions: {
    onLoad: 'check-sso',
    silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
    pkceMethod: 'S256',
    checkLoginIframe: false,
  },
  loginOptions: {
    redirectUri: window.location.origin + '/keycloak-callback',
  },
  logoutOptions: {
    redirectUri: window.location.origin + '/keycloak-callback',
  },
} as const;
