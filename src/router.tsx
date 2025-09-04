import { createBrowserRouter } from "react-router-dom";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound.tsx";
import Root from "./components/Root.tsx";
import Home from "./pages/Home";
import Hi from "./pages/Hi.tsx";
import Education from "./pages/Education.tsx";
import Experience from "./pages/Experience.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "projects", element: <Projects /> },
      { path: "hi", element: <Hi /> },
      { path: "education", element: <Education /> },
      { path: "experience", element: <Experience /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
