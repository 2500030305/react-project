import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Overview from "./Overview";
import Trade from "./Trade";
import Transactions from "./Transactions";

export default function UserDashboard() {
  const [active, setActive] = useState("overview");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/user-login");
  };

  return (
    <div style={styles.container}>
      
      <div style={styles.sidebar}>
        <h2 style={styles.logo}>Dashboard</h2>

        <button
          style={active === "overview" ? styles.activeBtn : styles.button}
          onClick={() => setActive("overview")}
        >
          Overview
        </button>

        <button
          style={active === "trade" ? styles.activeBtn : styles.button}
          onClick={() => setActive("trade")}
        >
          Buy / Sell
        </button>

        <button
          style={active === "transactions" ? styles.activeBtn : styles.button}
          onClick={() => setActive("transactions")}
        >
          Transactions
        </button>

        <button style={styles.logoutBtn} onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div style={styles.main}>
        <div style={styles.header}>
          <h3 style={{ margin: 0 }}>
            {active.charAt(0).toUpperCase() + active.slice(1)}
          </h3>
        </div>

        <div style={styles.content}>
          {active === "overview" && <Overview />}
          {active === "trade" && <Trade />}
          {active === "transactions" && <Transactions />}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    background: "#0b1120",
    color: "white",
  },

  sidebar: {
    width: "220px",
    background: "#020617",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  logo: {
    marginBottom: "20px",
  },

  button: {
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    background: "#1e293b",
    color: "white",
    cursor: "pointer",
    textAlign: "left",
  },

  activeBtn: {
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    background: "#38bdf8",
    color: "#0f172a",
    cursor: "pointer",
    textAlign: "left",
    fontWeight: "bold",
  },

  logoutBtn: {
    marginTop: "auto",
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    background: "#ef4444",
    color: "white",
    cursor: "pointer",
  },

  main: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    background: "#0b1120",
  },

  header: {
    padding: "15px 20px",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    background: "#0f172a",
  },

  content: {
    flex: 1,
    overflowY: "auto",
    padding: "20px",
  },
};