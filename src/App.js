import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import NoData from "./components/NoData";
import "./App.css";

function App() {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const renderContent = () => {
    switch (selectedComponent) {
      case "Dashboard":
        return <Dashboard />;
      default:
        return <NoData />;
    }
  };

  return (
    <div className="app-container">
      <Sidebar onSelect={setSelectedComponent} />
      <div className="content-container">
        {selectedComponent ? renderContent() : <NoData />}
      </div>
    </div>
  );
}

export default App;
