import {
  BuilderFieldProps,
  BuilderComponentsProps
} from "@vojtechportes/react-query-builder";
import { Button } from "./components/Button";
import { DeleteButton } from "./components/DeleteButton";
import { Component } from "./components/Component";
import { Input } from "./components/Input";
import { Select } from "./components/Select";
import { SelectMulti } from "./components/SelectMulti";
import { Group } from "./components/Group";
import { GroupHeaderOption } from "./components/GroupHeaderOption";

export const fields: BuilderFieldProps[] = [
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
    type: "DATE",
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

export const components: BuilderComponentsProps = {
  Add: Button,
  Remove: DeleteButton,
  Component,
  Group,
  GroupHeaderOption,
  form: {
    Input,
    Select,
    SelectMulti
  }
};
