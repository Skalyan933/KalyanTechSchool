import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import Courses from "./Pages/Courses";
import { DisplayContent } from "./Components/DisplayContent/DisplayContent";
import MyCourses from "./Components/MyCourses";
import SignUp from "./Components/UserAuthentication/SignUp";
import Login from "./Components/UserAuthentication/Login";
import ForgetPwd from "./Components/ForgetPassword/ForgetPwd";
import UpdatePassword from "./Components/UpdatePassword/UpdatePassword";
import PrivateRoute from "./Components/PrivateRoute";
import AuthProvider from "./Components/UserAuthentication/AuthContext";
import Learn from "./Components/LearnJobPortal/Learn";
import JobPortal from "./Components/LearnJobPortal/JobPortal";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="app-wrapper">
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/DisplayContent/:id" element={<DisplayContent />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgetPwd" element={<ForgetPwd />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/updatePassword" element={<UpdatePassword />} />

              {/* Protected Routes */}
              <Route path="/my-courses" element={<PrivateRoute><MyCourses /></PrivateRoute>} />
              <Route path="/learn" element={<PrivateRoute><Learn /></PrivateRoute>} />
              <Route path="/JobPortal" element={<PrivateRoute><JobPortal /></PrivateRoute>} />

            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
