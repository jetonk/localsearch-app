import Places from "pages/Places/index";
import PlaceDetails from "pages/PlaceDetails/index";
import ErrorPage from "pages/ErrorPage/index";
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
