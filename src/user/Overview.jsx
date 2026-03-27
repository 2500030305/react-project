import { useEffect, useState } from "react";
import { getChartData } from "../api/dashboardApi";
import Chart from "../components/Chart";

export default function Overview() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [lastUpdated, setLastUpdated] = useState(null);

  const load = async () => {
    try {
      const res = await getChartData();
      setData(res.data);
      setLastUpdated(new Date().toLocaleTimeString());
      setError("");
    } catch (err) {
      setError("Failed to load data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let isMounted = true;

    const safeLoad = async () => {
      if (!isMounted) return;
      await load();
    };

    safeLoad();

    const interval = setInterval(safeLoad, 2000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={{ marginBottom: 10 }}>Overview</h2>

      {/* Status */}
      {loading && <p>Loading chart...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Chart */}
      {!loading && !error && <Chart data={data} />}

      {/* Footer info */}
      {lastUpdated && (
        <p style={styles.footer}>
          Last updated: {lastUpdated}
        </p>
      )}
    </div>
  );
}

const styles = {
  container: {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
  footer: {
    marginTop: "10px",
    fontSize: "12px",
    color: "#6b7280",
  },
};