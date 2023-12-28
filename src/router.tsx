import App from "./app";
import Error from "./page/error";
import AboutMe from "./page/about-me";
import Portfolio from "./page/portfolio";
import Contact from "./page/contact";
import Resume from "./page/resume";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <AboutMe />,
        },
        {
          path: "/portfolio",
          element: <Portfolio />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/resume",
          element: <Resume />,
        },
      ],
    }
]);

export default router;
