import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";

export default function Chart({ data, type = "line" }) {
  if (!data || data.length === 0) {
    return <p style={{ color: "white" }}>No data</p>;
  }

  if (type === "bar") {
    return (
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <Bar dataKey="value" fill="#38bdf8" />
        </BarChart>
      </ResponsiveContainer>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <XAxis dataKey="time" stroke="#ccc" />
        <YAxis stroke="#ccc" />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#38bdf8"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}