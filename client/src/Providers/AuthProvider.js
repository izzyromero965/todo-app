import { Auth0Provider } from "@auth0/auth0-react";

const AUTH0_DOMAIN = "dev-ul88m2q50yvljjan.us.auth0.com";
const AUTH0_CLIENT_ID = "FTYjSJ7h2XRn9aGq15WAB9gHBYjeguIg";

export default function AuthProvider({ children }) {
  return (
    <Auth0Provider
      domain={AUTH0_DOMAIN}
      clientId={AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: `${window.location.origin}/dashboard`,
      }}
    >
      {children}
    </Auth0Provider>
  );
}
