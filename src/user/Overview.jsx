import { useEffect, useState } from "react";
import { getChartData } from "../api/dashboardApi";
import Chart from "../components/Chart";

export default function Overview() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = async () => {
    try {
      const res = await getChartData();
      setData(res.data);
      setError("");
    } catch (err) {
      setError("Failed to load data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
    const interval = setInterval(load, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Overview</h2>

      {loading && <p>Loading...</p>}
      {error && <p style={styles.error}>{error}</p>}

      {!loading && !error && (
        <div style={styles.chartBox}>
          <Chart data={data} />
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    background: "white",
    padding: "15px",
    borderRadius: "10px",
    overflow: "hidden",
  },
  title: {
    marginBottom: "10px",
  },
  error: {
    color: "red",
  },
  chartBox: {
    flex: 1,
    maxHeight: "280px",
    overflow: "hidden",
  },
};