import { MenuItem, Select, Stack } from "@mui/material";
import React from "react";

const SelectLabel = ({ label, options, sx, wrapperStyle, ...rest }) => {
  return (
    <Stack spacing={1} width="48%" mt={2}>
      {label && <label>{label}</label>}
      <Select
        sx={{
          paddingLeft: 0,
          width: "100%",
          height: "40px",
        }}
        displayEmpty
        {...rest}
      >
        {options?.map((itr) => (
          <MenuItem key={itr} value={itr}>
            {itr}
          </MenuItem>
        ))}
      </Select>
    </Stack>
  );
};

export default SelectLabel;
