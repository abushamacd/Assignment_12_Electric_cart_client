import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./pages/Shared/Header";
import Home from "./pages/Home/Home";
import Footer from "./pages/Shared/Footer";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
