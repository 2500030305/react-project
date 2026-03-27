import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

 
  const ADMIN_EMAIL = "admin@gmail.com";
  const ADMIN_PASSWORD = "1234";

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      form.email === ADMIN_EMAIL &&
      form.password === ADMIN_PASSWORD
    ) {
      alert("Admin Login Successful ");
      navigate("/admin-dashboard");
    } else {
      alert("Invalid Admin Credentials ");
    }
  };

  return (
    <form onSubmit={handleLogin} style={{ padding: 20 }}>
      <h2>Admin Login</h2>

      <input
        type="email"
        placeholder="Admin Email"
        required
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        required
        onChange={(e) =>
          setForm({ ...form, password: e.target.value })
        }
      />

      <br /><br />

      <button type="submit">Login</button>
    </form> 
  );
}