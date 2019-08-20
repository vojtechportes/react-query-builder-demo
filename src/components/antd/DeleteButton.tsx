import React from "react";
import { Button as ButtonBase } from "antd";
import { ButtonProps } from "@vojtechportes/react-query-builder";
import styled from "styled-components";

const StyledButton = styled(ButtonBase)`
  white-space: nowrap;
`;

export const DeleteButton: React.FC<ButtonProps> = ({ label, onClick }) => (
  <StyledButton onClick={onClick} type="danger" ghost>
    {label}
  </StyledButton>
);
