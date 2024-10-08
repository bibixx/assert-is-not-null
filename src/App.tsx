import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserContextProvider, useUserContext } from "./context/UserContext";
import { Dashboard } from "./views/Dashboard/Dashboard";
import { LoginPage } from "./views/Login";
import { Terms } from "./views/Terms";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorListener } from "./components/ErrorListener/ErrorListener";
import { ErrorBoundaryFallback } from "./components/ErrorBoundaryFallback/ErrorBoundaryFallback";
import { TooltipProvider } from "./components/ui/tooltip";

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
      <TooltipProvider>
        <UserContextProvider>
          <Router>
            <Switch>
              <Route path="/terms">
                <Terms />
              </Route>
              <Route path="/privacy">
                <Terms />
              </Route>
              <Route path="/">
                <Root />
              </Route>
            </Switch>
          </Router>
        </UserContextProvider>
        <ErrorListener />
      </TooltipProvider>
    </ErrorBoundary>
  );
}

function Root() {
  return (
    <>
      <UnauthorizedApp />
      <AuthorizedApp />
    </>
  );
}

function UnauthorizedApp() {
  const { userData } = useUserContext();
  if (userData !== null) {
    return null;
  }

  return <LoginPage />;
}

function AuthorizedApp() {
  const { userData } = useUserContext();
  if (userData === null) {
    return null;
  }

  return <Dashboard />;
}

export default App;
