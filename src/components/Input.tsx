import React from "react";
import { InputProps } from "@vojtechportes/react-query-builder";
import { Input as InputBase } from "@material-ui/core";
import styled from "styled-components";

const Container = styled.div`
  input {
    width: auto;
  }
`;

export const Input: React.FC<InputProps> = ({ onChange, value, type }) => {
  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    onChange(event.target.value);
  };

  return (
    <Container>
      <InputBase onChange={handleChange} value={value} type={type} />
    </Container>
  );
};
