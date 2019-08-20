import { Select as SelectBase, MenuItem } from "@material-ui/core";
import { SelectProps } from "@vojtechportes/react-query-builder";
import React from "react";

export const Select: React.FC<SelectProps> = ({
  onChange,
  selectedValue,
  values
}) => {
  const handleChange = (
    event: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>
  ) => {
    onChange(event.target.value);
  };

  return (
    <SelectBase value={selectedValue} onChange={handleChange} displayEmpty>
      <MenuItem value="" disabled>
        Select your option
      </MenuItem>
      {values.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </SelectBase>
  );
};
