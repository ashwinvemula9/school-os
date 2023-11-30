import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Button, Stack } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import {
  BE_ENDPOINT,
  FACILITY,
  PARENT,
  SYS_ADMIN,
  TEACHER,
  UNDER_USERS,
} from "../constants";
import axios from "axios";

export default function Dashboard() {
  let { search } = useLocation();
  const params = new URLSearchParams(search);
  const enrollFor = params.get("enroll");
  const userId = params.get("id");
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const dummy = [
    {
      name: "Ashwin Kumar",
      number: "11",
      cat: "admin",
      child: [
        {
          name: "Ashwin Kumar",
          number: "112",
          cat: "teacher",
          child: [
            {
              name: "Ashwin",
              number: "1112",
              cat: "parent",
            },
          ],
        },
      ],
    },
    {
      name: "Ashwin Kumar",
      number: "11",
      cat: "admin",
      child: [
        {
          name: "Ashwin Kumar",
          number: "112",
          cat: "teacher",
          child: [
            {
              name: "Ashwin",
              number: "1112",
              cat: "parent",
            },
          ],
        },
      ],
    },
  ];

  const getData = async () => {
    console.log(userId, enrollFor);
    const map = {
      [SYS_ADMIN]: `${BE_ENDPOINT}/api/alladmins/${userId}`,
      [FACILITY]: `${BE_ENDPOINT}/api/allteachers/${userId}`,
      [TEACHER]: `${BE_ENDPOINT}/api/allparents/${userId}`,
    };
    try {
      const res = await axios.get(map[enrollFor]);
      setData(res.data);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const getChildData = async (key, parentId) => {
    const map = {
      [SYS_ADMIN]: `${BE_ENDPOINT}/api/alladmins/${parentId}`,
      [FACILITY]: `${BE_ENDPOINT}/api/allteachers/${parentId}`,
      [TEACHER]: `${BE_ENDPOINT}/api/allparents/${parentId}`,
    };
    try {
      const res = await axios.get(map[key]);
      console.log(data, parentId);
      setData((prevData) =>
        prevData.map((itr) => {
          if (itr?._id === parentId) {
            return {
              ...itr,
              child: res.data,
            };
          }
          return itr;
        })
      );

      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const renderSubTree = (child) => {
    return (
      <Stack p={4} spacing={2}>
        {child.map((item) => (
          <div key={item.number}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel1bh-content`}
                id={`panel1bh-header`}
                // style={{ color: '#c32fa0' }}
              >
                <Stack spacing={2}>
                  <Typography
                    sx={{
                      color: "#c32fa0",
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    Name : {item.name ?? item?.first_name}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#c32fa0",
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    Who : {item.cat}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#c32fa0",
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    Email : {item.email}
                  </Typography>
                  {item?.age && (
                    <Typography
                      sx={{
                        color: "#c32fa0",
                        fontWeight: "bold",
                        fontSize: "20px",
                      }}
                    >
                      Age : {item?.age}
                    </Typography>
                  )}
                </Stack>
              </AccordionSummary>
              <AccordionDetails>
                {item.child && renderSubTree(item.child)}
              </AccordionDetails>
            </Accordion>
          </div>
        ))}
      </Stack>
    );
  };
  console.log({ data });
  const renderTree = () => {
    return (
      <Stack spacing={2} p={4}>
        {data?.map((item) => {
          return (
            <div key={item.number}>
              <Accordion
                onChange={(_, isExpanded) => {
                  if (isExpanded) {
                    const map = {
                      [SYS_ADMIN]: FACILITY,
                      [FACILITY]: TEACHER,
                    };
                    getChildData(map[enrollFor], item._id);
                  }
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                  style={{ backgroundColor: "skyblue" }}
                >
                  <Typography sx={{ width: "33%" }}>
                    {item.name ?? item?.first_name}
                  </Typography>
                  <Typography
                    sx={{
                      color: "text.secondary",
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    {item.cat?.toUpperCase()}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {item.child && renderSubTree(item.child)}
                </AccordionDetails>
              </Accordion>
            </div>
          );
        })}
      </Stack>
    );
  };

  return (
    <div>
      <nav className="nav">
        <div>
          <span className="logo">Logo</span>
        </div>
        <Box width="10%">
          <Button onClick={() => navigate("/")} color="secondary">
            Home
          </Button>
        </Box>
      </nav>
      {renderTree()}

      {!data.length && (
        <Stack justifyContent="center" m={4} width="100%" direction="row">
          <Typography>No {UNDER_USERS[enrollFor]} mapped for you</Typography>
        </Stack>
      )}
    </div>
  );
}
