import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div class="drawer drawer-mobile">
      <input id="dashboard_sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <h2 className="text-5xl text-secondary">Dashboard</h2>
        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label for="dashboard_sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li className="border-b-2 border-secondary">
            <Link to={"/dashboard"}>My Profile</Link>
          </li>

          {!admin && (
            <li className="border-b-2 border-secondary">
              <Link to={"/dashboard/orders"}>My Orders</Link>
            </li>
          )}

          {!admin && (
            <li className="border-b-2 border-secondary">
              <Link to={"/dashboard/addreview"}>Add A Review</Link>
            </li>
          )}

          {admin && (
            <li>
              <Link to={"/dashboard/alluser"}>All Users</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
