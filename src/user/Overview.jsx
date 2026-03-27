import { useEffect, useState } from "react";
import { getChartData } from "../api/dashboardApi";
import Chart from "../components/Chart";

export default function Overview() {
  const [data, setData] = useState([]);

  const load = async () => {
    const res = await getChartData();
    setData(res.data);
  };

  useEffect(() => {
    load();
    const interval = setInterval(load, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.wrapper}>
      <h2 style={styles.title}>Overview</h2>

      <div style={styles.grid}>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Portfolio Value</h3>
          <div style={styles.chartBox}>
            <Chart data={data} />
          </div>
        </div>

        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Buy vs Sell</h3>
          <div style={styles.chartBox}>
            <Chart data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    height: "100%",
    padding: "20px",
    background: "#0b1120",
    color: "white",
    overflowY: "auto",
  },

  title: {
    marginBottom: "20px",
    fontSize: "24px",
    fontWeight: "600",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
  },

  card: {
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(20px)",
    borderRadius: "16px",
    padding: "20px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
    display: "flex",
    flexDirection: "column",
  },

  cardTitle: {
    marginBottom: "10px",
    fontSize: "18px",
    fontWeight: "500",
    color: "#cbd5f5",
  },

  chartBox: {
    height: "250px",
  },
};