import { Home, Login, HowToReg } from "@mui/icons-material";

const navItems = [
  {
    id: 1,
    label: "Home",
    href: "/",
    icon: <Home />,
  },
  {
    id: 2,
    label: "Login",
    href: "/login",
    icon: <Login />,
  },
  {
    id: 3,
    label: "Register",
    href: "/register",
    icon: <HowToReg />,
  },
];

export default navItems;
