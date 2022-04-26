import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";

import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login/Login";
import Signup from "./pages/Login/Signup/Signup";
import Footer from "./pages/Shared/Footer/Footer";
import Header from "./pages/Shared/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
