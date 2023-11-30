export const TEACHER = "teacher";

export const FACILITY = "admin";

export const PARENT = "parent";

export const SYS_ADMIN = "system admin";

export const FACILITY_REG = [
  {
    label: "Name",
    key: "name",
  },
  {
    label: "Email",
    key: "email",
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
    label: "Email",
    key: "email",
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
  {
    label: "Admin",
    key: "parent",
    isDropDown: true,
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
    label: "Email",
    key: "email",
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
  {
    label: "Teacher",
    key: "dropdown",
    isDropDown: true,
  },
  {
    label: "Age",
    key: "age",
    isDropDown: true,
    options: ["infants", "Toddler", "Twaddler", "3 Years Old", "4 Years Old"],
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

export const BE_ENDPOINT = "http://localhost:7000";

export const UNDER_USERS = {
  [SYS_ADMIN]: "Admin",
  [FACILITY]: "Teacher",
  [TEACHER]: "Parent",
};
