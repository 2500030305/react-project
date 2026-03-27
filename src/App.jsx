import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import AdminDashboard from "./admin/AdminDashboard";
import UserDashboard from "./user/UserDashboard";
import AdminLogin from "./pages/AdminLogin";
import UserLogin from "./pages/UserLogin";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";

function Layout() {
  const location = useLocation();

  const hideNavbar =
    location.pathname.includes("dashboard");

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<UserLogin />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/register" element={<Register />} />

        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}