import { Home, Login, HowToReg } from "@mui/icons-material";
import { JSX } from "react";

const fetchIcon = (href: string): JSX.Element => {
  switch (href) {
    case "/":
      return <Home />;
    case "/login":
      return <Login />;
    case "/register":
      return <HowToReg />;
    default:
      return <h1>No Icon</h1>;
  }
};

export default fetchIcon;
