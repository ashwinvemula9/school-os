import { Button, Card, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Input from "../components/Input";
import { INPUT_FIELDS } from "../constants";
import { toast } from "react-toastify";

export default function Registration() {
  let { search } = useLocation();
  const params = new URLSearchParams(search);
  const enrollFor = params.get("enroll");

  const navigate = useNavigate();

  const [inputValues, setInputValues] = useState();

  const handleOnchange = ({ target }) => {
    const { name, value } = target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (INPUT_FIELDS[enrollFor].length !== inputValues.length) {
      toast.error("All the fields are required in order to save.", {
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
          Registering as a{" "}
          <Typography variant="h3" color="#c32fa0">
            {enrollFor.toUpperCase()}
          </Typography>
        </Typography>
        <Stack direction="row" justifyContent="space-between" flexWrap="wrap">
          {INPUT_FIELDS[enrollFor]?.map((itr) => (
            <Input
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
            Save
          </Button>
          <Button
            variant="outlined"
            onClick={() => navigate(-1)}
            sx={{
              borderColor: "#c32fa0",
              color: "#c32fa0",
            }}
          >
            Back
          </Button>
        </Stack>
      </Card>
    </div>
  );
}
