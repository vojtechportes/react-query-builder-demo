import React from "react";
import { Builder } from "@vojtechportes/react-query-builder";
import "./App.css";
import { fields, components as muiComponents } from "./query-builder-config";

import { defaultComponents, colors } from "@vojtechportes/react-query-builder";
import styled from "styled-components";

const Link = styled.span<{ active: boolean }>`
  font-weight: bold;
  cursor: pointer;
  padding: 1rem;
  border-bottom: 1px solid ${({ active }) => active ? colors.primary : colors.darker};
  color: ${({ active }) => active ? colors.primary : colors.dark};

  :hover {
    border-bottom: 1px solid ${colors.primary};
  }
`;

const App: React.FC = () => {
  const initialData: any[] = [];
  const [output, setOutput] = React.useState(initialData);
  const [components, setComponents] = React.useState(defaultComponents);
  const [activeSkin, setActiveSkin] = React.useState("defaultComponents");

  const handleLinkClick = (value: string) => {
    switch (value) {
      case "defaultComponents":
        setComponents(defaultComponents);
        setActiveSkin("defaultComponents");
        break;
      case "muiComponents":
        setComponents(muiComponents);
        setActiveSkin("muiComponents");
        break;
    }
  };

  return (
    <>
      <p>
        <Link
          active={activeSkin === "defaultComponents"}
          onClick={() => handleLinkClick("defaultComponents")}
        >
          Use Query Builder default components
        </Link>
        <Link
          active={activeSkin === "muiComponents"}
          onClick={() => handleLinkClick("muiComponents")}
        >
          Use Material UI components
        </Link>
      </p>
      <br />
      <Builder
        fields={fields}
        data={initialData}
        components={components}
        onChange={data => setOutput(data)}
      />
      <br />
      <h3>Output</h3>
      <pre className="code">{JSON.stringify(output, null, 4)}</pre>
    </>
  );
};

export default App;
