import styled from "@emotion/styled";
import { Input, Typography } from "@mui/material";

export default function DynamicTitleInput({
  isUpdating,
  titleInputValue,
  setTitleInputValue,
}) {
  return (
    <>
      {isUpdating ? (
        <StyledTitleInput
          name="title"
          id="update-title-input"
          required
          disableUnderline
          value={titleInputValue}
          onChange={(e) => setTitleInputValue(e.target.value)}
        />
      ) : (
        <ItemTitle>{titleInputValue}</ItemTitle>
      )}
    </>
  );
}

const ItemTitle = styled(Typography)(() => ({
  marginTop: "1rem",
  marginBottom: "1rem",
  color: "white",
}));

const StyledTitleInput = styled(Input)({
  color: "white",
  marginTop: "1rem",
  marginBottom: "1rem",
  width: "20rem",
});
