import React from "react";
import { Button } from "@material-ui/core";
import { GroupHeaderOptionProps } from "@vojtechportes/react-query-builder";

export const GroupHeaderOption: React.FC<GroupHeaderOptionProps> = ({
  children,
  isSelected,
  onClick,
  value
}) => {
  const handleClick = () => {
    onClick(value);
  };

  return (
    <Button
      variant={isSelected ? "contained" : "outlined"}
      color="primary"
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};
