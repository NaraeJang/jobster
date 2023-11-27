import { Outlet, useNavigate } from "react-router-dom";
import { SharedLayout } from "../dashboard";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Dashboard = () => {
  const navigate = useNavigate();
  const { isLoading, user } = useSelector((store) => store.user);

  useEffect(() => {
    if (!user) return navigate("/register");
  }, user);

  if (isLoading)
    return (
      <div>
        <h3>loading...</h3>
      </div>
    );

  return (
    <div>
      <SharedLayout />
      <Outlet />
    </div>
  );
};
export default Dashboard;
