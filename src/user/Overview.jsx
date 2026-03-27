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

  const buySellData = [
    { name: "Buy", value: 6 },
    { name: "Sell", value: 1 },
  ];

  return (
    <div style={styles.wrapper}>
      <div style={styles.grid}>
        
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Portfolio Value</h3>
          <Chart data={data} type="line" />
        </div>

        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Buy vs Sell</h3>
          <Chart data={buySellData} type="bar" />
        </div>

      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    height: "100%",
    color: "white",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
  },

  card: {
    background: "#0f172a",
    borderRadius: "16px",
    padding: "20px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.5)",
  },

  cardTitle: {
    marginBottom: "15px",
    fontSize: "18px",
    color: "#cbd5f5",
  },
};