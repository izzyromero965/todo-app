import styled from "@emotion/styled";
import { Box, Button, Card, Typography } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";

export default function Login() {
  const { loginWithRedirect } = useAuth0();

  return (
    <Container>
      <TitleContainer>
        <Title>Welcome!</Title>
        <Typography>
          This is where you can log in or sign up to start
        </Typography>
      </TitleContainer>
      <LoginButton
        variant="contained"
        color="primary"
        onClick={() => loginWithRedirect()}
      >
        Register/Log In
      </LoginButton>
    </Container>
  );
}

const Container = styled(Card)(() => ({
  height: "50vh",
  width: "50vw",
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
  justifyContent: "center",
  backgroundColor: "rgb(33,41,54)",
  margin: "10rem auto 0 auto",
  color: "white",
}));

const Title = styled(Typography)(() => ({
  fontSize: "2rem",
}));

const TitleContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const LoginButton = styled(Button)(() => ({
  width: "10rem",
  alignSelf: "center",
  marginTop: "1rem",
}));
