import { useState } from "react";
import Overview from "./Overview";
import Trade from "./Trade";
import Transactions from "./Transactions";

export default function UserDashboard() {
  const [active, setActive] = useState("overview");

  return (
    <div style={{ display: "flex", height: "100vh" }}>

      {/* Sidebar */}
      <div style={sidebarStyle}>
        <h2>Dashboard</h2>

        <button style={buttonStyle} onClick={() => setActive("overview")}>
          Overview
        </button>

        <button style={buttonStyle} onClick={() => setActive("trade")}>
          Buy / Sell
        </button>

        <button style={buttonStyle} onClick={() => setActive("transactions")}>
          Transactions
        </button>
      </div>

      {/* Content */}
      <div style={contentStyle}>
        {active === "overview" && <Overview />}
        {active === "trade" && <Trade />}
        {active === "transactions" && <Transactions />}
      </div>
    </div>
  );
}

const sidebarStyle = {
  width: "220px",
  background: "#f3f4f6",
  color: "#111827",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  borderRight: "1px solid #e5e7eb",
};

const buttonStyle = {
  padding: "10px",
  borderRadius: "8px",
  border: "none",
  background: "#112651",
  color: "white",        // FIX: text visible
  cursor: "pointer",
};

const contentStyle = {
  flex: 1,
  padding: "20px",
  background: "#e5e7eb",
};