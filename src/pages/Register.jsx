import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    localStorage.setItem("user", JSON.stringify({
      email: form.email,
      password: form.password,
    }));

    alert("Registered Successfully");
    navigate("/user-login");
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.card}>
        <h2 style={{ marginBottom: 20 }}>Register</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={form.email}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={form.password}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          required
          value={form.confirmPassword}
          onChange={handleChange}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Register
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#0f172a",
  },
  card: {
    background: "white",
    padding: 30,
    borderRadius: 10,
    width: 300,
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: 10,
    margin: "10px 0",
    borderRadius: 5,
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: 10,
    background: "#0f172a",
    color: "white",
    border: "none",
    borderRadius: 5,
    cursor: "pointer",
  },
};