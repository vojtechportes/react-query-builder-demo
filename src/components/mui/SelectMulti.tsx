import {
  Select,
  MenuItem,
  ListItemText,
  Checkbox,
  Input
} from "@material-ui/core";
import { SelectMultiProps } from "@vojtechportes/react-query-builder";
import React from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

export const SelectMulti: React.FC<SelectMultiProps> = ({
  onChange,
  onDelete,
  selectedValue,
  values
}) => {
  return (
    <Select
      multiple
      value={selectedValue}
      input={<Input id="select-multiple-checkbox" />}
      displayEmpty
      renderValue={(selected: any) => {
        if (selected.length > 0) {
          const items: any[] = [];

          selected.forEach((item: any) => {
            const value: any = values.find(value => item === value.value);
            items.push(value.label);
          });

          return items.join(", ");
        }

        return 'Select your option';
      }}
      MenuProps={MenuProps}
    >
      <MenuItem value="" disabled>
        Select your option
      </MenuItem>
      {values.map(({ value, label }) => {
        const isChecked =
          selectedValue.filter(item => item === value).length !== 0;

        return (
          <MenuItem key={value} value={value}>
            <Checkbox
              checked={isChecked}
              onClick={() => {
                if (isChecked) {
                  onDelete(value);
                } else {
                  onChange(value);
                }
              }}
            />
            <ListItemText primary={label} />
          </MenuItem>
        );
      })}
    </Select>
  );
};
