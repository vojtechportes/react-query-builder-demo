import React from "react";
import { Button } from "antd";
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
      type={isSelected ? "primary" : undefined}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};
