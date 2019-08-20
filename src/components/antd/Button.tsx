import React from "react";
import { Button as ButtonBase } from "antd";
import { ButtonProps } from "@vojtechportes/react-query-builder";

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
  <ButtonBase onClick={onClick} type="primary" ghost>
    {label}
  </ButtonBase>
);
