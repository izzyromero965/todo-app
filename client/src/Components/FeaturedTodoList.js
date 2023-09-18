import { Card, Typography } from "@mui/material";
import TodoItem from "./TodoItem";
import { useFeaturedTodos } from "../graphql/hooks/todoHooks";
import { useUserContext } from "../Providers/UserProvider";
import styled from "@emotion/styled";

export default function FeaturedTodoList() {
  const { user } = useUserContext();
  const { featuredTodos } = useFeaturedTodos({ userEmail: user.email });

  return (
    <Container>
      <StyledTitle variant="h5">Featured Tasks</StyledTitle>
      <StyledSubtitle variant="subtitle1">
        See what other people are doing
      </StyledSubtitle>
      {featuredTodos?.map((todo, idx) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            shouldDisplayIcons={false}
            idx={idx}
          />
        );
      })}
    </Container>
  );
}

const Container = styled(Card)(() => ({
  height: "58vh",
  backgroundColor: "rgb(33,41,54)",
  width: "60vw",
  marginRight: "2rem",
  overflow: "auto",
  marginTop: "-2rem",
}));

const StyledTitle = styled(Typography)(() => ({
  color: "white",
  fontSize: "1.5rem",
  fontWeight: "bold",
  marginLeft: "1rem",
  marginTop: "1rem",
}));

const StyledSubtitle = styled(Typography)(() => ({
  color: "lightgray",
  fontSize: "1rem",
  marginLeft: "1rem",
  marginBottom: "1rem",
}));
