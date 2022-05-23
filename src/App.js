import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./pages/Shared/Header";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
