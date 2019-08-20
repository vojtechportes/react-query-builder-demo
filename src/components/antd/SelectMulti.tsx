import { Select } from "antd";
import { SelectMultiProps } from "@vojtechportes/react-query-builder";
import React from "react";

const { Option } = Select;

export const SelectMulti: React.FC<SelectMultiProps> = ({
  onChange,
  onDelete,
  selectedValue,
  values
}) => {
  const handleChange = (value: any) => {
    onChange(String(value))
  }

  const handleDelete = (value: any) => {
    onDelete(String(value))
  }

  return (
    <Select
      style={{ minWidth: 160 }}
      mode="multiple"
      placeholder="Select your option"
      onSelect={handleChange}
      onDeselect={handleDelete}
    >
      <Option value="" disabled>
        Select your option
      </Option>
      {values.map(({ value, label }) => {
        return (
          <Option key={value} value={value}>
            {label}
          </Option>
        );
      })}
    </Select>
  );
};
