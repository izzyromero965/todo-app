import { Switch, Route } from "react-router-dom";
import routes from "./routesConfig";
import { useAuth0 } from "@auth0/auth0-react";
import UserProvider from "./Providers/UserProvider";

export default function Routes() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Switch>
      <UserProvider>
        {routes.map(({ ...page }) => {
          return <Route {...page} />;
        })}
      </UserProvider>
    </Switch>
  );
}
