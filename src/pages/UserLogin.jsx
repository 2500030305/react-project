import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserLogin() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.email === form.email && user.password === form.password) {
      navigate("/user-dashboard");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>User Login</h2>

      <input type="email" required placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })} />

      <input type="password" required placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })} />

      <button type="submit">Login</button>
    </form>
  );
}