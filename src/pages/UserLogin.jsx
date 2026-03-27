import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserLogin() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("No user found. Please register first.");
      return;
    }

    if (user.email === form.email && user.password === form.password) {
      alert("Login Successful ✅");
      navigate("/user-dashboard");
    } else {
      alert("Invalid Credentials ❌");
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleLogin} style={styles.card}>
        <h2 style={{ marginBottom: 20 }}>User Login</h2>

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

        <button type="submit" style={styles.button}>
          Login
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