import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { FACILITY, PARENT, TEACHER } from "../constants";

export default function LoginCta() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (src) => {
    navigate(`/login?as=${src}`);
  };

  return (
    <div>
      <Button
        aria-controls={open ? "boq-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        disableElevation
        onClick={handleClick}
        color="secondary"
      >
        Login
      </Button>
      <Menu
        id="boq-menu"
        MenuListProps={{
          "aria-labelledby": "boq-menu",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem disableRipple onClick={() => handleNavigate(FACILITY)}>
          Login as Admin
        </MenuItem>
        <MenuItem disableRipple onClick={() => handleNavigate(TEACHER)}>
          Login as Teacher
        </MenuItem>
        <MenuItem disableRipple onClick={() => handleNavigate(PARENT)}>
          Login as Parent
        </MenuItem>
      </Menu>
    </div>
  );
}
