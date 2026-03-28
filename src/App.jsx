import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import UserDashboard from "./user/UserDashboard";
import UserLogin from "./pages/UserLogin";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";

function Layout() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/user-dashboard";

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />

        <Route path="/register" element={<Register />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="*" element={<NotFound />} />
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