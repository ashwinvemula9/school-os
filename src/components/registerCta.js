import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { FACILITY, PARENT, TEACHER } from "../constants";

export default function RegisterCta() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (src) => {
    navigate(`/registration?enroll=${src}`);
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
        Register
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
          Register as Admin
        </MenuItem>
        <MenuItem disableRipple onClick={() => handleNavigate(TEACHER)}>
          Register as Teacher
        </MenuItem>
        <MenuItem disableRipple onClick={() => handleNavigate(PARENT)}>
          Register as Parent
        </MenuItem>
      </Menu>
    </div>
  );
}
