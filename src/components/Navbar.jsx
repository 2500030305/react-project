import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div style={{ padding: 10, background: "#0f172a", color: "white" }}>
      <Link to="/user-login" style={{ margin: 10, color: "white" }}>User</Link>
      <Link to="/admin-login" style={{ margin: 10, color: "white" }}>Admin</Link>
      <Link to="/register" style={{ margin: 10, color: "white" }}>Register</Link>
    </div>
  );
}