import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./pages/Shared/Header";
import Home from "./pages/Home/Home";
import Footer from "./pages/Shared/Footer";
import SignUp from "./pages/User/SignUp";
import Login from "./pages/User/Login";
import RequiredAuth from "./pages/Shared/RequiredAuth";
import Purchase from "./pages/Product/Purchase";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
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
    </div>
  );
}

export default App;
