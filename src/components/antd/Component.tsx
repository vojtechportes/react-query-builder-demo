import React from "react";
import { Paper } from "./Paper";
import { ComponentProps } from "@vojtechportes/react-query-builder";
import styled from "styled-components";

const Container = styled(Paper)`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  margin: 0.5rem 0;
`;

const Content = styled.div`
  padding: 1rem;
  display: grid;
  grid-auto-columns: max-content;
  grid-auto-flow: column;
  grid-gap: 0.5rem;
`;

const Header = styled.div`
  padding: 1rem;
  display: grid;
  grid-auto-columns: max-content;
  grid-auto-flow: column;
  justify-content: flex-end;
`;

export const Component: React.FC<ComponentProps> = ({ children, controls }) => (
  <Container>
    <Content>{children}</Content>
    <Header>{controls}</Header>
  </Container>
);
