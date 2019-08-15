import React from "react";
import { Builder, BuilderFieldProps } from "@vojtechportes/react-query-builder";
import "./App.css";

const fields: BuilderFieldProps[] = [
  {
    field: "ID",
    label: "ID",
    type: "NUMBER",
    operators: [
      "BETWEEN",
      "NOT_BETWEEN",
      "SMALLER",
      "LARGER",
      "SMALLER_EQUAL",
      "LARGER_EQUAL"
    ]
  },
  {
    field: "NAME",
    label: "Name",
    type: "TEXT",
    operators: ["EQUAL", "NOT_EQUAL"]
  },
  {
    field: "AUTHOR",
    label: "Author",
    type: "MULTI_LIST",
    operators: ["ANY_IN", "ALL_IN", "NOT_IN"],
    value: [
      {
        label: "Robert Ferguson",
        value: "1"
      },
      {
        label: "Theresa Hamilton",
        value: "2"
      },
      {
        label: "David Andrews",
        value: "3"
      },
      {
        label: "Simon Reid",
        value: "4"
      },
      {
        label: "Jane Lowe",
        value: "5"
      }
    ]
  },
  {
    field: "GENRE",
    label: "Genre",
    type: "MULTI_LIST",
    operators: ["ANY_IN", "ALL_IN", "NOT_IN"],
    value: [
      { label: "Fiction", value: "FICTION" },
      { label: "Crime", value: "CRIME" },
      { label: "Poetry", value: "POETRY" }
    ]
  },
  {
    field: "YEAR_PUBLISHED",
    label: "Year Published",
    type: "NUMBER",
    operators: [
      "EQUAL",
      "NOT_EQUAL",
      "BETWEEN",
      "NOT_BETWEEN",
      "LARGER",
      "SMALLER"
    ]
  }
];

const App: React.FC = () => {
  const initialData: any[] = [];
  const [output, setOutput] = React.useState(initialData);

  return (
    <>
      <Builder
        fields={fields}
        data={initialData}
        onChange={data => setOutput(data)}
      />
      <br />
      <h3>Output</h3>
      <pre className="code">{JSON.stringify(output, null, 4)}</pre>
    </>
  );
};

export default App;
