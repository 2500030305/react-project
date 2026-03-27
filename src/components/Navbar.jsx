import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkStyle = ({ isActive }) => ({
    margin: "0 10px",
    color: isActive ? "#38bdf8" : "white", // active link = light blue
    textDecoration: "none",
    fontWeight: isActive ? "bold" : "normal",
  });

  return (
    <div
      style={{
        padding: "12px 20px",
        background: "#0f172a",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: "white",
      }}
    >
      {/* Logo / Title */}
      <h2 style={{ margin: 0 }}>Stocks</h2>

      {/* Navigation Links */}
      <div>
        <NavLink to="/register" style={linkStyle}>
          Register
        </NavLink>

        <NavLink to="/user-login" style={linkStyle}>
          User Login
        </NavLink>
      </div>
    </div>
  );
}