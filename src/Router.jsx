import {createBrowserRouter} from "react-router-dom";
import HomePage from "./HomePage.jsx";
import ProjectsPage from "./ProjectsPage.jsx";

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
      }
    ],
  }
]);

export default router;