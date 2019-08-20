import { Select as SelectBase } from "antd";
import { SelectProps } from "@vojtechportes/react-query-builder";
import React from "react";

const { Option } = SelectBase;

export const Select: React.FC<SelectProps> = ({
  onChange,
  selectedValue,
  values
}) => {
  const handleChange = (value: string) => {
    onChange(value);
  };

  return (
    <SelectBase value={String(selectedValue)} style={{ width: 160 }} onChange={handleChange}>
      <Option value="" disabled>
        Select your option
      </Option>
      {values.map(option => (
        <Option key={option.value} value={option.value}>
          {option.label}
        </Option>
      ))}
    </SelectBase>
  );
};
