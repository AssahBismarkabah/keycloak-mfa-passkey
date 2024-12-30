# Keycloak Mfa Passkey

## Features

- Passwordless authentication with Keycloak
- Dashboard with account overview


## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   Create a `.env` file with:
   ```
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   VITE_KEYCLOAK_URL=your_keycloak_url
   VITE_KEYCLOAK_REALM=your_realm
   VITE_KEYCLOAK_CLIENT_ID=your_client_id
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Keycloak Configuration

1. Set up a Keycloak server
2. Create a new realm
3. Create a new client with the following settings:
   - Client Protocol: openid-connect
   - Access Type: public
   - Valid Redirect URIs: http://localhost:5173/*
   - Web Origins: http://localhost:5173
4. Enable WebAuthn in Authentication settings
5. Configure Passwordless authentication flow



## Security Considerations

- All API endpoints are protected
- Row Level Security (RLS) is enabled on all tables
- Sensitive data is encrypted
- HTTPS is required in production
- Regular security audits are recommended

## Testing

Run the test suite:
```bash
npm test
```

## Deployment

1. Build the application:
   ```bash
   npm run build
   ```

2. Deploy the built assets to your hosting provider
3. Configure environment variables on your hosting platform
4. Update Keycloak client settings with production URLs

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT