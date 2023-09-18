import { Box } from "@mui/material";
import styled from "@emotion/styled";
import { useState } from "react";
import TodoItemIcons from "./TodoItemIcons";
import DynamicTitleInput from "./DynamicTitleInput";

export default function TodoItem({ todo, idx, shouldDisplayIcons = true }) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [titleInputValue, setTitleInputValue] = useState(todo.title);
  const shouldDisplayTopBorder = idx === 0;

  return (
    <ItemContainer
      key={todo.id}
      shouldDisplayTopBorder={shouldDisplayTopBorder}
    >
      <DynamicTitleInput
        isUpdating={isUpdating}
        titleInputValue={titleInputValue}
        setTitleInputValue={setTitleInputValue}
      />
      {shouldDisplayIcons && (
        <TodoItemIcons
          itemId={todo.id}
          titleInputValue={titleInputValue}
          setIsUpdating={setIsUpdating}
          isUpdating={isUpdating}
        />
      )}
    </ItemContainer>
  );
}

const ItemContainer = styled(Box)(({ shouldDisplayTopBorder }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "1rem",
  borderTop: shouldDisplayTopBorder ? "1px solid white" : "none",
  borderBottom: "1px solid white",
  marginLeft: "0.5rem",
  marginRight: "0.5rem",
}));
