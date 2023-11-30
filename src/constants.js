export const TEACHER = "teacher";

export const FACILITY = "admin";

export const PARENT = "parent";

export const FACILITY_REG = [
  {
    label: "Name",
    key: "name",
  },
  {
    label: "License No",
    key: "license_no",
  },
  {
    label: "Mobile No",
    key: "mobile_no",
  },
];

export const TEACHER_REG = [
  {
    label: "First Name",
    key: "first_name",
  },
  {
    label: "Last Name",
    key: "last_name",
  },
  {
    label: "Mobile No",
    key: "mobile_no",
  },
  {
    label: "Experince",
    key: "experince",
  },
  {
    label: "DOB",
    key: "dob",
  },
  {
    label: "Salary",
    key: "salary",
  },
  {
    label: "Address",
    key: "address",
  },
];

export const PARENT_REG = [
  {
    label: "First Name",
    key: "first_name",
  },
  {
    label: "Last Name",
    key: "last_name",
  },
  {
    label: "Mobile No",
    key: "mobile_no",
  },
  {
    label: "Allergies",
    key: "allergies",
  },
  {
    label: "DOB",
    key: "dob",
  },
  {
    label: "Address",
    key: "address",
  },
];

export const ADMIN_DROPDOWN = [FACILITY, TEACHER, PARENT];

export const FACILITY_DROPDOWN = [TEACHER, PARENT];

export const TEACHER_DROPDOWN = [PARENT];

export const INPUT_FIELDS = {
  [TEACHER]: TEACHER_REG,
  [FACILITY]: FACILITY_REG,
  [PARENT]: PARENT_REG,
};

export const LOGIN_FIELDS = [
  {
    label: "Email",
    key: "email",
  },
  {
    label: "Password",
    key: "password",
  },
];
