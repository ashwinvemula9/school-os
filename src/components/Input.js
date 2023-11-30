import { Box, FormLabel, Stack, TextField } from "@mui/material";
import React from "react";

export default function Input({ width = "48%", label, ...rest }) {
  const type = rest.name === "password" ? "password" : "text";
  return (
    <Stack spacing={1} width={width} mt="10px">
      <FormLabel>{label}</FormLabel>
      <TextField type={type} size="small" {...rest} />
    </Stack>
  );
}
