import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./pages/Shared/Header";
import Home from "./pages/Home/Home";
import Footer from "./pages/Shared/Footer";
import SignUp from "./pages/User/SignUp";
import Login from "./pages/User/Login";
import RequiredAuth from "./pages/Shared/RequiredAuth";
import Purchase from "./pages/Product/Purchase";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Dashboard/Profile";
import Orders from "./pages/Dashboard/Orders";
import AddReview from "./pages/Dashboard/AddReview";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route
          path="dashboard"
          element={
            <RequiredAuth>
              <Dashboard />
            </RequiredAuth>
          }
        >
          <Route index element={<Profile></Profile>}></Route>
          <Route path="orders" element={<Orders></Orders>}></Route>
          <Route path="addreview" element={<AddReview></AddReview>}></Route>
        </Route>
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route
          path="/purchase/:id"
          element={
            <RequiredAuth>
              <Purchase />
            </RequiredAuth>
          }
        />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
