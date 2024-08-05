// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Dashboard from "./dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Header />
      <div className="flex bg-bgcolor">
        <SideBar />
        <Dashboard />
      </div>
    </Router>
  );
}
export default App;
