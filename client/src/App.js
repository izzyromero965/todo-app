import { Box } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import styled from "@emotion/styled";
import Routes from "./Routes";

const history = createBrowserHistory();

export default function App() {
  return (
    <AppContainer>
      <Router history={history}>
        <Routes />
      </Router>
    </AppContainer>
  );
}

const AppContainer = styled(Box)(() => ({
  minHeight: "100vh",
  color: "black",
}));
