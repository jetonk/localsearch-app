import React from "react";
import ReactDOM from "react-dom/client";
import Places from "./pages/places";
import PlaceDetails from "./pages/place-details";
import ErrorPage from "./pages/error-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Places />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/places",
    element: <Places />,
  },
  {
    path: "/places/:placeId",
    element: <PlaceDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
