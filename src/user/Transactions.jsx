export default function Transactions() {
  const data = JSON.parse(localStorage.getItem("transactions")) || [];

  return (
    <div>
      <h2>Transactions</h2>

      {data.length === 0 ? (
        <p>No transactions</p>
      ) : (
        <div style={tableContainer}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Type</th>
                <th style={thStyle}>Stock</th>
                <th style={thStyle}>Qty</th>
                <th style={thStyle}>Amount (₹)</th>
                <th style={thStyle}>Time</th>
              </tr>
            </thead>

            <tbody>
              {data.map((t, i) => (
                <tr
                  key={i}
                  style={{
                    ...rowStyle,
                    background: i % 2 === 0 ? "#f9fafb" : "#eef2f7",
                  }}
                >
                  <td style={tdStyle}>{t.type}</td>
                  <td style={tdStyle}>{t.stock}</td>
                  <td style={tdStyle}>{t.qty}</td>
                  <td style={tdStyle}>{t.total}</td>
                  <td style={tdStyle}>{t.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

const tableContainer = {
  marginTop: "20px",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  background: "#ffffff",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
};

const thStyle = {
  background: "#e2e8f0",
  padding: "14px",
  textAlign: "left",
  fontWeight: "600",
  color: "#1f2937",
};

const tdStyle = {
  padding: "12px",
  color: "#374151",
};

const rowStyle = {
  transition: "background 0.2s ease",
  cursor: "default",
};