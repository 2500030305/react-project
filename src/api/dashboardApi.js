const KEY = "transactions";

export const getChartData = () => {
  const data = JSON.parse(localStorage.getItem(KEY)) || [];
  return Promise.resolve({ data });
};

export const addTransaction = (data) => {
  const old = JSON.parse(localStorage.getItem(KEY)) || [];
  const updated = [...old, data];

  localStorage.setItem(KEY, JSON.stringify(updated));
  return Promise.resolve();
};