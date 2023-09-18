import { Input, Button, Card, Box } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { useCreateTodo } from "../graphql/hooks/todoHooks";
import { useUserContext } from "../Providers/UserProvider";
import styled from "@emotion/styled";
import { useState } from "react";

const TITLE_INPUT_PLACEHOLDER = "Create a new task...";
const TITLE_INPUT_NAME = "title";

export default function TodoForm() {
  const { createTodo } = useCreateTodo();
  const { user } = useUserContext();
  const [titleInputValue, setTitleInputValue] = useState("");

  return (
    <Box>
      <FormControl>
        <InputContainer>
          <TitleInput
            name={TITLE_INPUT_NAME}
            id="title-input"
            placeholder={TITLE_INPUT_PLACEHOLDER}
            value={titleInputValue}
            onChange={(e) => setTitleInputValue(e.target.value)}
            required
            disableUnderline
          />
          <Button
            onClick={() =>
              handleSubmit({
                titleInputValue,
                createTodo,
                userEmail: user?.email,
                setTitleInputValue,
              })
            }
          >
            Add
          </Button>
        </InputContainer>
      </FormControl>
    </Box>
  );
}
async function handleSubmit({
  titleInputValue,
  createTodo,
  userEmail,
  setTitleInputValue,
}) {
  await createTodo({
    title: titleInputValue,
    userEmail,
  });

  setTitleInputValue("");
}

const TitleInput = styled(Input)({
  color: "white",
  margin: "0.5rem",
  border: "none",
});

const InputContainer = styled(Card)({
  backgroundColor: "rgb(33,41,54)",
  height: "5vh",
  width: "60vw",
  display: "flex",
  justifyContent: "space-between",
});
