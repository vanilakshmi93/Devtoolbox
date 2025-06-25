import { useState } from "react";
import TabSwitcher from "./components/TabSwitcher"; // optional
import JsonFormatter from "./components/JsonFormatter";
import Base64Tool from "./components/Base64Tool";
import './App.css'; // 👈 Import the updated CSS

export default function App() {
  const [activeTab, setActiveTab] = useState("json");

  return (
    <div className="container">
      <h1 className="header">Dev Toolbox</h1>

      <nav className="navbar">
        <button
          className={activeTab === "json" ? "active" : ""}
          onClick={() => setActiveTab("json")}
        >
          JSON Formatter
        </button>
        <button
          className={activeTab === "base64" ? "active" : ""}
          onClick={() => setActiveTab("base64")}
        >
          Base64 Tool
        </button>
      </nav>

      {activeTab === "json" ? <JsonFormatter /> : <Base64Tool />}
    </div>
  );
}