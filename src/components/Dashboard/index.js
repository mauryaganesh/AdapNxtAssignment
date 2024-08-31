import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import "./index.css";

const Dashboard = () => {
  const lineData = [
    { name: "6/30/2024 - 7/6/2024", Orders: 4, Sales: 1404 },
    { name: "7/7/2024 - 7/13/2024", Orders: 2, Sales: 800 },
    { name: "7/21/2024 - 7/27/2024", Orders: 2, Sales: 480 },
  ];

  const pieData = [
    { name: "Shopify Store", value: 1176 },
    { name: "WooCommerce Store", value: 1483 },
  ];

  const COLORS = ["#00CED1", "#FFA500"];

  const yAxisTickFormatter = (value) => {
    return value === 0 ? "0k" : `${(value / 1000).toFixed(1)}k`;
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const orders = payload.find((p) => p.name === "Orders")?.value || 0;
      const sales = payload.find((p) => p.name === "Sales")?.value || 0;
      const avgOrderValue = orders > 0 ? (sales / orders).toFixed(2) : 0;

      return (
        <div className="custom-tooltip">
          <div className="tooltip-date">{label}</div>
          <div>
            <span style={{ color: "#FFA500" }}>●</span> Order - {orders}
          </div>
          <div>
            <span style={{ color: "#00CED1" }}>●</span> Sales - {sales}
          </div>
          <div>
            <span style={{ color: "#000" }}>●</span> Avg Order Value -{" "}
            {avgOrderValue}
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="main-container">
      <h3 className="container-heading">Dashboard</h3>
      <div className="dashboard-container">
        <div className="line-chart">
          <h3 className="chart-title">Sales vs Orders</h3>
          <hr />
          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" interval={0} tick={{ fontSize: 12 }} />
              <YAxis
                yAxisId="left"
                orientation="left"
                tickFormatter={yAxisTickFormatter}
              />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip content={CustomTooltip} />
              <Legend verticalAlign="top" height={36} />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="Orders"
                stroke="#FFA500"
                activeDot={{ r: 8 }}
              />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="Sales"
                stroke="#00CED1"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="pie-chart-container">
          <h4 className="chart-title">Portion of Sales</h4>
          <hr />
          <PieChart width={300} height={300}>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ percent }) => `${(percent * 100).toFixed(1)}%`}
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
              <text
                x={150}
                y={150}
                textAnchor="middle"
                dominantBaseline="middle"
                className="pie-chart-total"
              >
                2659
              </text>
            </Pie>
            <Tooltip />
            <Legend
              iconType="circle"
              align="center"
              verticalAlign="bottom"
              iconSize={10}
            />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
