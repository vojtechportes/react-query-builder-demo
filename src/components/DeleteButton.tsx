import React from "react";
import { Button as ButtonBase } from "@material-ui/core";
import { ButtonProps } from "@vojtechportes/react-query-builder";
import styled from "styled-components";

const StyledButton = styled(ButtonBase)`
  white-space: nowrap;
`;

export const DeleteButton: React.FC<ButtonProps> = ({ label, onClick }) => (
  <StyledButton onClick={onClick} color="secondary" variant="contained">
    {label}
  </StyledButton>
);
