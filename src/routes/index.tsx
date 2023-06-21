import { createBrowserRouter } from "react-router-dom";
import Admin from "../pages/Admin";
import AdminLogin from "../pages/AdminLogin";
import CreateCard from "../pages/CreateCard";
import Home from "../pages/Home";
import ListCard from "../pages/ListCard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/create-card",
    element: <CreateCard />,
  },
  { path: "/sharing/card/:id", element: <ListCard /> },
  { path: "/admin-login", element: <AdminLogin /> },
  { path: "/admin", element: <Admin /> },
]);
