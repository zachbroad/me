import {createBrowserRouter} from "react-router-dom";
import HomePage from "./HomePage.jsx";
import ProjectsPage from "./ProjectsPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
    children: [
      {
        path: "/projects",
        element: <ProjectsPage/>,
      }
    ],
  }
]);

export default router;