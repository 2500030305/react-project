import { useEffect, useState } from "react";
import { getChartData } from "../api/dashboardApi";
import Chart from "../components/Chart";

export default function AdminDashboard() {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const res = await getChartData();
    setData(res.data);
  };

  useEffect(() => {
    loadData();
    const interval = setInterval(loadData, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Manufacturing Dashboard 📊</h2>
      <Chart data={data} />
    </div>
  );
}