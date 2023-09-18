import { Box, Card, List, Typography } from "@mui/material";
import TodoItem from "./TodoItem";
import { useTodos } from "../graphql/hooks/todoHooks";
import { useUserContext } from "../Providers/UserProvider";
import styled from "@emotion/styled";

export default function TodoList() {
  const { user } = useUserContext();
  const { todos } = useTodos({ userEmail: user?.email });
  const hasTodos = !!todos?.length;

  return (
    <>
      <ListContainer>
        {hasTodos && <Title>Take a look at your tasks!</Title>}
        {hasTodos ? (
          <List>
            {todos?.map((todo, idx) => (
              <TodoItem key={todo.id} todo={todo} idx={idx} />
            ))}
          </List>
        ) : (
          <EmptyStateContainer>
            <EmptyState>Create a task to get started</EmptyState>
          </EmptyStateContainer>
        )}
      </ListContainer>
    </>
  );
}

const ListContainer = styled(Card)(() => ({
  height: "50vh",
  backgroundColor: "rgb(33,41,54)",
  width: "60vw",
  margin: "2rem auto",
  overflow: "auto",
}));

const Title = styled(Typography)(() => ({
  color: "white",
  fontSize: "1.5rem",
  fontWeight: "bold",
  marginLeft: "1rem",
  marginTop: "1rem",
}));

const EmptyState = styled(Typography)(() => ({
  color: "lightgray",
  fontSize: "1.5rem",
}));

const EmptyStateContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  marginTop: "13rem",
}));
