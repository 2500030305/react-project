import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(form));
    alert("Registered Successfully");
    navigate("/user-login");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>

      <input type="email" required placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })} />

      <input type="password" required placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })} />

      <button type="submit">Register</button>
    </form>
  );
} 