import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";

const route = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
]);

const Router = () => {
  return <RouterProvider router={route} />;
};

export default Router;
