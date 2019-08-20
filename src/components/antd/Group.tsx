import React from "react";
import ButtonGroup from "antd/es/button/button-group";
import { GroupProps } from "@vojtechportes/react-query-builder";
import styled from "styled-components";
import { Paper } from "./Paper";

const Container = styled(Paper)`
  margin: 0.5rem 0;

  && {
    background-color: rgba(0, 0, 0, 0.03);
  }
`;

const Content = styled.div`
  padding: 1rem;
`;

const Header = styled.div`
  padding: 1rem 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Right = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: min-content;
  grid-auto-rows: min-content;
  align-items: center;
  justify-content: end;
  grid-gap: 0.5rem;
`;

export const Group: React.FC<GroupProps> = ({
  children,
  controlsLeft,
  controlsRight
}) => (
  <Container>
    <Header>
      <div>
        <ButtonGroup>{controlsLeft}</ButtonGroup>
      </div>
      <Right>{controlsRight}</Right>
    </Header>
    <Content>{children}</Content>
  </Container>
);
