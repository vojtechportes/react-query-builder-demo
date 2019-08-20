import React from "react";
import { Builder } from "@vojtechportes/react-query-builder";
import { fields, components as customComponents } from "./query-builder-config";

import { defaultComponents, colors } from "@vojtechportes/react-query-builder";
import styled from "styled-components";
import Helmet from "react-helmet";

const Link = styled.span<{ active: boolean }>`
  font-weight: bold;
  cursor: pointer;
  padding: 1rem;
  border-bottom: 1px solid
    ${({ active }) => (active ? colors.primary : colors.darker)};
  color: ${({ active }) => (active ? colors.primary : colors.dark)};

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
        setComponents(customComponents.mui);
        setActiveSkin("muiComponents");
        break;
      case "antdComponents":
        setComponents(customComponents.antd);
        setActiveSkin("antdComponents");
        break;
    }
  };

  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="/minimal.css" />
        {activeSkin === "antdComponents" ? (
          <link rel="stylesheet" href="/antd.css" />
        ) : (
          <link rel="stylesheet" href="/default.css" />
        )}
      </Helmet>
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
        <Link
          active={activeSkin === "antdComponents"}
          onClick={() => handleLinkClick("antdComponents")}
        >
          Use ANTD components
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
