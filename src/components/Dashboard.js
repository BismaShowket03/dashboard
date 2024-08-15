// src/Dashboard.js
//commint

import React, { useState } from "react";
import widgetData from "../data/widgets.json";
import "./Dashboard.css";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FaSearch, FaBell, FaCog } from "react-icons/fa";

const dataPie = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const dataBar = [
  { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
  { name: "May", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
];

const Dashboard = () => {
  const [categories, setCategories] = useState(widgetData);

  const addWidget = (category) => {
    const widgetName = prompt("Enter Widget Name:");
    const widgetText = prompt("Enter Widget Text:");

    const newWidget = {
      id: Date.now(),
      name: widgetName,
      text: widgetText,
      chartType: "PieChart", // Default to PieChart for simplicity
      chartData: [
        { name: "Group A", value: 400 },
        { name: "Group B", value: 300 },
        { name: "Group C", value: 300 },
        { name: "Group D", value: 200 },
      ],
    };

    setCategories({
      ...categories,
      [category]: [...categories[category], newWidget],
    });
  };
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="breadcrumbs">
          <span>Home</span> &gt; <span>Dashboard V2</span>
        </div>
        <div className="header-right">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search anything..."
              className="search-bar"
            />
            <FaSearch className="search-icon" />
          </div>
          <FaBell className="header-icon" />
          <FaCog className="header-icon" />
          <div className="profile-picture"></div>
        </div>
      </header>

      <div className="dashboard-section">
        <h1 className="dashboard-title">CNAPP Dashboard</h1>
        <h2>CSPM Executive Dashboard</h2>
        <div className="widgets">
          <div className="widget">
            <h3>Cloud Accounts</h3>
            <ResponsiveContainer width="100%" height={150}>
              <PieChart>
                <Pie
                  data={dataPie}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={50}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {dataPie.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="widget">
            <h3>Cloud Account Risk Assessment</h3>
            <ResponsiveContainer width="100%" height={150}>
              <BarChart data={dataBar}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="uv" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="widget add-widget" onClick={() => addWidget()}>+ Add Widget</div>
        </div>
      </div>

      <div className="dashboard-section">
        <h2>CWPP Dashboard</h2>
        <div className="widgets">
          <div className="widget">
            <h3>Top 5 Namespace Specific Alerts</h3>
            <ResponsiveContainer width="100%" height={150}>
              <BarChart data={dataBar}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="pv" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="widget">
            <h3>Workload Alerts</h3>
            <ResponsiveContainer width="100%" height={150}>
              <PieChart>
                <Pie
                  data={dataPie}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={50}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {dataPie.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="widget add-widget" onClick={() => addWidget()}>+ Add Widget</div>
        </div>
      </div>

      <div className="dashboard-section">
        <h2>Registry Scan</h2>
        <div className="widgets">
          <div className="widget">
            <h3>Image Risk Assessment</h3>
            <ResponsiveContainer width="100%" height={150}>
              <BarChart data={dataBar}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="amt" fill="#ffc658" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="widget">
            <h3>Image Security Issues</h3>
            <ResponsiveContainer width="100%" height={150}>
              <BarChart data={dataBar}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="uv" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="widget add-widget" onClick={() => addWidget()}>+ Add Widget</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
