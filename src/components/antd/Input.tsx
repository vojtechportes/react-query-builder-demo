import React from "react";
import { InputProps } from "@vojtechportes/react-query-builder";
import { Input as InputBase, DatePicker } from "antd";

export const Input: React.FC<InputProps> = ({ onChange, value, type }) => {
  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    onChange(event.target.value);
  };

  const handleChangeDate = (date: any) => {
    onChange(date)
  }

  if (type === "date") {
    return (
      <DatePicker onChange={handleChangeDate} />
    )
  } else {
    return (
      <InputBase
        style={{ width: 160 }}
        onChange={handleChange}
        value={value}
        type={type}
      />
    );    
  }
};
