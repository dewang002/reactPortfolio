import { createBrowserRouter } from "react-router-dom";
import About from "../../Components/About";
import Contact from "../../Components/Contact";
import Work from "../../Components/Work";
import Skill from "../../Components/Skill";
import App from "../../App";
import Home from "../../Components/Home"
export const Routing = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/work",
        element: <Work />,
      },
      {
        path: "/skill",
        element: <Skill />,
      },
    ],
  },
]);
