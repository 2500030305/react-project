import { addTransaction } from "../api/dashboardApi";

export default function Trade() {
  const stocks = [
    { name: "Apple", price: 150 },
    { name: "Tesla", price: 200 },
    { name: "Amazon", price: 120 },
    { name: "Google", price: 180 },
    { name: "Microsoft", price: 170 },
    { name: "Meta", price: 140 },
    { name: "Netflix", price: 160 },
    { name: "Nvidia", price: 220 },
  ];

  const getHoldings = () => {
    return JSON.parse(localStorage.getItem("holdings")) || {};
  };

  const setHoldings = (val) => {
    localStorage.setItem("holdings", JSON.stringify(val));
  };

  const handleTrade = async (stock, type) => {
    const input = prompt(`Enter quantity to ${type} ${stock.name}:`);
    const qty = Number(input);

    if (!qty || qty <= 0) {
      return alert("Invalid quantity");
    }

    const total = qty * stock.price;

    let holdings = getHoldings();
    holdings[stock.name] = holdings[stock.name] || 0;

    if (type === "sell") {
      if (qty > holdings[stock.name]) {
        return alert("Not enough stock to sell");
      }
      holdings[stock.name] -= qty;
    } else {
      holdings[stock.name] += qty;
    }

    setHoldings(holdings);

    await addTransaction({
      type,
      stock: stock.name,
      qty,
      total,
      time: new Date().toLocaleTimeString(),
    });

    alert(`${type.toUpperCase()} SUCCESS - ₹${total}`);
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Trade</h2>

      <div style={containerStyle}>
        {stocks.map((stock, i) => (
          <div key={i} style={cardStyle}>
            <h3>{stock.name}</h3>
            <p>₹{stock.price}</p>

            <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
              <button style={buyBtn} onClick={() => handleTrade(stock, "buy")}>
                Buy
              </button>

              <button style={sellBtn} onClick={() => handleTrade(stock, "sell")}>
                Sell
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "24px",
  marginTop: "40px",
};

const cardStyle = {
  background: "#f9fafb",
  padding: "20px",
  borderRadius: "14px",
  color: "#111827",
  width: "190px",
  textAlign: "center",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
};

const buyBtn = {
  padding: "8px 12px",
  border: "none",
  borderRadius: "6px",
  background: "#10b981",
  color: "white",
  cursor: "pointer",
};

const sellBtn = {
  padding: "8px 12px",
  border: "none",
  borderRadius: "6px",
  background: "#ef4444",
  color: "white",
  cursor: "pointer",
};