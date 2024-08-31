import React from "react";
import "./index.css";

const Sidebar = ({ onSelect }) => {
  const menuItems = [
    "Dashboard",
    "Inventory",
    "Order",
    "Returns",
    "Customers",
    "Shipping",
    "Channel",
    "Integrations",
    "Calculators",
    "Reports",
    "Account",
  ];

  return (
    <div className="sidebar">
      <ul>
        {menuItems.map((item) => (
          <li key={item} onClick={() => onSelect(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
