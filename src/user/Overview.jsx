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
    const interval = setInterval(load, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Overview</h2>
      <Chart data={data} />
    </div>
  );
}