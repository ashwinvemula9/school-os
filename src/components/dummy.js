import { keys } from "@mui/system";
import { FACILITY, TEACHER } from "../constants";

const a = [
  {
    name: "jksdjk",
    number: "7299",
    cat: "admin",
    child: [
      {
        name: "dvsvd",
        mbl: "cdds",
        cat: "teacher",
        child: [
          {
            name: "jvbdks",
            mbl: "dsv",
            cat: "parent",
          },
        ],
      },
    ],
  },
];

const keysToshow = {
  [TEACHER]: ["salary", "name", "num"],
  [FACILITY]: ["name", "lic"],
};

const abc = () => {
  [keysToshow["admin"]].map((itr) => <div>{itr}</div>);
};
