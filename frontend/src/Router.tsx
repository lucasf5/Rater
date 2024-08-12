import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import MovieDetails from "./pages/Movie/[id]";

const route = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/movie/:id",
    element: (
      <Layout>
        <MovieDetails />
      </Layout>
    ),
  },
]);

const Router = () => {
  return <RouterProvider router={route} />;
};

export default Router;
