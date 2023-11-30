import { Dropdown } from "@mui/base";
import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";

function AdminManage() {
  return (
    <div>
      <Typography variant="h6" color="#c32fa0">
        Assigned Children
      </Typography>
      <Stack>
        <Box>
          <Typography>name</Typography>
          <Typography>roll n0</Typography>
        </Box>
      </Stack>
    </div>
  );
}

export default AdminManage;
