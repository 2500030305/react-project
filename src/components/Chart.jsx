import { LineChart, BarChart } from "@mui/x-charts";

export default function Chart({ data }) {
  const buyCount = data.filter((d) => d.type === "buy").length;
  const sellCount = data.filter((d) => d.type === "sell").length;
  const totalValue = data.map((d) => d.total);

  return (
    <div style={mainContainer}>

      {/* Row 1 */}
      <div style={rowStyle}>
        
        <div style={cardStyle}>
          <h3>Portfolio Value</h3>
          <LineChart
            xAxis={[{ data: data.map((d) => d.time), scaleType: "point" }]}
            series={[{ data: totalValue }]}
            width={400}
            height={250}
            colors={["#1e3a8a"]}   // dark blue
          />
        </div>

        <div style={cardStyle}>
          <h3>Buy vs Sell</h3>
          <BarChart
            xAxis={[{ data: ["Buy", "Sell"] }]}
            series={[{ data: [buyCount, sellCount] }]}
            width={400}
            height={250}
            colors={["#1d4ed8"]}   // slightly lighter blue
          />
        </div>

      </div>

      {/* Row 2 */}
      <div style={rowStyle}>

        <div style={cardStyle}>
          <h3>Transaction Growth</h3>
          <LineChart
            xAxis={[{ data: data.map((_, i) => i + 1), scaleType: "point" }]}
            series={[{ data: data.map((_, i) => i + 1) }]}
            width={400}
            height={250}
            colors={["#1e40af"]}   // mid dark blue
          />
        </div>

        <div style={cardStyle}>
          <h3>Value Distribution</h3>
          <BarChart
            xAxis={[{ data: data.map((_, i) => `T${i + 1}`) }]}
            series={[{ data: totalValue }]}
            width={400}
            height={250}
            colors={["#1e3a8a"]}
          />
        </div>

      </div>
    </div>
  );
}

const mainContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "30px",
};

const rowStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  flexWrap: "wrap",
};

const cardStyle = {
  background: "#ffffff",
  padding: "20px",
  borderRadius: "16px",
  boxShadow: "0 6px 14px rgba(0,0,0,0.08)",
};