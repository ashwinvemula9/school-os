import { Button, Card, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Input from "../components/Input";
import { BE_ENDPOINT, LOGIN_FIELDS } from "../constants";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  let { search } = useLocation();
  const params = new URLSearchParams(search);
  const cat = params.get("as");

  const navigate = useNavigate();

  const [loginValues, setLoginValues] = useState({});

  const handleOnchange = ({ target }) => {
    const { name, value } = target;

    setLoginValues({
      ...loginValues,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (LOGIN_FIELDS.length !== Object.keys(loginValues).length) {
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
      return;
    }
    abc();
  };

  const abc = async () => {
    try {
      const res = await axios.post(`${BE_ENDPOINT}/api/login`, {
        email: loginValues.email,
        cat: cat,
      });
      localStorage.setItem("authenticated", true);
      localStorage.setItem("userdata", res.data);
      navigate(`/dashboard?id=${res.data?._id}&enroll=${cat}`);
      toast.success("Loggedin successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (er) {
      toast.error("User not found", {
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
          Login as a{" "}
          <Typography variant="h3" color="#c32fa0">
            {cat?.toUpperCase()}
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
            variant="outlined"
            onClick={() => navigate("/")}
            sx={{
              borderColor: "#c32fa0",
              color: "#c32fa0",
            }}
          >
            Home
          </Button>
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
