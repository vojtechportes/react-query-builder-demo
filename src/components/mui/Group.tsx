import React from "react";
import Paper from "@material-ui/core/Paper";
import { ButtonGroup } from "@material-ui/core";
import { GroupProps } from "@vojtechportes/react-query-builder";
import styled from "styled-components";

const Container = styled(Paper)<any>`
  margin: 0.5rem 0;

  && {
    background-color: rgba(0,0,0, 0.03);
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

const Left = styled.div`
  button:nth-child(2) {
    border-radius: 0;
  }

  button:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  button:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
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
      <Left>
        {controlsLeft}
      </Left>
      <Right>{controlsRight}</Right>
    </Header>
    <Content>{children}</Content>
  </Container>
);
