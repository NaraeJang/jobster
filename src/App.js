import { Landing, Error, Dashboard, Register } from "./pages/";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Profile, Stats, AddJob, AllJobs } from "./dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <Error />,
  },
  {
    path: "dashboard/",
    element: <Dashboard />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Stats /> },
      { path: "profile", element: <Profile /> },
      { path: "alljobs", element: <AllJobs /> },
      { path: "AddJob", element: <AddJob /> },
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
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
