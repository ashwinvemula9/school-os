import { Button, Card, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Input from "../components/Input";
import {
  BE_ENDPOINT,
  FACILITY,
  INPUT_FIELDS,
  PARENT,
  TEACHER,
} from "../constants";
import { toast } from "react-toastify";
import axios from "axios";
import SelectLabel from "../components/selectLabel";

export default function Registration() {
  let { search } = useLocation();
  const params = new URLSearchParams(search);
  const enrollFor = params.get("enroll");

  const navigate = useNavigate();

  const [inputValues, setInputValues] = useState({});
  const [parentOptions, setParentOptions] = useState([]);

  const handleOnchange = ({ target }) => {
    const { name, value } = target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    if (INPUT_FIELDS[enrollFor].length !== Object.keys(inputValues).length) {
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

    try {
      const { parent, ...rest } = inputValues;
      const map = {
        [TEACHER]: "adminId",
        [PARENT]: "teacherId",
      };
      const payload = {
        ...rest,
        ...((enrollFor === TEACHER || enrollFor === PARENT) && {
          [map[enrollFor]]: parentOptions?.find((itr) => itr?.name === parent)
            ?._id,
        }),
        //* keeping static system admin while creating admins
        ...(enrollFor === FACILITY && { sys_id: "6568893909292e09849b2c0f" }),
        cat: enrollFor,
      };
      const res = await axios.post(
        `${BE_ENDPOINT}/api/${enrollFor}/createuser`,
        payload
      );
      toast.success(`${enrollFor?.toUpperCase()} created succesfully!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      navigate(`/dashboard?id=${res.data.insertedId}&enroll=${enrollFor}`);
    } catch (err) {
      console.log(err);
    }
  };

  const getCreatedUsers = async () => {
    const map = {
      [TEACHER]: "admins",
      [PARENT]: "teachers",
    };
    try {
      const res = await axios.get(
        `${BE_ENDPOINT}/api/entries/${map[enrollFor]}`
      );

      console.log(res.data);
      setParentOptions(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCreatedUsers();
  }, []);

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
          {INPUT_FIELDS[enrollFor]?.map((itr) =>
            itr?.isDropDown ? (
              <SelectLabel
                options={
                  itr?.options ??
                  parentOptions?.map(
                    (itr) => itr?.name ?? `${itr?.first_name} ${itr?.last_name}`
                  )
                }
                name={itr.key}
                label={`Select ${itr?.label}`}
                onChange={handleOnchange}
              />
            ) : (
              <Input
                label={itr?.label}
                name={itr?.key}
                onChange={handleOnchange}
              />
            )
          )}
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
