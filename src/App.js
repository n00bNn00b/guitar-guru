import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Checkout from "./pages/Checkout/Checkout";
import CourseDetail from "./pages/CourseDetail/CourseDetail";

import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login/Login";
import RequireAuth from "./pages/Login/RequireAuth/RequireAuth";
import Signup from "./pages/Login/Signup/Signup";
import Footer from "./pages/Shared/Footer/Footer";
import Header from "./pages/Shared/Header/Header";
import ThankYou from "./pages/ThankYou/ThankYou";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/course/:courseId" element={<CourseDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route
          path="/thankyou"
          element={
            <RequireAuth>
              <ThankYou />
            </RequireAuth>
          }
        />
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
