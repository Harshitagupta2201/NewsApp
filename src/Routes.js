import App from "./App";
import Home from "./Pages/Home/Home";
import Signup from "./Pages/Signup/Signup";

export const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "home",
    element: <Home />,
  },
];
