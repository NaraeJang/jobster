import { Landing, Error, Register } from "./pages/";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Profile, Stats, AddJob, AllJobs, SharedLayout } from "./dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <Error />,
  },
  {
    path: "dashboard/",
    element: <SharedLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Stats /> },
      { path: "all-jobs", element: <AllJobs /> },
      { path: "add-Job", element: <AddJob /> },
      { path: "profile", element: <Profile /> },
    ],
  },
  {
    path: "register",
    element: <Register />,
    errorElement: <Error />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
