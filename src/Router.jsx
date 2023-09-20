import {createBrowserRouter} from "react-router-dom";
import HomePage from "./HomePage.jsx";
import ProjectsPage from "./ProjectsPage.jsx";
import ContactPage from "./ContactPage.jsx";

const router = createBrowserRouter([
  {
    children: [
      {
        path: "/",
        element: <HomePage/>,
      },
      {
        path: "/projects/",
        element: <ProjectsPage/>,
      },
      {
        path: "/contact/",
        element: <ContactPage/>,
      }
    ],
  }
]);

export default router;