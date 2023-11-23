import { Landing, Error, Dashboard, Register } from "./pages/";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <Error />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    errorElement: <Error />,
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
      <ToastContainer position="top-center" />
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
