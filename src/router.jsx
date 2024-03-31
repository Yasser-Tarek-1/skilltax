import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Packages from "./pages/Packages";
import Privacies from "./pages/Privacies";
import Faqs from "./pages/Faqs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/packages",
        element: <Packages />,
      },
      {
        path: "/privacies",
        element: <Privacies />,
      },
      {
        path: "/faqs",
        element: <Faqs />,
      },
    ],
  },
]);
