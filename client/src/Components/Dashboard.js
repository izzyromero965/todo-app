import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import TodoList from "./TodoList";
import LogoutButton from "./LogoutButton";
import TodoForm from "./TodoForm";
import FeaturedTodoList from "./FeaturedTodoList";

export default function Dashboard() {
  return (
    <>
      <NavBarContainer>
        <LogoutButton />
        <Title variant="h1">Welcome to your Todo App</Title>
      </NavBarContainer>
      <Container>
        <Box>
          <TodoForm />
          <TodoList />
        </Box>
        <FeaturedTodoList />
      </Container>
    </>
  );
}

const Container = styled(Box)(() => {
  return {
    display: "flex",
    flexDirection: "row",
    width: "100vw",
    alignItems: "center",
    gap: "2rem",
  };
});

const NavBarContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  width: "100vw",
  alignItems: "center",
}));

const Title = styled(Typography)(() => {
  return {
    fontSize: "2rem",
    fontWeight: "bold",
    marginTop: "2rem",
    marginBottom: "2rem",
  };
});
