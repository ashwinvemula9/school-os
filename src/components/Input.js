import { Box, FormLabel, Stack, TextField } from "@mui/material";
import React from "react";

export default function Input({ width = "48%", label, ...rest }) {
  return (
    <Stack spacing={1} width={width} mt="10px">
      <FormLabel>{label}</FormLabel>
      <TextField size="small" {...rest} />
    </Stack>
  );
}
