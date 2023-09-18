import styled from "@emotion/styled";
import DoneIcon from "@mui/icons-material/Done";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDeleteTodo, useUpdateTodo } from "../graphql/hooks/todoHooks";
import { Box } from "@mui/material";

export default function TodoItemIcons({
  itemId,
  titleInputValue,
  setIsUpdating,
  isUpdating,
}) {
  const { deleteTodo } = useDeleteTodo();
  const { updateTodo } = useUpdateTodo();
  return (
    <IconContainer>
      {isUpdating ? (
        <StyledDoneIcon
          onClick={() =>
            handleUpdate({
              id: itemId,
              titleInputValue,
              updateTodo,
              setIsUpdating,
            })
          }
        />
      ) : (
        <StyledUpdateIcon onClick={() => setIsUpdating(true)} />
      )}
      <StyledDeleteIcon
        onClick={() => handleDelete({ id: itemId, deleteTodo })}
      />
    </IconContainer>
  );
}

const IconContainer = styled(Box)(() => ({
  display: "flex",
  gap: "0.5rem",
}));

const StyledDeleteIcon = styled(DeleteIcon)(() => ({
  cursor: "pointer",
  color: "white",
}));

const StyledUpdateIcon = styled(EditIcon)(() => ({
  cursor: "pointer",
  color: "white",
}));

const StyledDoneIcon = styled(DoneIcon)({
  color: "lightgreen",
  cursor: "pointer",
});

async function handleDelete({ id, deleteTodo }) {
  await deleteTodo({ id });
}

async function handleUpdate({
  id,
  titleInputValue,
  updateTodo,
  setIsUpdating,
}) {
  await updateTodo({
    id,
    title: titleInputValue,
  });

  setIsUpdating(false);
}
