import { Button, Card, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Input from "../components/Input";
import { LOGIN_FIELDS } from "../constants";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";

function Login() {
  let { search } = useLocation();
  const params = new URLSearchParams(search);
  const as = params.get("as");

  const [loginValues, setLoginValues] = useState();

  const handleOnchange = ({ target }) => {
    const { key, value } = target;
    setLoginValues({
      [key]: value,
    });
  };

  const handleSubmit = () => {
    if (LOGIN_FIELDS.length !== loginValues.length) {
      toast.error("All the fields are required in order to Login.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <div className="registration-root">
      <Card
        sx={{
          width: "50%",
          padding: "50px",
          marginTop: "50px",
        }}
      >
        <Typography variant="h5" mb="30px">
          Enrolling as a{" "}
          <Typography variant="h3" color="#c32fa0">
            {as.toUpperCase()}
          </Typography>
        </Typography>
        <Stack mt={3} spacing={4} justifyContent="space-between">
          {LOGIN_FIELDS?.map((itr) => (
            <Input
              width="100%"
              label={itr?.label}
              name={itr?.key}
              onChange={handleOnchange}
            />
          ))}
        </Stack>
        <Stack direction="row" mt="20px" spacing={2} justifyContent="flex-end">
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              backgroundColor: "#c32fa0",
            }}
          >
            Login
          </Button>
        </Stack>
      </Card>
    </div>
  );
}

export default Login;
