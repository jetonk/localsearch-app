import Places from "../pages/Places";
import PlaceDetails from "../pages/PlaceDetails";
import ErrorPage from "../pages/ErrorPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
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
