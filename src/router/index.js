import Places from "pages/places";
import PlaceDetails from "pages/place-details";
import ErrorPage from "pages/error-page";
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
