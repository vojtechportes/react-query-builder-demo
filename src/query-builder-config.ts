import {
  BuilderFieldProps,
  BuilderComponentsProps
} from "@vojtechportes/react-query-builder";

import { Button as ButtonMui } from "./components/mui/Button";
import { DeleteButton as DeleteButtonMui } from "./components/mui/DeleteButton";
import { Component as ComponentMui } from "./components/mui/Component";
import { Input as InputMui } from "./components/mui/Input";
import { Select as SelectMui } from "./components/mui/Select";
import { SelectMulti as SelectMultiMui } from "./components/mui/SelectMulti";
import { Group as GroupMui } from "./components/mui/Group";
import { GroupHeaderOption as GroupHeaderOptionMui } from "./components/mui/GroupHeaderOption";

import { Button as ButtonAntd } from "./components/antd/Button";
import { DeleteButton as DeleteButtonAntd } from "./components/antd/DeleteButton";
import { Group as GroupAntd } from "./components/antd/Group"

import { Component as ComponentAntd } from "./components/antd/Component"

import { Input as InputAntd } from "./components/antd/Input";
import { GroupHeaderOption as GroupHeaderOptionAntd } from "./components/antd/GroupHeaderOption";
import { Select as SelectAntd } from "./components/antd/Select"
import { SelectMulti as SelectMultiAntd } from "./components/antd/SelectMulti"

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

interface ComponentsProps {
  mui: BuilderComponentsProps,
  antd: BuilderComponentsProps
}

export const components: ComponentsProps = {
  mui: {
    Add: ButtonMui,
    Remove: DeleteButtonMui,
    Component: ComponentMui,
    Group: GroupMui,
    GroupHeaderOption: GroupHeaderOptionMui,
    form: {
      Input: InputMui,
      Select: SelectMui,
      SelectMulti: SelectMultiMui
    }
  },
  antd: {
    Add: ButtonAntd,
    Remove: DeleteButtonAntd,
    Component: ComponentAntd,
    Group: GroupAntd,
    GroupHeaderOption: GroupHeaderOptionAntd,
    form: {
      Input: InputAntd,
      Select: SelectAntd,
      SelectMulti: SelectMultiAntd
    }
  }
};
