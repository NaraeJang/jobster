import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Wrapper from "../assets/wrappers/SharedLayout";
import { SmallSidebar, BigSidebar, Navbar } from "../components";

const SharedLayout = () => {
  const navigate = useNavigate();
  const { isLoading, user } = useSelector((store) => store.user);

  useEffect(() => {
    if (!user) return navigate("/register");
  }, [user]);

  if (isLoading)
    return (
      <Wrapper>
        <h3>loading...</h3>
      </Wrapper>
    );

  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};
export default SharedLayout;
